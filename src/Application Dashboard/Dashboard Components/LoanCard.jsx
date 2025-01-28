import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoanCard({ category, onApply }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{category?.category}</CardTitle>
        <CardDescription>Max Loan: {category?.maxLoan}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-semibold mb-2">Subcategories: {category.subcategory} </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Period: {category?.period}
        </p>
      </CardFooter>
    </Card>
  );
}
