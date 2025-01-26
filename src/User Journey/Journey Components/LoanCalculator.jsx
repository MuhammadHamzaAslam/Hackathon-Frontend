import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import LoanApplicationModal from "./LoanApplicationModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const loanCategories = [
  {
    name: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    period: 3,
  },
  {
    name: "Home Construction Loans",
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: 1000000,
    period: 5,
  },
  {
    name: "Business Startup Loans",
    subcategories: [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
    maxLoan: 1000000,
    period: 5,
  },
  {
    name: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: 1000000,
    period: 4,
  },
];

const LoanCalculator = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [loanBreakdown, setLoanBreakdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allCategories, setAllCategories] = useState(null);

  const handleCalculate = () => {
    if (!category || !initialDeposit || !loanPeriod) return;

    const selectedCategory = loanCategories.find(
      (currentCategory) => currentCategory.name === category
    );
    const maxLoan = selectedCategory.maxLoan;
    const initialDepositNumber = Number(initialDeposit);
    const loanPeriodNumber = Number(loanPeriod);

    if (initialDepositNumber >= maxLoan) {
      setLoanBreakdown({
        error:
          "Initial deposit cannot be greater than or equal to the maximum loan amount.",
      });
      return;
    }

    const loanAmount = maxLoan - initialDepositNumber;
    const monthlyPayment = loanAmount / (loanPeriodNumber * 12);

    setLoanBreakdown({
      loanAmount: loanAmount.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      yearlyPayment: (monthlyPayment * 12).toFixed(2),
      totalPayment: loanAmount.toFixed(2),
    });

    console.log("loanBreakdown =>", loanBreakdown);
  };

  useEffect(() => {
    fetchCategories();
    console.log("allCategories =>", allCategories);
  }, []);

  const fetchCategories = async () => {
    let response = await fetch(
      `https://hackathon-backend-production-6a74.up.railway.app/api/category/getAllCategories`
    );
    response = await response.json();
    setAllCategories(response?.data);
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Loan Calculator
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Calculate Your Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {allCategories?.map((cat, index) => (
                    <SelectItem key={index} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={setSubcategory} disabled={!category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  {category &&
                    allCategories
                      .find(
                        (currentCategory) => currentCategory.name === category
                      )
                      .subcategories.map((sub, ind) => (
                        <SelectItem value={sub}>{sub}</SelectItem>
                      ))}
                </SelectContent>
              </Select>

              <Input
                type="text"
                placeholder="Max Loan Provided"
                value={
                  category &&
                  allCategories.find(
                    (currentCategory) => currentCategory.name === category
                  ).maxLoan
                }
                readOnly={true}
              />

              <Input
                type="number"
                placeholder="Initial deposit (PKR)"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(e.target.value)}
              />

              <Input
                type="number"
                placeholder="Loan period (years)"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(e.target.value)}
              />
            </div>

            <Button className="mt-4 w-full" onClick={handleCalculate}>
              Calculate
            </Button>

            {loanBreakdown && (
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Loan Breakdown</h3>
                {loanBreakdown.error ? (
                  <p className="text-red-500">{loanBreakdown.error}</p>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Loan Amount
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">
                            PKR {loanBreakdown.loanAmount}
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Monthly Payment
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">
                            PKR {loanBreakdown.monthlyPayment}
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Yearly Payment
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">
                            PKR {loanBreakdown.yearlyPayment}
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Total Payment
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">
                            PKR {loanBreakdown.totalPayment}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <LoanApplicationModal
                      loanBreakdown={loanBreakdown}
                      loanPeriod={loanPeriod}
                    />
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoanCalculator;
