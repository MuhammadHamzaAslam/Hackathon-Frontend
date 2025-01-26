import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export default function AdminCategoryModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [subcategories, setSubcategories] = useState([""]);
  const [maxLoan, setMaxLoan] = useState("");

  const handleAddSubcategory = () => {
    setSubcategories([...subcategories, ""]);
  };

  const handleSubcategoryChange = (index, value) => {
    const updatedSubcategories = [...subcategories];
    updatedSubcategories[index] = value;
    setSubcategories(updatedSubcategories);
  };

  const handleRemoveSubcategory = (index) => {
    const updatedSubcategories = subcategories.filter((_, i) => i !== index);
    setSubcategories(updatedSubcategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: categoryName,
      subcategories: subcategories.filter((sub) => sub.trim() !== ""),
      maxLoan,
    };

    try {
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/category/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (response.status === 201) {
        toast.success("Category added successfully.");
      } else {
        toast.error(responseData.message || "Failed to add category.");
      }

      setCategoryName("");
      setSubcategories([""]);
      setMaxLoan("");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }

    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">All Category</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Add Category</Button>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <Label>Category Name</Label>
              <Input
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              <Label>SubCategories</Label>
              {subcategories.map((sub, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    placeholder={`Sub Category ${index + 1}`}
                    value={sub}
                    onChange={(e) =>
                      handleSubcategoryChange(index, e.target.value)
                    }
                  />
                  {subcategories.length > 1 && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleRemoveSubcategory(index)}
                    >
                      -
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleAddSubcategory}
              >
                + Add Subcategory
              </Button>

              <Label>Max Loan</Label>
              <Input
                placeholder="PKR 10 Lakh"
                value={maxLoan}
                onChange={(e) => setMaxLoan(e.target.value)}
              />
            </div>
            <DialogFooter className="mt-5">
              <Button type="submit">Save</Button>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
