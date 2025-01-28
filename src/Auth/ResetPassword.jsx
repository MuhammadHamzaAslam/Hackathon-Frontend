import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { getCurrentUser } from "../Constant/helperFunction";
import { useNavigate } from "react-router";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading
    try {
      const userEmail = currentUser?.email;
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/auth/resetPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail, password: newPassword }),
        }
      );
      const responseData = await response.json();

      if (response.status === 200) {
        sessionStorage.setItem("token", responseData?.token);
        toast.success("Password reset successfully!");
        navigate("/your-application");
      } else {
        toast.error(response.message || "Failed to reset password");
        setLoading(false);
      }

      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while resetting password");
    } finally {
      setLoading(false); // Stop loading after completion
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleResetPassword();
            }}
          >
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="new-password"
                  className="block text-sm font-medium"
                >
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1"
                  required
                  disabled={loading} // Disable input while loading
                />
              </div>
              <div>
                <Label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1"
                  required
                  disabled={loading} // Disable input while loading
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                variant="default"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Resetting Password..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
