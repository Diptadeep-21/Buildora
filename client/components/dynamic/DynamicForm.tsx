"use client";

import { useState } from "react";

import DynamicField from "./DynamicField";

import {
  EntityConfig,
} from "@/types/config.types";

interface Props {

  entity: EntityConfig;

  onSubmit: (
    entityName: string,
    data: any
  ) => void;
}

export default function DynamicForm({

  entity,
  onSubmit,

}: Props) {

  const [formData, setFormData] =
    useState<Record<string, any>>({});

  /*
    HANDLE FIELD CHANGE
  */

  const handleChange = (

    name: string,

    value: string | number | boolean

  ) => {

    setFormData((prev) => ({

      ...prev,

      [name]: value,
    }));
  };

  /*
    HANDLE SUBMIT
  */

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    /*
      SEND ENTITY NAME + DATA
    */

    onSubmit(
      entity.name,
      formData
    );

    /*
      CLEAR FORM
    */

    setFormData({});

    console.log(
      "Submitted:",
      formData
    );
  };

  return (

    <form
      onSubmit={handleSubmit}

      className="
        space-y-6
        bg-slate-900
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-xl
      "
    >

      <h2 className="text-2xl font-bold text-white">

        {entity.name} Form

      </h2>

      {entity.fields.map((field) => (

        <DynamicField
          key={field.name}

          field={field}

          value={
            formData[field.name] || ""
          }

          onChange={
            handleChange
          }
        />
      ))}

      <button
        type="submit"

        className="
          bg-blue-600
          hover:bg-blue-700
          transition-all
          px-6
          py-3
          rounded-2xl
          font-semibold
          text-white
        "
      >

        Submit

      </button>

    </form>
  );
}