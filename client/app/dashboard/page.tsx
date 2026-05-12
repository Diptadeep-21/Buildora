"use client";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { Sparkles, LayoutDashboard, Database, Rocket } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "Apps Generated", value: "12", icon: LayoutDashboard },
    { title: "Database Models", value: "34", icon: Database },
    { title: "Deployments", value: "8", icon: Rocket },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#09090b] flex">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="p-8 md:p-10 mt-14">

            {/* HEADER */}
            <div className="mb-10 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#7c3aed] flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">
                    Dashboard
                  </h1>
                  <p className="text-xs text-[#52525b] mt-0.5">
                    Manage your generated AI apps
                  </p>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#111113] border border-[#1f1f23] hover:border-[#3b1fa8] rounded-2xl p-5 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-[#52525b] mb-3">{item.title}</p>
                        <h2 className="text-4xl font-bold text-white tracking-tight">
                          {item.value}
                        </h2>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#1a0a3e] flex items-center justify-center text-[#a78bfa] group-hover:bg-[#2d1060] transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RECENT APPS */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-base font-semibold text-white tracking-tight">
                    Recent apps
                  </h2>
                  <p className="text-xs text-[#52525b] mt-0.5">
                    Your AI-generated applications
                  </p>
                </div>
                <button className="px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-semibold rounded-xl transition-all hover:scale-105">
                  + Create new app
                </button>
              </div>

              {/* EMPTY STATE */}
              <div className="bg-[#111113] border border-[#1f1f23] rounded-2xl p-16 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#1a0a3e] flex items-center justify-center mb-5">
                  <Sparkles size={20} className="text-[#a78bfa]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  No apps generated yet
                </h3>
                <p className="text-xs text-[#52525b] leading-relaxed max-w-sm mb-6">
                  Start building AI-powered business apps using natural language prompts. Describe your idea and we'll handle the rest.
                </p>
                <button className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold rounded-xl transition-all hover:scale-105">
                  Generate your first app →
                </button>
              </div>
            </div>

          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}