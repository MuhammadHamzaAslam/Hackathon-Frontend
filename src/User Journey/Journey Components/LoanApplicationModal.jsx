import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

const LoanApplicationModal = ({
  onProceed,
  loanBreakdown,
  loanPeriod,
  setShowLoanGurantor,
  setShowApplicationModal,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [country , setCountry] = useState("")
  const [city , setCity] = useState("")

  const handleProceed = () => {
    if (!userName || !email || !cnic || cnic.length !== 13 || !country || !city) {
      toast.error("Please fill all the fields correctly");
      return;
    }
    toast.success("Basic details saved, proceed to next step");
    onProceed({ userName, email, cnic, country , city , loanBreakdown, loanPeriod });
    setShowLoanGurantor(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="userName">Your Name</Label>
        <Input
          id="userName"
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Your Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="cnic">Your CNIC</Label>
        <Input
          id="cnic"
          type="text"
          placeholder="Enter Your CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="cnic">Your Country</Label>
        <Input
          id="country"
          type="text"
          placeholder="Enter Your Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="cnic">Your City</Label>
        <Input
          id="city"
          type="text"
          placeholder="Enter Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleProceed();
            setShowApplicationModal(false);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LoanApplicationModal;
