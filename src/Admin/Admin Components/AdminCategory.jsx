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

export default function AdminCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <AdminLayout>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Admin Category</h1>
          <Button onClick={() => setIsModalOpen(true)}>Add Category</Button>
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
            </DialogHeader>
            <form>
              <div className="flex flex-col gap-4">
                
                <Label>Category Name</Label>
                <Input placeholder="Category Name"  />

                <Label>SubCategory Name</Label>
                <Input placeholder="Add Sub Category"  />

                <Label>Max Loan</Label>
                <Input placeholder="100,000 PKR"  />

              </div>
              <DialogFooter className="mt-5">
                <Button type="submit" onClick={() => setIsModalOpen(false)}>
                  Save
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </AdminLayout>
    </div>
  );
}
