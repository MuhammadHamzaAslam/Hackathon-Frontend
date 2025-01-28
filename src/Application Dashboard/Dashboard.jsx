import { useEffect, useState } from "react";
import AdminLayout from "../Admin/Admin Components/AdminLayout";
import LoanCard from "./Dashboard Components/LoanCard";
import AdditionalInfoModal from "./Dashboard Components/AdditionalInfoModal";
import TeacherLayout from "./Dashboard Components/TeacherLayout";
import { getCurrentUser } from "../Constant/helperFunction";

// const loanCategories = [
//   {
//     name: "Wedding Loans",
//     subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
//     maxLoan: "5 Lakh",
//     period: "3 years",
//   },
//   {
//     name: "Home Construction Loans",
//     subcategories: ["Structure", "Finishing", "Loan"],
//     maxLoan: "10 Lakh",
//     period: "5 years",
//   },
//   {
//     name: "Business Startup Loans",
//     subcategories: [
//       "Buy Stall",
//       "Advance Rent for Shop",
//       "Shop Assets",
//       "Shop Machinery",
//     ],
//     maxLoan: "10 Lakh",
//     period: "5 years",
//   },
//   {
//     name: "Education Loans",
//     subcategories: ["University Fees", "Child Fees Loan"],
//     maxLoan: "Based on requirement",
//     period: "4 years",
//   },
// ];

export default function ApplicationDashboard() {
  const [loanCategories, setLoanCategories] = useState([]);
  const currentUser = getCurrentUser();

  useEffect(() => {
    fetchCategories();
    console.log("loanCategories =>", loanCategories);
  }, []);

  const fetchCategories = async () => {
    try {
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/loan/getuserRequest/${currentUser._id}`
      );
      response = await response.json(); // Correctly invoke the .json() method
      setLoanCategories(response?.data || []); // Handle cases where data might be undefined
    } catch (error) {
      console.error("Error fetching loan categories:", error); // Log any errors
    }
  };

  return (
    <TeacherLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          The Loans You have Applied for
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanCategories?.map((category, index) => (
            <LoanCard key={index} category={category} />
          ))}
        </div>
      </div>
    </TeacherLayout>
  );
}
