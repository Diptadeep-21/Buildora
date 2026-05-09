"use client";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

import {
    Sparkles,
    LayoutDashboard,
    Database,
    Rocket,
} from "lucide-react";

export default function DashboardPage() {

    const stats = [
        {
            title: "Apps Generated",
            value: "12",
            icon: LayoutDashboard,
        },
        {
            title: "Database Models",
            value: "34",
            icon: Database,
        },
        {
            title: "Deployments",
            value: "8",
            icon: Rocket,
        },
    ];

    return (

        <ProtectedRoute>

            <div className="min-h-screen bg-[#f5efe8] flex">

                {/* SIDEBAR */}

                <Sidebar />

                {/* MAIN CONTENT */}

                <div className="flex-1 flex flex-col">

                    <Navbar />

                    {/* PAGE CONTENT */}

                    <main className="p-8 md:p-10 mt-24">

                        {/* HEADER */}

                        <div className="mb-10">

                            <div className="flex items-center gap-3">

                                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg">

                                    <Sparkles size={22} />

                                </div>

                                <div>

                                    <h1 className="text-4xl font-bold text-black">

                                        Dashboard

                                    </h1>

                                    <p className="text-gray-500 text-lg mt-1">

                                        Manage your generated AI apps

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* STATS */}

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                            {stats.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={index}
                                        className="
                      bg-white/80
                      backdrop-blur-lg
                      border border-white/40
                      rounded-3xl
                      p-6
                      shadow-lg
                      hover:shadow-2xl
                      hover:-translate-y-1
                      transition-all
                    "
                                    >

                                        <div className="flex items-center justify-between">

                                            <div>

                                                <p className="text-gray-500 text-sm">

                                                    {item.title}

                                                </p>

                                                <h2 className="text-4xl font-bold mt-3 text-black">

                                                    {item.value}

                                                </h2>

                                            </div>

                                            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shadow-md">

                                                <Icon size={24} />

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                        {/* RECENT APPS */}

                        <div className="mt-12">

                            <div className="flex items-center justify-between mb-6">

                                <h2 className="text-2xl font-bold text-black">

                                    Recent Generated Apps

                                </h2>

                                <button
                                    className="
                    bg-black
                    text-white
                    px-6
                    py-3
                    rounded-2xl
                    hover:scale-105
                    transition-all
                  "
                                >

                                    Create New App

                                </button>

                            </div>

                            {/* EMPTY STATE */}

                            <div
                                className="
    bg-white/80
    backdrop-blur-lg
    border border-white/40
    rounded-3xl
    p-16
    shadow-lg

    flex
    flex-col
    items-center
    justify-center
    text-center
  "
                            >

                                <div className="w-20 h-20 rounded-3xl bg-black text-white flex items-center justify-center mx-auto shadow-lg">

                                    <Sparkles size={34} />

                                </div>

                                <h3 className="text-2xl font-bold mt-6 text-black">

                                    No Apps Generated Yet

                                </h3>

                                <p
                                    className="
    text-gray-500
    text-lg
    leading-relaxed
    text-center
    max-w-2xl
    mx-auto
    mt-5
  "
                                >

                                    Start building AI-powered business apps using natural language prompts.

                                </p>

                                <button
                                    className="
                    mt-8
                    bg-black
                    text-white
                    px-8
                    py-4
                    rounded-2xl
                    hover:scale-105
                    transition-all
                  "
                                >

                                    Generate Your First App

                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </ProtectedRoute>
    );
}