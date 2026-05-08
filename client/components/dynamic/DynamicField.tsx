"use client";

import FieldRenderer from "./FieldRenderer";
import { FieldConfig } from "@/types/config.types";

interface Props {
  field: FieldConfig;
  value: any;
  onChange: (
    name: string,
    value: string | number | boolean
  ) => void;
}

export default function DynamicField({
  field,
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">
        {field.label || field.name}

        {field.required && (
          <span className="text-red-400 ml-1">
            *
          </span>
        )}
      </label>

      <FieldRenderer
        field={field}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}