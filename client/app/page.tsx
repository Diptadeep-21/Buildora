import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          AI App Generator
        </h1>

        <p className="text-gray-400 mb-8">
          Dynamic Config Driven Platform
        </p>

        <Link
          href="/dashboard"
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Go To Dashboard
        </Link>
      </div>
    </main>
  );
}