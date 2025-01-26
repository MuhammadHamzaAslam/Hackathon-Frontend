import { useState } from "react";
import AdminLayout from "../Admin/Admin Components/AdminLayout";
import LoanCard from "./Dashboard Components/LoanCard";
import AdditionalInfoModal from "./Dashboard Components/AdditionalInfoModal";
import TeacherLayout from "./Dashboard Components/TeacherLayout";

const loanCategories = [
  {
    name: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: "5 Lakh",
    period: "3 years",
  },
  {
    name: "Home Construction Loans",
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: "10 Lakh",
    period: "5 years",
  },
  {
    name: "Business Startup Loans",
    subcategories: [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
    maxLoan: "10 Lakh",
    period: "5 years",
  },
  {
    name: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    period: "4 years",
  },
];

export default function ApplicationDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TeacherLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          The Loans You have Applied for
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanCategories.map((category, index) => (
            <LoanCard
              key={index}
              category={category}
              onApply={() => setIsModalOpen(true)}
            />
          ))}
        </div>
        <AdditionalInfoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </TeacherLayout>
  );
}
