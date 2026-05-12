"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
    loginUser,
} from "@/services/auth.service";

import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {

    const router = useRouter();

    const { login } = useAuth();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin =
        async (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            try {

                const data =
                    await loginUser(
                        email,
                        password
                    );

                /*
                  SAVE TOKEN
                */

                console.log("LOGIN RESPONSE:", data);

                login(data.token);

                /*
                  REDIRECT
                */

                router.push(
                    "/dashboard"
                );

            } catch (error: any) {

                alert(
                    error.response?.data
                        ?.message ||
                    "Login failed"
                );
            }
        };

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

            <form
                onSubmit={
                    handleLogin
                }
                className="bg-slate-900 p-8 rounded-xl w-full max-w-md space-y-6"
            >

                <h1 className="text-3xl font-bold">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    placeholder="Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 py-3 rounded-lg"
                >
                    Login
                </button>

            </form>

        </main>
    );
}