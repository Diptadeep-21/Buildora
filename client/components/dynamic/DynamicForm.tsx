"use client";

import { useState } from "react";

import DynamicField from "./DynamicField";

import {
  EntityConfig,
} from "@/types/config.types";

interface Props {
  entity: EntityConfig;
  onSubmit: (data: any) => void;
}

export default function DynamicForm({
  entity,
  onSubmit,
}: Props) {
  const [formData, setFormData] = useState<
    Record<string, any>
  >({});

  const handleChange = (
    name: string,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSubmit(formData);

    console.log("Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-gray-400 p-6 rounded-xl"
    >
      <h2 className="text-2xl font-bold">
        {entity.name} Form
      </h2>

      {entity.fields.map((field) => (
        <DynamicField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}

      <button
        type="submit"
        className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}