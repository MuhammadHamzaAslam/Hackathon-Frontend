import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Loader2, Edit, Trash, X } from "lucide-react";
import toast from "react-hot-toast";

const CategoryCard = ({ category, onEdit, onDelete, isDeleting }) => {
  return (
    <Card className="w-full max-w-md relative">
      <div className="absolute bottom-1 right-1 flex space-x-2">
        <Button variant="ghost" size="icon" onClick={() => onEdit(category)}>
          <Edit className="w-4 h-4 my-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(category._id)}
          disabled={isDeleting === category._id}
        >
          {isDeleting === category._id ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Trash className="w-4 h-4 my-4" />
          )}
        </Button>
      </div>
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
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch Categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/category/getAllCategories`
      );
      response = await response.json();
      setCategories(response?.data || []);
    } catch (error) {
      toast.error("Failed to fetch categories");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Category
  const handleDelete = async (id) => {
    setIsDeleting(id);
    try {
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/category/delete/${id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        toast.success("Category deleted successfully.");
        setCategories((prev) => prev.filter((category) => category._id !== id));
      } else {
        toast.error("Failed to delete category.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the category.");
    } finally {
      setIsDeleting(null);
    }
  };

  // Open Modal for Editing
  const handleEdit = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    console.log("selectedCategory =>" , selectedCategory);
    
    const updatedCategory = {
      name: selectedCategory.name,
      maxLoan: selectedCategory.maxLoan,
      subcategories: selectedCategory.subcategories,
    };

    try {
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/category/edit/${selectedCategory._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedCategory),
        }
      );
      if (response.ok) {
        toast.success("Category updated successfully.");
        setCategories((prev) =>
          prev.map((cat) =>
            cat._id === selectedCategory._id ? updatedCategory : cat
          )
        );
        setIsModalOpen(false);
      } else {
        toast.error("Failed to update category.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the category.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteSubcategory = (index) => {
    const updatedSubcategories = selectedCategory.subcategories.filter(
      (_, i) => i !== index
    );
    setSelectedCategory({
      ...selectedCategory,
      subcategories: updatedSubcategories,
    });
  };

  return (
    <div>
      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isDeleting={isDeleting}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave}>
              <div className="flex flex-col gap-4">
                <Label>Category Name</Label>
                <Input
                  value={selectedCategory?.name || ""}
                  onChange={(e) =>
                    setSelectedCategory({
                      ...selectedCategory,
                      name: e.target.value,
                    })
                  }
                />

                <Label>Subcategories</Label>
                {selectedCategory?.subcategories.map((sub, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={sub}
                      onChange={(e) => {
                        const updated = [...selectedCategory.subcategories];
                        updated[index] = e.target.value;
                        setSelectedCategory({
                          ...selectedCategory,
                          subcategories: updated,
                        });
                      }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteSubcategory(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}

                <Label>Max Loan</Label>
                <Input
                  value={selectedCategory?.maxLoan || ""}
                  onChange={(e) =>
                    setSelectedCategory({
                      ...selectedCategory,
                      maxLoan: e.target.value,
                    })
                  }
                />
              </div>
              <DialogFooter className="mt-4">
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Save"
                  )}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isUpdating}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CategoryList;
