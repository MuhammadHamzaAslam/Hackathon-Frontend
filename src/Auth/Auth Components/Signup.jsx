import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudIcon } from "lucide-react";

export function SignupForm() {
  return (
    <form className="space-y-4 ">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-cnic">CNIC</Label>
        <Input id="signup-cnic" placeholder="Enter your CNIC number" required />
        <p className="text-sm text-gray-500">
          Kindly provide the CNIC number used during SMIT course registration.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-password">Password</Label>
        <Input
          id="signup-password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Profile Picture</Label>
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-gray-500">
          <CloudIcon className="h-10 w-10" />
          <p className="text-sm text-center">Drag and Drop or browse file</p>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            id="profile-picture"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById("profile-picture")?.click()}
          >
            Browse
          </Button>
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Create My Account
      </Button>
    </form>
  );
}
