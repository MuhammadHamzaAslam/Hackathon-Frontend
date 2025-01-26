import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const CategoryCard = ({ category }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Max Loan:</span>
            <Badge variant="secondary">{category.maxLoan}</Badge>
          </div>
          <div>
            <span className="text-sm font-medium">Subcategories:</span>
            <div className="mt-1 flex flex-wrap gap-2">
              {category.subcategories.map((subcategory, index) => (
                <Badge key={index} variant="outline">
                  {subcategory}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    let response = await fetch(
      `https://hackathon-backend-production-6a74.up.railway.app/api/category/getAllCategories`
    );
    response = await response.json();
    setCategories(response?.data);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
