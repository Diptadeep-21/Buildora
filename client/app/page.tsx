"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  Sparkles,
  Database,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

import { MessageSquare, Table, Layout } from "lucide-react"

import API from "@/lib/api";

import LoadingOverlay from "@/components/ui/LoadingOverlay";

import LandingNavbar from "@/components/layout/LandingNavbar";

import FeatureCard from "@/components/landing/FeatureCard";

import StatsCard from "@/components/landing/StatsCard";

export default function HomePage() {

  const router =
    useRouter();

  const [prompt, setPrompt] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [loadingText, setLoadingText] =
    useState(
      "Generating app..."
    );

  /*
    GENERATE APP
  */

  const handleGenerate =
    async () => {

      if (!prompt) return;

      try {

        setLoading(true);

        setLoadingText(
          "Generating app..."
        );

        const response =
          await API.post(
            "/ai/generate",
            {
              prompt,
            }
          );

        const generatedConfig =
          response.data.config;

        localStorage.setItem(
          "generatedConfig",

          JSON.stringify(
            generatedConfig
          )
        );

        await API.post(
          "/configs",
          {
            name:
              generatedConfig.appName,

            config:
              generatedConfig,
          }
        );

        router.push(
          "/generated"
        );

      } catch (error) {

        console.log(error);

        alert(
          "AI generation failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <main className="min-h-screen bg-[#f5efe8] overflow-x-hidden">

      {loading && (
        <LoadingOverlay
          text={loadingText}
        />
      )}

      <LandingNavbar />
      <div className="h-28" />

      {/* PAGE WRAPPER */}

      <div className="w-full flex flex-col items-center">

        {/* HERO */}

        <section className="w-full pt-16 pb-28 flex justify-center items-center">

          <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md mb-8">

              <Sparkles
                size={18}
              />

              <span className="text-sm font-medium text-gray-700">

                AI Powered Internal Tools Generator

              </span>

            </div>

            {/* TITLE */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight w-full max-w-4xl mx-auto text-center">

              Build Full-Stack
              <br />
              Business Apps
              <br />
              Using AI

            </h1>

            {/* SUBTITLE */}

            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mt-8 w-full max-w-4xl mx-auto leading-relaxed text-center">

              Generate dynamic internal tools,
              dashboards, forms, and databases
              instantly using natural language.

            </p>

            {/* PROMPT BOX */}

            <div className="w-full max-w-5xl mx-auto bg-white rounded-[36px] shadow-2xl border border-gray-200 p-6 sm:p-8 mt-14">

              <textarea
                placeholder="Describe the app you want to build..."

                value={prompt}

                onChange={(e) =>
                  setPrompt(
                    e.target.value
                  )
                }

                className="w-full h-56 resize-none outline-none text-xl sm:text-2xl text-black placeholder:text-gray-400 bg-transparent"
              />

              {/* QUICK PROMPTS */}

              <div className="flex flex-wrap justify-center gap-3 mt-8">

                {[
                  "CRM Platform",
                  "HR Dashboard",
                  "Inventory System",
                  "Task Tracker",
                ].map((item) => (

                  <button
                    key={item}

                    onClick={() =>
                      setPrompt(
                        `Create a ${item}`
                      )
                    }

                    className="bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-full text-sm sm:text-base"
                  >

                    {item}

                  </button>
                ))}

              </div>

              {/* CTA */}

              <div className=" bg-black
  text-white
  h-16
  min-w-[240px]
  px-12
  mt-10
  rounded-2xl
  shadow-lg
  flex
  items-center
  justify-center
  text-lg
  sm:text-xl
  font-semibold
  whitespace-nowrap
  hover:scale-105
  transition-all">

                <button
                  onClick={
                    handleGenerate
                  }

                  className="bg-black text-white px-10 py-5 rounded-2xl text-lg sm:text-xl hover:opacity-90 transition"
                >

                  Generate App

                </button>

              </div>

            </div>

          </div>

        </section>
        <div className="h-20" />

        {/* FEATURES */}

        <section
          id="features"
          className="w-full mt-24 py-40 flex justify-center"
        >

          <div className="w-full max-w-7xl px-6">

            <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-20">

              Powerful Features

            </h2>
            <div className="h-10" />

            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 place-items-center">

              <FeatureCard
                icon={
                  <Sparkles
                    size={40}
                  />
                }

                title="AI App Generation"

                description="Generate complete multi-page business apps using natural language prompts."
              />

              <FeatureCard
                icon={
                  <LayoutDashboard
                    size={40}
                  />
                }

                title="Dynamic Runtime Engine"

                description="Render forms, tables, pages, and dashboards dynamically from AI-generated configs."
              />

              <FeatureCard
                icon={
                  <Database
                    size={40}
                  />
                }

                title="PostgreSQL Persistence"

                description="Store generated apps, records, and configurations securely using PostgreSQL."
              />

              <FeatureCard
                icon={
                  <ShieldCheck
                    size={40}
                  />
                }

                title="Secure SaaS Architecture"

                description="JWT authentication, protected APIs, and user-scoped application management."
              />

            </div>

          </div>

        </section>
        <div className="h-20" />

        {/* STATS */}

        <section
          id="architecture"
          className="w-full mt-24 py-40 flex justify-center"
        >

          <div className="w-full max-w-7xl px-6">

            <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-28">

              Built For Scale

            </h2>
            <div className="h-10" />

            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-3 gap-8 place-items-center">

              <StatsCard
                value="AI"
                label="Prompt Driven Generation"
              />

              <StatsCard
                value="CSV"
                label="Bulk Data Import"
              />

              <StatsCard
                value="Multi"
                label="Page Runtime Architecture"
              />

            </div>

          </div>

        </section>
        <div className="h-20" />

        {/* CTA */}

        <section
          id="cta"
          className="w-full mt-24 py-40 flex justify-center"
        >

          <div className="w-full max-w-6xl px-6">

            <div className="w-full bg-black rounded-[42px] text-white p-14 sm:p-20 shadow-2xl flex flex-col items-center">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center">

                Start Building
                <br />
                With AI Today

              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mt-8 max-w-3xl leading-relaxed text-center">

                Generate powerful internal tools
                <br className="hidden sm:block" />
                in seconds using AI-powered runtime generation.

              </p>

              <button
                onClick={() => {

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}

                className="mt-10 self-center bg-white text-black px-10 py-5 rounded-2xl text-lg sm:text-xl hover:opacity-90 transition"
              >

                Try AI Generator

              </button>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="w-full border-t border-gray-300 py-10 text-center text-gray-600 px-6">

          <div className="max-w-7xl mx-auto">

            Built using Next.js, Express,
            PostgreSQL, Prisma, Groq AI,
            and dynamic runtime rendering.

          </div>

        </footer>

      </div>

    </main>
  );
}