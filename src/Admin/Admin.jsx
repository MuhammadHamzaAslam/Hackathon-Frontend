import React from "react";
import AdminLayout from "./Admin Components/AdminLayout";
import AdminHeading from "./Admin Components/AdminHeading";
import StatsCard from "./Admin Components/StatsCard";

export default function Admin() {
  return (
    <AdminLayout>
      <AdminHeading />
      <StatsCard />
    </AdminLayout>
  );
}
