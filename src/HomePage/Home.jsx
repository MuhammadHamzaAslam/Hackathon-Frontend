import React from "react";
import { Link } from "react-router";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, GraduationCap, School } from "lucide-react";

function Home() {
  const roles = [
    {
      title: "Admin",
      icon: <School className="h-12 w-12" />,
      link: "/admin",
      color: "bg-blue-100",
    },
    {
      title: "Teacher",
      icon: <UserCircle className="h-12 w-12" />,
      link: "/teacher",
      color: "bg-green-100",
    },
    {
      title: "Student",
      icon: <GraduationCap className="h-12 w-12" />,
      link: "/student",
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Our Learning Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roles.map((role) => (
            <Card
              key={role.title}
              className={`${role.color} hover:shadow-lg transition-shadow`}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                {role.icon}
                <h2 className="text-2xl font-semibold mt-4">{role.title}</h2>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline">
                  <Link to={role.link}>Go to {role.title} Portal</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
