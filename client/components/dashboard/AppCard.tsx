"use client";

import Link from "next/link";

import {
  formatDistanceToNow,
} from "date-fns";

interface Props {

  app: {
    id: string;
    name: string;
    createdAt: string;

    config: any;
  };

  onDelete: (
    id: string
  ) => void;
}

export default function AppCard({
  app,
  onDelete,
}: Props) {

  const totalPages =
    app.config?.pages?.length || 0;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-300">

      {/* THUMBNAIL */}

      <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">

        <div className="text-white text-4xl font-bold">

          {app.name.charAt(0)}

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* TITLE */}

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-black">

            {app.name}

          </h2>

          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">

            AI Generated

          </span>

        </div>

        {/* META */}

        <div className="mt-4 space-y-2 text-gray-600 text-sm">

          <p>
            {totalPages} Pages
          </p>

          <p>
            Created{" "}
            {formatDistanceToNow(
              new Date(
                app.createdAt
              ),
              {
                addSuffix: true,
              }
            )}
          </p>

        </div>

        {/* ACTIONS */}

        <div className="flex gap-3 mt-6">

          <Link
            href={`/generated/${app.id}`}
            className="flex-1"
          >

            <button className="w-full bg-black text-white py-3 rounded-2xl hover:opacity-90 transition">

              Open App

            </button>

          </Link>

          <button
            onClick={() =>
              onDelete(app.id)
            }

            className="bg-red-100 text-red-600 px-4 rounded-2xl hover:bg-red-200 transition"
          >

            Delete

          </button>

        </div>

      </div>

    </div>
  );
}