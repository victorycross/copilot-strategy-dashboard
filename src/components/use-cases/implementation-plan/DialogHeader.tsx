
import React from "react";
import {
  DialogHeader as ShadcnDialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DialogHeaderProps {
  title: string;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ title }) => {
  return (
    <ShadcnDialogHeader>
      <DialogTitle>Implementation Plan: {title}</DialogTitle>
      <DialogDescription>
        How to implement this use case using Microsoft technologies
      </DialogDescription>
    </ShadcnDialogHeader>
  );
};

export default DialogHeader;
