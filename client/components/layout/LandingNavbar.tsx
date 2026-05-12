"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function LandingNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#7c3aed] flex items-center justify-center">
              <Sparkles size={14} className="text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              Buildora
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-[#71717a] text-sm">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#architecture" className="hover:text-white transition">Architecture</a>
          <a href="#cta" className="hover:text-white transition">Get started</a>
        </nav>

        {/* AUTH + CTA */}
        <div className="flex items-center gap-2">
          <Link href="/login">
            <div className="px-4 py-1.5 rounded-lg text-[#71717a] hover:text-white text-sm font-medium transition">
              Login
            </div>
          </Link>
          <Link href="/signup">
            <div className="px-4 py-1.5 border border-[#27272a] hover:border-[#3f3f46] hover:bg-[#18181b] rounded-lg text-white text-sm font-medium transition">
              Sign up
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="px-4 py-1.5 bg-[#7c3aed] hover:bg-[#6d28d9] rounded-lg text-white text-sm font-medium transition">
              Dashboard
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
}