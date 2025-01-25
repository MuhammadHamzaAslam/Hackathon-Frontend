import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export function LoginForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cnic">CNIC </Label>
        <Input id="cnic" placeholder="Enter your CNIC number" required />
        <p className="text-sm text-gray-500">
          Kindly provide the CNIC number used during SMIT course registration.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="flex justify-end">
        <Link to="#" className="text-sm text-blue-600 hover:underline">
          Forgot Password
        </Link>
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Login
      </Button>
    </form>
  );
}
