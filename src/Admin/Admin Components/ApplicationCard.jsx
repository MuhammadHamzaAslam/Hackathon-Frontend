import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ApplicationCard({ application }) {
  return (
    <Card className="shadow-lg p-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {application.category}
        </CardTitle>
        <p className="text-sm text-gray-500">{application.subcategory}</p>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-semibold">Loan Amount:</span> $
          {application.loanAmount}
        </p>
        <p>
          <span className="font-semibold">Loan Period:</span>{" "}
          {application.loanPeriod} months
        </p>
        <p>
          <span className="font-semibold">Initial Deposit:</span> $
          {application.initialDeposit}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {application.status}
        </p>
        <div className="mt-4">
          <Button className="mr-2" variant="success">
            Accept
          </Button>
          <Button variant="destructive">Reject</Button>
        </div>
      </CardContent>
    </Card>
  );
}
