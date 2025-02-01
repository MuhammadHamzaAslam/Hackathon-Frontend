import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import "../../App";
import { data } from "react-router";

const LoanGurantorModal = ({
  onConfirm,
  userDetails,
  setShowLoanGurantor,
  category,
  subcategory,
  loanPeriod,
  loanAmount,
  initialDeposit,
}) => {
  const [guarantor1Name, setGuarantor1Name] = useState("");
  const [guarantor1Email, setGuarantor1Email] = useState("");
  const [guarantor1Location, setGuarantor1Location] = useState("");
  const [guarantor1Cnic, setGuarantor1Cnic] = useState("");
  const [guarantor1Country, setGuarantor1Country] = useState("");
  const [guarantor1City, setGuarantor1City] = useState("");

  const [guarantor2Name, setGuarantor2Name] = useState("");
  const [guarantor2Email, setGuarantor2Email] = useState("");
  const [guarantor2Location, setGuarantor2Location] = useState("");
  const [guarantor2Cnic, setGuarantor2Cnic] = useState("");
  const [guarantor2Country, setGuarantor2Country] = useState("");
  const [guarantor2City, setGuarantor2City] = useState("");

  const [personalAddress, setPersonalAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [salarySheet, setSalarySheet] = useState(null);
  const [statement, setStatement] = useState(null);

  const handleSubmit = async () => {
    if (
      !guarantor1Name ||
      !guarantor1Email ||
      !guarantor1Location ||
      !guarantor1Cnic ||
      !guarantor2Name ||
      !guarantor2Email ||
      !guarantor2Location ||
      !guarantor2Cnic ||
      !personalAddress ||
      !phoneNumber
    ) {
      toast.error("Please fill all the fields correctly");
      return;
    }

    const formData = {
      guarantors: [
        {
          name: guarantor1Name,
          phone: guarantor1Email,
          address: guarantor1Location,
          city: guarantor1City,
          country: guarantor1Country,
        },
        {
          name: guarantor2Name,
          phone: guarantor2Email,
          address: guarantor2Location,
          city: guarantor2City,
          country: guarantor2Country,
        },
      ],
      email: userDetails?.email || "",
      CNIC: userDetails?.cnic,
      name: userDetails?.userName || "",
      phone: phoneNumber,
      address: personalAddress,
      city: userDetails?.city || "",
      country: userDetails?.country || "",
      category: category,
      subcategory: subcategory,
      loanPeriod: loanPeriod,
      loanAmount: loanAmount,
      initialDeposit: initialDeposit,
    };

    console.log("formData =>", formData);

    try {
      let response = await fetch(`https://hackathon-backend-production-6a74.up.railway.app/api/loan/applyLoan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const postRequest = await response.json();
      if (response.ok) {
        toast.success("Loan Request Sent");
      } else {
        toast.error("failed");
      }
    } catch (error) {}

    toast.success("Loan Application Submitted Successfully!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto px-2">
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor1Name">Guarantor 1 - Name</Label>
        <Input
          id="guarantor1Name"
          type="text"
          placeholder="Enter Guarantor 1 Name"
          value={guarantor1Name}
          onChange={(e) => setGuarantor1Name(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor1Email">Guarantor 1 - Email</Label>
        <Input
          id="guarantor1Email"
          type="email"
          placeholder="Enter Guarantor 1 Email"
          value={guarantor1Email}
          onChange={(e) => setGuarantor1Email(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor1Location">Guarantor 1 - Location</Label>
        <Input
          id="guarantor1Location"
          type="text"
          placeholder="Enter Guarantor 1 Location"
          value={guarantor1Location}
          onChange={(e) => setGuarantor1Location(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor1Cnic">Guarantor 1 - CNIC</Label>
        <Input
          id="guarantor1Cnic"
          type="text"
          placeholder="Enter Guarantor 1 CNIC"
          value={guarantor1Cnic}
          onChange={(e) => setGuarantor1Cnic(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor1Country">Guarantor 1 - Country</Label>
        <Input
          id="guarantor1Country"
          type="text"
          placeholder="Enter Guarantor 1 Country"
          value={guarantor1Country}
          onChange={(e) => setGuarantor1Country(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor1City">Guarantor 1 - City</Label>
        <Input
          id="guarantor1City"
          type="text"
          placeholder="Enter Guarantor 1 City"
          value={guarantor1City}
          onChange={(e) => setGuarantor1City(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor2Name">Guarantor 2 - Name</Label>
        <Input
          id="guarantor2Name"
          type="text"
          placeholder="Enter Guarantor 2 Name"
          value={guarantor2Name}
          onChange={(e) => setGuarantor2Name(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor2Email">Guarantor 2 - Email</Label>
        <Input
          id="guarantor2Email"
          type="email"
          placeholder="Enter Guarantor 2 Email"
          value={guarantor2Email}
          onChange={(e) => setGuarantor2Email(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor2Location">Guarantor 2 - Location</Label>
        <Input
          id="guarantor2Location"
          type="text"
          placeholder="Enter Guarantor 2 Location"
          value={guarantor2Location}
          onChange={(e) => setGuarantor2Location(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor2Cnic">Guarantor 2 - CNIC</Label>
        <Input
          id="guarantor2Cnic"
          type="text"
          placeholder="Enter Guarantor 2 CNIC"
          value={guarantor2Cnic}
          onChange={(e) => setGuarantor2Cnic(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor2Country">Guarantor 2 - Country</Label>
        <Input
          id="guarantor2Country"
          type="text"
          placeholder="Enter Guarantor 2 Country"
          value={guarantor2Country}
          onChange={(e) => setGuarantor2Country(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-1">
        <Label htmlFor="guarantor2City">Guarantor 2 - City</Label>
        <Input
          id="guarantor2City"
          type="text"
          placeholder="Enter Guarantor 2 City"
          value={guarantor2City}
          onChange={(e) => setGuarantor2City(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-2">
        <Label htmlFor="personalAddress">Address</Label>
        <Input
          id="personalAddress"
          type="text"
          placeholder="Enter Your Address"
          value={personalAddress}
          onChange={(e) => setPersonalAddress(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          type="text"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-2">
        <Label htmlFor="salarySheet">Salary Sheet</Label>
        <Input
          id="salarySheet"
          type="file"
          onChange={(e) => setSalarySheet(e.target.files[0])}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 col-span-1 md:col-span-2">
        <Label htmlFor="statement">Statement</Label>
        <Input
          id="statement"
          type="file"
          onChange={(e) => setStatement(e.target.files[0])}
        />
      </div>
      <div className="flex justify-end space-x-2 col-span-1 md:col-span-2">
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            setShowLoanGurantor(false);
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LoanGurantorModal;
