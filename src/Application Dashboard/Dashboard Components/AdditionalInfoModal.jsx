import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdditionalInfoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    guarantor1Name: "",
    guarantor1Email: "",
    guarantor1Location: "",
    guarantor1CNIC: "",
    guarantor2Name: "",
    guarantor2Email: "",
    guarantor2Location: "",
    guarantor2CNIC: "",
    statement: "",
    salarySheet: "",
    address: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Additional Information</DialogTitle>
          <DialogDescription>
            Please provide the following details to complete your application.
          </DialogDescription>
        </DialogHeader>
        <div className="px-4 py-2">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="guarantor1Name" className="text-left">
                  Guarantor 1 Name
                </Label>
                <Input
                  id="guarantor1Name"
                  name="guarantor1Name"
                  value={formData.guarantor1Name}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor1Email" className="text-left">
                  Guarantor 1 Email
                </Label>
                <Input
                  id="guarantor1Email"
                  name="guarantor1Email"
                  type="email"
                  value={formData.guarantor1Email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor1Location" className="text-left">
                  Guarantor 1 Location
                </Label>
                <Input
                  id="guarantor1Location"
                  name="guarantor1Location"
                  value={formData.guarantor1Location}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor1CNIC" className="text-left">
                  Guarantor 1 CNIC
                </Label>
                <Input
                  id="guarantor1CNIC"
                  name="guarantor1CNIC"
                  value={formData.guarantor1CNIC}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor2Name" className="text-left">
                  Guarantor 2 Name
                </Label>
                <Input
                  id="guarantor2Name"
                  name="guarantor2Name"
                  value={formData.guarantor2Name}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor2Email" className="text-left">
                  Guarantor 2 Email
                </Label>
                <Input
                  id="guarantor2Email"
                  name="guarantor2Email"
                  type="email"
                  value={formData.guarantor2Email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor2Location" className="text-left">
                  Guarantor 2 Location
                </Label>
                <Input
                  id="guarantor2Location"
                  name="guarantor2Location"
                  value={formData.guarantor2Location}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guarantor2CNIC" className="text-left">
                  Guarantor 2 CNIC
                </Label>
                <Input
                  id="guarantor2CNIC"
                  name="guarantor2CNIC"
                  value={formData.guarantor2CNIC}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="statement" className="text-left">
                  Statement (optional)
                </Label>
                <Input
                  id="statement"
                  name="statement"
                  value={formData.statement}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="salarySheet" className="text-left">
                  Salary Sheet (optional)
                </Label>
                <Input
                  id="salarySheet"
                  name="salarySheet"
                  value={formData.salarySheet}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address" className="text-left">
                  Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber" className="text-left">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Application</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
