"use client";

import Link from "next/link";

interface Props {

  pages: {
    name: string;
    route: string;
  }[];
}

export default function DynamicSidebar({
  pages,
}: Props) {

  return (
    <aside className="w-64 min-h-screen bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
        Generated App
      </h2>

      <nav className="space-y-4">

        {pages.map((page) => (

          <Link
            key={page.route}

            href={`/generated/page/${page.route}`}
          >

            <div className="text-gray-300 hover:text-white transition">

              {page.name}

            </div>

          </Link>
        ))}

      </nav>

    </aside>
  );
}