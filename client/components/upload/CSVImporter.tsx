"use client";

import {
  ChangeEvent,
} from "react";

import Papa from "papaparse";

import API from "@/lib/api";

interface Props {

  entityName: string;

  onImport: (
    records: any[]
  ) => void;
}

export default function CSVImporter({
  entityName,
  onImport,
}: Props) {

  /*
    HANDLE CSV
  */

  const handleCSVUpload =
    (
      event: ChangeEvent<HTMLInputElement>
    ) => {

      const file =
        event.target.files?.[0];

      if (!file) return;

      /*
        PARSE CSV
      */

      Papa.parse(file, {

        header: true,

        skipEmptyLines: true,

        complete: async (
          results
        ) => {

          try {

            const parsedData =
              results.data as any[];

            /*
              SAVE RECORDS
            */

            for (
              const row of parsedData
            ) {

              await API.post(
                "/records",
                {
                  entityName,

                  data: row,
                }
              );
            }

            /*
              UPDATE UI
            */

            onImport(
              parsedData
            );

            alert(
              "CSV Imported Successfully"
            );

          } catch (error) {

            console.log(error);

            alert(
              "CSV Import Failed"
            );
          }
        },
      });
    };

  return (
    <div className="bg-slate-900 p-4 rounded-xl">

      <h2 className="text-xl font-bold mb-3">
        Import CSV
      </h2>

      <input
        type="file"

        accept=".csv"

        onChange={
          handleCSVUpload
        }
      />

    </div>
  );
}