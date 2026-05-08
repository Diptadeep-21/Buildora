import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 h-screen p-4">
      <div className="space-y-4">
        <Link
          href="/dashboard"
          className="block hover:text-blue-400"
        >
          Dashboard
        </Link>

        <Link
          href="/builder"
          className="block hover:text-blue-400"
        >
          Builder
        </Link>

        <Link
          href="/generated"
          className="block hover:text-blue-400"
        >
          Generated Apps
        </Link>
      </div>
    </aside>
  );
}