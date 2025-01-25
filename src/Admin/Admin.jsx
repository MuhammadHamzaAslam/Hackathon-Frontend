import React from "react";
import AdminLayout from "./Admin Components/AdminLayout";

export default function Admin() {
  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-blue-300">
        <main className="flex-1 p-8">
          <h1 className="text-center text-5xl">Admin</h1>
        </main>
      </div>
    </AdminLayout>
  );
}
