"use client";

import {
  useEffect,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAuth,
} from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const { token } =
    useAuth();

  useEffect(() => {

    if (!token) {

      router.push(
        "/login"
      );
    }

  }, [token, router]);

  if (!token) {

    return (
      <div className="p-10 text-white">
        Loading...
      </div>
    );
  }

  return children;
}