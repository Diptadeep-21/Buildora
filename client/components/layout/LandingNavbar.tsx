"use client";

import Link from "next/link";

import {
    Sparkles,
} from "lucide-react";

export default function LandingNavbar() {

    return (

        <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 py-6">

            <div className="w-[95%] max-w-7xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-3xl px-12 h-24 flex items-center justify-between">

                {/* LOGO */}

                <Link href="/">

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center text-white">

                            <Sparkles size={20} />

                        </div>

                        <div>

                            <h1 className="text-2xl font-bold text-black leading-none">

                                Buildora

                            </h1>

                            <p className="text-xs text-gray-500 mt-1">

                                AI App Generator

                            </p>

                        </div>

                    </div>

                </Link>

                {/* NAV LINKS */}

                <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

                    <a
                        href="#features"
                        className="hover:text-black transition"
                    >
                        Features
                    </a>

                    <a
                        href="#architecture"
                        className="hover:text-black transition"
                    >
                        Architecture
                    </a>

                    <a
                        href="#cta"
                        className="hover:text-black transition"
                    >
                        Get Started
                    </a>

                </nav>

                {/* CTA */}

                <Link
                    href="/dashboard"
                >

                    <div
                        className="
      bg-black
      min-w-42.5
      h-14
      px-8
      rounded-2xl
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-105
      transition-all
    "
                    >

                        <span
                            className="
        text-white
        text-lg
        font-semibold
        leading-none
      "
                        >

                            Dashboard

                        </span>

                    </div>

                </Link>

            </div>

        </header>
    );
}