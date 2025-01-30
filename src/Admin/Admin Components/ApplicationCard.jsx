import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Calendar, Users, Check, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ApplicationCard({ application }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [action, setAction] = useState(null);

  const handleAction = (actionType) => {
    setAction(actionType);
    setIsDialogOpen(true);
  };

  const confirmAction = () => {
    // Implement the logic for accepting or rejecting the application here
    console.log(`Application ${action}ed:`, application._id);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{application.category}</span>
            <Badge
              variant={
                application.status === "Pending" ? "secondary" : "success"
              }
            >
              {application.status}
            </Badge>
          </CardTitle>
          <CardDescription>{application.subcategory}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span className="font-semibold">Loan Amount:</span>
              <span className="ml-2">${application.loanAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span className="font-semibold">Loan Period:</span>
              <span className="ml-2">{application.loanPeriod} months</span>
            </div>
            <Separator />
            <div>
              <div className="flex items-center mb-2">
                <Users className="mr-2 h-4 w-4" />
                <span className="font-semibold">Guarantors:</span>
              </div>
              <ul className="list-disc list-inside">
                {application.guarantors.map((guarantor, index) => (
                  <li key={index}>{guarantor.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => handleAction("accept")}>
            <Check className="mr-2 h-4 w-4" /> Accept
          </Button>
          <Button variant="destructive" onClick={() => handleAction("reject")}>
            <X className="mr-2 h-4 w-4" /> Reject
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {action} this loan application? This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
