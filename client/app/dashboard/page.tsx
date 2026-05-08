import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your generated apps
          </p>
        </div>
      </div>
    </div>
  );
}