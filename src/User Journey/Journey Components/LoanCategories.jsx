import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

const LoanCategories = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Loan Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Subcategories:</strong>{" "}
                  {category.subcategories.join(", ")}
                </p>
                <p>
                  <strong>Maximum loan:</strong> PKR {category.maxLoan}
                </p>
                <p>
                  <strong>Loan period:</strong> {category.period}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanCategories;
