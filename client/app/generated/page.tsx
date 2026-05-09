"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getConfigs,
  deleteConfig,
} from "@/services/config.service";

import AppCard from "@/components/dashboard/AppCard";

export default function GeneratedAppsPage() {

  const [configs, setConfigs] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  /*
    FETCH CONFIGS
  */

  const fetchConfigs =
    async () => {

      try {

        const data =
          await getConfigs();

        setConfigs(
          data.configs
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchConfigs();

  }, []);

  /*
    DELETE APP
  */

  const handleDelete =
    async (
      id: string
    ) => {

      const confirmDelete =
        confirm(
          "Delete this app?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteConfig(id);

        setConfigs((prev) =>
          prev.filter(
            (app) =>
              app.id !== id
          )
        );

      } catch (error) {

        console.log(error);
      }
    };

  /*
    LOADING
  */

  if (loading) {

    return (
      <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center">

        <div className="text-2xl font-semibold">

          Loading apps...

        </div>

      </div>
    );
  }

  /*
    EMPTY STATE
  */

  if (!configs.length) {

    return (
      <div className="min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-5xl font-bold mb-4">

          No Apps Yet

        </h1>

        <p className="text-gray-600 text-xl">

          Generate your first AI app
          to get started.

        </p>

      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5efe8] p-8">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-bold text-black">

            Your AI Apps

          </h1>

          <p className="text-gray-600 mt-2 text-lg">

            Dynamically generated internal tools

          </p>

        </div>

      </div>

      {/* GRID */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {configs.map((app) => (

          <AppCard
            key={app.id}

            app={app}

            onDelete={
              handleDelete
            }
          />
        ))}

      </div>

    </main>
  );
}