"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="w-full p-4 border-b border-gray-700 flex justify-between">
      <h1 className="font-bold text-xl">
        AI App Generator
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}