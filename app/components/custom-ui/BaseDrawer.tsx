"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export type BaseDrawerDirection = "left" | "right" | "top" | "bottom";

export interface BaseDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
  direction?: BaseDrawerDirection;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onSubmit?: () => void;
  footer?: React.ReactNode | ((onClose: () => void) => React.ReactNode);
  children?: React.ReactNode;
}

const defaultTrigger = <Button variant="outline">Open</Button>;

function DefaultFooter({
  onSubmit,
  onClose,
}: {
  onSubmit?: () => void;
  onClose: () => void;
}) {
  return (
    <>
      {onSubmit != null && <Button onClick={onSubmit}>Submit</Button>}
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
    </>
  );
}

export function BaseDrawer({
  open,
  onOpenChange,
  trigger = defaultTrigger,
  direction = "right",
  title,
  description,
  onSubmit,
  footer,
  children,
}: BaseDrawerProps) {
  const handleClose = React.useCallback(
    () => onOpenChange(false),
    [onOpenChange],
  );
  const hasHeader = title != null || description != null;
  const footerContent =
    footer != null ? (
      typeof footer === "function" ? (
        footer(handleClose)
      ) : (
        footer
      )
    ) : (
      <DefaultFooter onSubmit={onSubmit} onClose={handleClose} />
    );

  return (
    <Drawer
      direction={direction}
      open={open}
      onOpenChange={onOpenChange}
      dismissible={false}
    >
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        {hasHeader && (
          <DrawerHeader>
            {title != null && <DrawerTitle>{title}</DrawerTitle>}
            {description != null && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
        )}
        {children != null && (
          <div className="no-scrollbar flex-1 overflow-y-auto px-4">
            {children}
          </div>
        )}
        <DrawerFooter>{footerContent}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
