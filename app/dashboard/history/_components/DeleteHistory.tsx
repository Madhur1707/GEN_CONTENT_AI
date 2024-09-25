import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";

interface DeleteHistoryProps {
  id: number;
  onDelete: (id: number) => Promise<void>;
}

const DeleteHistory = ({ id, onDelete }: DeleteHistoryProps) => {
  const [deleting, setDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setDeleting(true);
    await onDelete(id);
    setDeleting(false);
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      className={`bg-red-500 text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-200 ${
        deleting ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleDeleteClick}
      disabled={deleting}
    >
      <Trash className="w-5 h-5" /> {deleting ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default DeleteHistory;
