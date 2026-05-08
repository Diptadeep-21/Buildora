"use client";

import {
  EntityConfig,
} from "@/types/config.types";

interface Props {
  entity: EntityConfig;
  records: any[];
}

export default function DynamicTable({
  entity,
  records,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-700">
        <thead className="bg-slate-800">
          <tr>
            {entity.fields.map((field) => (
              <th
                key={field.name}
                className="p-3 border border-gray-700 text-left"
              >
                {field.label || field.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                {entity.fields.map((field) => (
                  <td
                    key={field.name}
                    className="p-3 border border-gray-700"
                  >
                    {String(
                      record[field.name]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={
                  entity.fields.length
                }
                className="p-4 text-center text-gray-400"
              >
                No Records Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}