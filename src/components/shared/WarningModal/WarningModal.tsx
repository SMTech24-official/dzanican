"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function WarningModal({
  isOpen,
  onClose,
  onConfirm,
}: WarningModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xs">
        <DialogHeader>
          <DialogTitle className="text-center">Warning</DialogTitle>
        </DialogHeader>
        <div className="py-3">
          <p className="text-center text-sm text-gray-600">
            Are You Sure You Want To Delete This Post?
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="destructive" className="flex-1" onClick={onConfirm}>
            Delete
          </Button>
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
