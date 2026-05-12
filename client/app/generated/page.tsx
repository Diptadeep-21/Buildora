"use client";

import { useEffect, useState } from "react";
import { getConfigs, deleteConfig } from "@/services/config.service";
import AppCard from "@/components/dashboard/AppCard";
import { Sparkles, LayoutGrid } from "lucide-react";

export default function GeneratedAppsPage() {
  const [configs, setConfigs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchConfigs = async () => {
    try {
      const data = await getConfigs();
      setConfigs(data.configs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this app?");
    if (!confirmDelete) return;
    try {
      await deleteConfig(id);
      setConfigs((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  /* LOADING */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a0a3e] flex items-center justify-center animate-pulse">
            <Sparkles size={14} className="text-[#a78bfa]" />
          </div>
          <span className="text-sm text-[#52525b] font-medium">
            Loading apps...
          </span>
        </div>
      </div>
    );
  }

  /* EMPTY STATE */
  if (!configs.length) {
    return (
      <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-center px-6">
        <div className="w-12 h-12 rounded-2xl bg-[#1a0a3e] flex items-center justify-center mb-5">
          <Sparkles size={20} className="text-[#a78bfa]" />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight mb-2">
          No apps yet
        </h1>
        <p className="text-xs text-[#52525b] leading-relaxed max-w-xs mb-6">
          Generate your first AI-powered app to get started. Describe your idea
          and we'll build it instantly.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold rounded-xl transition-all hover:scale-105"
        >
          Generate your first app →
        </button>
      </div>
    );
  }

  /* MAIN */
  return (
    <main className="min-h-screen bg-[#09090b] p-8 md:p-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#7c3aed] flex items-center justify-center">
            <LayoutGrid size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Your AI apps
            </h1>
            <p className="text-xs text-[#52525b] mt-0.5">
              {configs.length} dynamically generated{" "}
              {configs.length === 1 ? "app" : "apps"}
            </p>
          </div>
        </div>

        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-semibold rounded-xl transition-all hover:scale-105"
        >
          + Generate new app
        </button>
      </div>

      {/* DIVIDER */}
      <hr className="border-[#1f1f23] mb-8" />

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {configs.map((app) => (
          <AppCard key={app.id} app={app} onDelete={handleDelete} />
        ))}
      </div>

    </main>
  );
}