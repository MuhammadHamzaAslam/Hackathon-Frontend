import React, { useEffect, useState } from "react";
import AdminLayout from "./Admin Components/AdminLayout";
import AdminCategoryModal from "./Admin Components/AdminCategory";
import CategoryList from "./Admin Components/CategoryCard";

export default function AdminCategory() {
  return (
    <div>
      <AdminLayout>
        <AdminCategoryModal />
        <CategoryList />
      </AdminLayout>
    </div>
  );
}
