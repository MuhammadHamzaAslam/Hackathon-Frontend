import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const LoanApplicationModal = ({ loanBreakdown, loanPeriod }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");

  const handleProceed = () => {
    if (!userName || !email || !cnic || cnic.length !== 13) {
      toast.error("Please fill all the fields");
      return
    }
    console.log(userName , email , cnic);
    
    toast.success("Loan application submitted successfully");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-4">Proceed with Loan Application</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Loan Application</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center flex-col gap-3">
          <Label>Your Name</Label>
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Label>Your Email</Label>
          <Input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Your CNIC</Label>
          <Input
            type="number"
            placeholder="Enter Your CNIC"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
        </div>
        <div className="py-4">
          <p>Your loan application details:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Loan Amount: PKR {loanBreakdown?.loanAmount}</li>
            <li>Monthly Payment: PKR {loanBreakdown?.monthlyPayment}</li>
            <li>Loan Period: {loanPeriod} years</li>
          </ul>
          <p className="mt-4">
            Are you sure you want to proceed with this loan application?
          </p>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => {}}>
            Cancel
          </Button>
          <Button onClick={handleProceed}>Confirm Application</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoanApplicationModal;
