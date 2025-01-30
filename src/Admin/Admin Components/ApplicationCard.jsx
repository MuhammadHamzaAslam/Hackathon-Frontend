"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Calendar, Users, Check, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";

export default function ApplicationCard({ application }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [action, setAction] = useState(null);

  const handleAction = (actionType) => {
    setAction(actionType);
    setIsDialogOpen(true);
  };

  const confirmAction = async () => {
    try {
      const status = action === "accept" ? "Approved" : "Rejected";

      const response = await fetch(
        `http://localhost:4000/api/loan/updateLoanStatus/${application._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update loan status");
      }

      const data = await response.json();
      console.log("Loan status updated successfully:", data);

      setIsDialogOpen(false);
      toast.success(`Loan application ${status.toLowerCase()} successfully!`);
    } catch (error) {
      console.error("Error updating loan status:", error.message);
      toast.error("Failed to update loan status. Please try again.");
    }
  };

  return (
    <>
      <Card className="w-full max-w-[calc(100vw-2rem)] sm:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <CardTitle className="text-lg sm:text-xl lg:text-2xl">
              {application.category}
            </CardTitle>
            <Badge
              variant={
                application.status === "Pending" ? "secondary" : "success"
              }
              className="text-xs sm:text-sm"
            >
              {application.status}
            </Badge>
          </div>
          <CardDescription className="text-sm sm:text-base lg:text-lg mt-1">
            {application.subcategory}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
              <div className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg">
                  Loan Amount:
                </span>
              </div>
              <span className="text-sm sm:text-base lg:text-lg">
                ${application.loanAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg">
                  Loan Period:
                </span>
              </div>
              <span className="text-sm sm:text-base lg:text-lg">
                {application.loanPeriod} months
              </span>
            </div>
            <Separator />
            <div>
              <div className="flex items-center mb-2">
                <Users className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg">
                  Guarantors:
                </span>
              </div>
              <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg">
                {application.guarantors.map((guarantor, index) => (
                  <li key={index}>{guarantor.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 p-4 sm:p-6">
          <Button
            variant="outline"
            onClick={() => handleAction("accept")}
            className="w-full sm:w-auto text-sm sm:text-base lg:text-lg py-2 px-4 lg:py-3 lg:px-6"
          >
            <Check className="mr-2 h-4 w-4 lg:h-5 lg:w-5" /> Accept
          </Button>
          <Button
            variant="destructive"
            onClick={() => handleAction("reject")}
            className="w-full sm:w-auto text-sm sm:text-base lg:text-lg py-2 px-4 lg:py-3 lg:px-6"
          >
            <X className="mr-2 h-4 w-4 lg:h-5 lg:w-5" /> Reject
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {action} this loan application? This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
