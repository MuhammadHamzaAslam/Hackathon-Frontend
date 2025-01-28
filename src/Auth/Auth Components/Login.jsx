import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const loginUser = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const response = await loginUser.json();
      console.log("response =>", response);

      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("user", JSON.stringify(response.user));
      setLoading(false);

      if (loginUser.ok) {
        toast.success("Login Successful");
        toast.success("You will be redirected to the main page");

        if (response?.user?.role === "admin") {
          navigate("/admin");
        } else if (response?.user?.role === "user") {
          navigate("/your-application");
        }

        setEmail("");
        setPassword("");
      } else {
        toast.error("Invalid Credentials");

        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="cnic">Email</Label>
        <Input
          id="email"
          placeholder="Enter your Email Number"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <Link to="#" className="text-sm text-blue-600 hover:underline">
          Forgot Password
        </Link>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging In
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
