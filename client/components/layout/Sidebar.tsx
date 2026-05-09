"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  WandSparkles,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "AI Builder",
      href: "/builder",
      icon: WandSparkles,
    },
    {
      name: "Generated Apps",
      href: "/generated",
      icon: FolderKanban,
    },
  ];

  return (

    <aside
      className="
        w-72
        h-screen
        bg-slate-950
        border-r
        border-white/10
        px-6
        py-8
        flex
        flex-col
        shadow-2xl
      "
    >

      {/* TOP CONTENT */}

      <div className="flex flex-col flex-1">

        {/* LOGO */}

        <div className="flex items-center gap-4 mb-12">

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-white
              text-black
              flex
              items-center
              justify-center
              shadow-lg
            "
          >

            <Sparkles size={24} />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">

              Buildora

            </h1>

            <p className="text-slate-400 text-sm mt-1">

              AI App Generator

            </p>

          </div>

        </div>

        {/* NAVIGATION */}

        <div className="flex flex-col gap-5">

          {links.map((item, index) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (

              <Link
                key={index}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  group

                  ${
                    active
                      ? "bg-white text-black shadow-xl"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >

                <div
                  className={`
                    w-12
                    h-12
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-all

                    ${
                      active
                        ? "bg-black text-white"
                        : "bg-white/10 text-slate-300 group-hover:bg-white/20"
                    }
                  `}
                >

                  <Icon size={22} />

                </div>

                <span className="text-xl font-medium">

                  {item.name}

                </span>

              </Link>
            );
          })}

        </div>

      </div>

      {/* BOTTOM CARD */}

      <div
        className="
          mt-auto
          bg-gradient-to-br
          from-indigo-500
          to-purple-600
          rounded-3xl
          p-6
          text-white
          shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold leading-tight">

          AI Runtime Engine

        </h3>

        <p className="text-base text-white/90 mt-4 leading-relaxed">

          Generate powerful full-stack business applications instantly using AI.

        </p>

        <button
          className="
            mt-6
            w-full
            bg-white
            text-black
            py-4
            rounded-2xl
            text-lg
            font-semibold
            hover:scale-105
            transition-all
            shadow-lg
          "
        >

          Upgrade Pro

        </button>

      </div>

    </aside>
  );
}