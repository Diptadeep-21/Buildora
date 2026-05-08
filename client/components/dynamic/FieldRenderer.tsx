"use client";

import { FieldConfig } from "@/types/config.types";

interface Props {
  field: FieldConfig;
  value: any;
  onChange: (
    name: string,
    value: string | number | boolean
  ) => void;
}

export default function FieldRenderer({
  field,
  value,
  onChange,
}: Props) {
  const commonClasses =
    "w-full p-3 rounded-lg border border-gray-300";

  switch (field.type) {
    case "text":
    case "email":
    case "number":
      return (
        <input
          type={field.type}
          placeholder={field.placeholder}
          value={value || ""}
          onChange={(e) =>
            onChange(field.name, e.target.value)
          }
          className={commonClasses}
        />
      );

    case "textarea":
      return (
        <textarea
          placeholder={field.placeholder}
          value={value || ""}
          onChange={(e) =>
            onChange(field.name, e.target.value)
          }
          className={commonClasses}
        />
      );

    case "select":
      return (
        <select
          value={value || ""}
          onChange={(e) =>
            onChange(field.name, e.target.value)
          }
          className={commonClasses}
        >
          <option value="">
            Select Option
          </option>

          {field.options?.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      );

    case "checkbox":
      return (
        <input
          type="checkbox"
          checked={value || false}
          onChange={(e) =>
            onChange(field.name, e.target.checked)
          }
          className="h-5 w-5"
        />
      );

    default:
      return (
        <div className="bg-red-500/20 text-red-400 p-3 rounded-lg">
          Unsupported field type:
          {" "}
          {field.type}
        </div>
      );
  }
}