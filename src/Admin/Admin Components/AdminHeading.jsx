import React from "react";
import { getCurrentUser } from "../../Constant/helperFunction";

export default function AdminHeading() {
  const currentUser = getCurrentUser();
  return (
    <div className="py-3 bg-[#207DFF] rounded-xl">
      <div className="p-5">
        <h1 className="text-white font-bold text-2xl">Admin Dashboard</h1>
        <p className="mt-2 text-white font-semibold">
          Welcome {currentUser ? currentUser.name : "No Name"} 👋🏻, Manage your
          Finance Dashbaord and monitor stats.
        </p>
      </div>
    </div>
  );
}
