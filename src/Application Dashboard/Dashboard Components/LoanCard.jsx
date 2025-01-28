import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function LoanCard({ category }) {
  const {
    category: loanType,
    subcategory,
    initialDeposit,
    loanAmount,
    loanPeriod,
    status,
  } = category;

  return (
    <Card className="w-full max-w-[400px] mx-auto lg:max-w-[450px]">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">
          {loanType}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {subcategory}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Initial Deposit:</span>
          <span className="text-gray-800">PKR {initialDeposit}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Loan Amount:</span>
          <span className="text-gray-800">PKR {loanAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Loan Period:</span>
          <span className="text-gray-800">{loanPeriod} years</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Status:</span>
          <span
            className={`px-2 py-1 text-sm rounded ${
              status === "Pending"
                ? "bg-yellow-200 text-yellow-800"
                : status === "Approved"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {status}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
