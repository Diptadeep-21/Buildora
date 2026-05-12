"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Database,
  LayoutDashboard,
  ShieldCheck,
  MessageSquare,
  Table,
  Layout,
} from "lucide-react";
import API from "@/lib/api";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import LandingNavbar from "@/components/layout/LandingNavbar";

export default function HomePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Generating app...");

  const handleGenerate = async () => {
    if (!prompt) return;
    try {
      setLoading(true);
      setLoadingText("Generating app...");
      const response = await API.post("/ai/generate", { prompt });
      const generatedConfig = response.data.config;
      localStorage.setItem("generatedConfig", JSON.stringify(generatedConfig));
      await API.post("/configs", {
        name: generatedConfig.appName,
        config: generatedConfig,
      });
      router.push("/generated");
    } catch (error) {
      console.log(error);
      alert("AI generation failed");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <Sparkles size={18} />,
      title: "AI app generation",
      desc: "Generate complete multi-page business apps using natural language prompts.",
    },
    {
      icon: <LayoutDashboard size={18} />,
      title: "Dynamic runtime engine",
      desc: "Render forms, tables, and dashboards dynamically from AI-generated configs.",
    },
    {
      icon: <Database size={18} />,
      title: "PostgreSQL persistence",
      desc: "Store generated apps, records, and configs securely using PostgreSQL.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Secure SaaS architecture",
      desc: "JWT auth, protected APIs, and user-scoped application management.",
    },
  ];

  const stats = [
    {
      icon: <MessageSquare size={18} />,
      value: "AI",
      title: "Prompt driven",
      desc: "Describe your app in plain language, no specs needed.",
    },
    {
      icon: <Table size={18} />,
      value: "CSV",
      title: "Bulk import",
      desc: "Seed your app with real data via CSV uploads instantly.",
    },
    {
      icon: <Layout size={18} />,
      value: "Multi",
      title: "Page runtime",
      desc: "Full multi-page apps with dynamic routing, not just dashboards.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-x-hidden font-sans">
      {loading && <LoadingOverlay text={loadingText} />}

      <LandingNavbar />

      <div className="w-full flex flex-col items-center">

        {/* HERO */}
        <section className="w-full pt-28 pb-16 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#1a0a3e] border border-[#3b1fa8] text-[#a78bfa] px-4 py-2 rounded-full text-xs font-medium mb-6">
              <Sparkles size={12} />
              AI-powered internal tool builder
            </div>

            {/* TITLE */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-5"
              style={{
                background: "linear-gradient(180deg, #ffffff 50%, #52525b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build full-stack
              <br />
              apps using AI
            </h1>

            {/* SUBTITLE */}
            <p className="text-[#71717a] text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Describe your idea in plain language. Get a complete,
              production-ready application — dashboards, APIs, auth, and
              database included.
            </p>

            {/* PROMPT BOX */}
            <div className="w-full bg-[#111113] border border-[#27272a] rounded-2xl p-5">
              <div className="text-[10px] font-semibold text-[#52525b] uppercase tracking-widest mb-3">
                Your prompt
              </div>
              <textarea
                placeholder="Describe the app you want to build..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-28 resize-none outline-none text-base text-white placeholder:text-[#3f3f46] bg-transparent leading-relaxed"
              />
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[#1f1f23]">
                {[
                  "CRM Platform",
                  "HR Dashboard",
                  "Inventory System",
                  "Task Tracker",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPrompt(`Create a ${item}`)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#27272a] text-[#71717a] hover:border-[#7c3aed] hover:text-[#a78bfa] transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={handleGenerate}
                className="w-full mt-4 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-sm rounded-xl transition-all hover:scale-[1.01]"
              >
                Generate app →
              </button>
            </div>

            {/* STATS ROW */}
            <div className="flex gap-10 mt-8 pt-8 border-t border-[#1f1f23] w-full justify-center">
              {[
                ["10K+", "Apps generated"],
                ["99%", "Faster than manual"],
                ["24/7", "AI automation"],
              ].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-bold tracking-tight">{val}</div>
                  <div className="text-xs text-[#52525b] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="w-full border-[#1f1f23]" />

        {/* FEATURES */}
        <section id="features" className="w-full max-w-6xl mx-auto px-6 py-20">
          <p className="text-[11px] font-semibold text-[#7c3aed] uppercase tracking-widest text-center mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-3">
            Powerful features
          </h2>
          <p className="text-sm text-[#52525b] text-center mb-10 max-w-lg mx-auto leading-relaxed">
            Everything you need to generate, run, and scale AI-powered
            applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#111113] border border-[#1f1f23] hover:border-[#3b1fa8] rounded-2xl p-6 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1a0a3e] flex items-center justify-center text-[#a78bfa] mb-4 group-hover:bg-[#2d1060] transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
                <p className="text-xs text-[#52525b] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="w-full border-[#1f1f23]" />

        {/* ARCHITECTURE / STATS */}
        <section id="architecture" className="w-full max-w-6xl mx-auto px-6 py-20">
          <p className="text-[11px] font-semibold text-[#7c3aed] uppercase tracking-widest text-center mb-3">
            Built for scale
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-3">
            Production-grade architecture
          </h2>
          <p className="text-sm text-[#52525b] text-center mb-10 max-w-lg mx-auto leading-relaxed">
            Every app ships with a scalable, deploy-ready foundation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-[#111113] border border-[#1f1f23] hover:border-[#3b1fa8] rounded-2xl p-6 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1a0a3e] flex items-center justify-center text-[#a78bfa] mb-4 group-hover:bg-[#2d1060] transition-colors">
                  {s.icon}
                </div>
                <div className="text-3xl font-bold tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="text-sm font-semibold mb-2">{s.title}</div>
                <div className="text-xs text-[#52525b] leading-relaxed">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="w-full border-[#1f1f23]" />

        {/* CTA */}
        <section id="cta" className="w-full max-w-6xl mx-auto px-6 py-20">
          <div className="bg-[#111113] border border-[#27272a] rounded-3xl p-12 sm:p-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[#1a0a3e] border border-[#3b1fa8] text-[#a78bfa] px-4 py-2 rounded-full text-xs font-medium mb-6">
              <Sparkles size={12} />
              No credit card required
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Start building with AI today
            </h2>
            <p className="text-sm text-[#52525b] leading-relaxed mb-8 max-w-md mx-auto">
              Generate production-ready full-stack apps instantly using
              AI-powered runtime generation.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-8 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold rounded-xl transition-all hover:scale-105"
              >
                Try it free →
              </button>
              <button className="px-8 py-3.5 border border-[#27272a] text-[#a1a1aa] hover:bg-[#18181b] hover:text-white text-sm rounded-xl transition-all">
                Book a demo
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full border-t border-[#1f1f23] py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#7c3aed] flex items-center justify-center">
                <Sparkles size={12} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-white">Buildora</span>
            </div>
            <p className="text-xs text-[#3f3f46] text-center">
              Built with Next.js · Express · PostgreSQL · Prisma · Groq AI
            </p>
            <p className="text-xs text-[#3f3f46]">
              © 2026 Buildora. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}