import { useState } from "react";
import { Supplier } from "./api/supplier";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DeleteDialog from "../DeleteDialog";

interface SupplierTableProps {
  suppliers: Supplier[];
  onEdit: (supplier: Supplier) => void;
  onDelete: (id: number) => void;
}

export function SupplierTable({ suppliers, onEdit, onDelete }: SupplierTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSupplierId, setSelectedSupplierId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedSupplierId(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedSupplierId !== null) {
      onDelete(selectedSupplierId);
      setDeleteDialogOpen(false);
      setSelectedSupplierId(null);
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.supplier_id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.contact_info}</TableCell>
              <TableCell>{supplier.address}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(supplier)} variant="outline" className="mr-2">
                  Edit
                </Button>
                <Button onClick={() => handleDeleteClick(supplier.supplier_id)} variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
