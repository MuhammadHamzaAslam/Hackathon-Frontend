import React, { useEffect, useState } from "react";
import AdminLayout from "./Admin Components/AdminLayout";
import AdminCategoryModal from "./Admin Components/AdminCategory";
import CategoryList from "./Admin Components/CategoryCard";

export default function AdminCategory() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     let response = await fetch(
//       `https://hackathon-backend-production-6a74.up.railway.app/api/category/getAllCategories`
//     );
//     response = await response.json();
//     setCategories(response?.data);
//   };

  return (
    <div>
      <AdminLayout>
        <AdminCategoryModal />
        <CategoryList />
      </AdminLayout>
    </div>
  );
}
