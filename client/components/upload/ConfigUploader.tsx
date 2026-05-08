"use client";

import { ChangeEvent } from "react";

import { AppConfig } from "@/types/config.types";

interface Props {
  onConfigLoad: (
    config: AppConfig
  ) => void;
}

export default function ConfigUploader({
  onConfigLoad,
}: Props) {
  const handleFileUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(
          e.target?.result as string
        );

        onConfigLoad(json);
      } catch (error) {
        alert("Invalid JSON File");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        Upload App Config
      </h2>

      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="block w-full"
      />
    </div>
  );
}