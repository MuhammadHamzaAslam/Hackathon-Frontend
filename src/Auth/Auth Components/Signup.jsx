"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudIcon, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLink, setImageLink] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gender) {
      toast.error("Please select a gender");
      return;
    }
    if (!profilePicture) {
      toast.error("Please select a profile picture");
      return;
    }

    const data = new FormData();
    data.append("file", profilePicture);
    data.append("upload_preset", "Saylani_Hackathon");
    data.append("cloud_name", "diyujhtuc");

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/diyujhtuc/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const imageURL = await response.json();
      const secureImageLink = imageURL.secure_url;
      setImageLink(secureImageLink);

      const signupResponse = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: name,
            email,
            password,
            gender,
            profilePicture: secureImageLink,
          }),
        }
      );
      const result = await signupResponse.json();
      sessionStorage.setItem("token", result.token);
      sessionStorage.setItem("user", JSON.stringify(result.user));
      console.log("result =>", result);

      setLoading(false);
      if (signupResponse.ok) {
        toast.success("Account created successfully");
        toast.success("You will be redirected to the main page");
        setTimeout(() => {
          if (result.user.role === "admin") {
            navigate("/admin");
          } else if (result.user.role === "user") {
            navigate("/");
          }
        }, 100);
        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setProfilePicture(null);
        setImageLink(null);
        setGender("");
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Failed to create account");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-password">Password</Label>
        <Input
          id="signup-password"
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select onValueChange={setGender} required>
          <SelectTrigger>
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Profile Picture</Label>
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-gray-500">
          <CloudIcon className="h-10 w-10" />
          <p className="text-sm text-center">
            {profilePicture
              ? profilePicture.name
              : "Drag and Drop or browse file"}
          </p>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            id="profile-picture"
            onChange={handleFileChange}
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

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          "Create My Account"
        )}
      </Button>
    </form>
  );
}
