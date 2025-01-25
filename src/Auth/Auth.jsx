import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./Auth Components/Login";
import { SignupForm } from "./Auth Components/Signup";

export default function Auth() {
  return (
    <div className="flex justify-center items-center min-h-screen py-5 bg-gray-50">
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-[450px] p-4 space-y-6 shadow-lg rounded-xl">
          <div className="flex flex-col items-center space-y-2">
            <image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login-xY1GhexZzwSPimBceyTJnusBx0IUZH.png"
              alt="SMIT Logo"
              width={120}
              height={120}
              className="mb-2"
            />
            <h1 className="text-2xl font-semibold text-gray-800">
              Student Portal
            </h1>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">LOGIN</TabsTrigger>
              <TabsTrigger value="signup">CREATE AN ACCOUNT</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
