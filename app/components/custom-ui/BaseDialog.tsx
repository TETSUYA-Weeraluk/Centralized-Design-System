"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface BaseDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  scrollable?: boolean;
  stickyFooter?: boolean;
  showCloseButton?: boolean;
  closeButton?: React.ReactNode;
  contentMaxHeight?: string;
  contentHeight?: string;
}

const defaultTrigger = <Button variant="outline">Open</Button>;

export function BaseDialog({
  open,
  onOpenChange,
  trigger = defaultTrigger,
  title,
  description,
  children,
  scrollable = false,
  stickyFooter = false,
  showCloseButton = true,
  closeButton,
  contentMaxHeight,
  contentHeight,
}: BaseDialogProps) {
  const heightStyle =
    contentHeight != null || contentMaxHeight != null
      ? {
          ...(contentHeight != null && { height: contentHeight }),
          ...(contentMaxHeight != null && { maxHeight: contentMaxHeight }),
        }
      : undefined;

  const scrollableContentClass = cn(
    scrollable && "no-scrollbar -mx-4 overflow-y-auto px-4",
  );

  const bodyContent = stickyFooter ? (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className={cn("min-h-0 flex-1", scrollableContentClass)}>
        {children}
      </div>
      {closeButton != null && (
        <DialogFooter showCloseButton={false}>
          <DialogClose asChild>{closeButton}</DialogClose>
        </DialogFooter>
      )}
    </div>
  ) : (
    <>
      <div className={cn(scrollableContentClass)}>{children}</div>
      {closeButton != null && (
        <DialogFooter showCloseButton={false}>
          <DialogClose asChild>{closeButton}</DialogClose>
        </DialogFooter>
      )}
    </>
  );

  const useHeightConstraint = heightStyle != null;

  const inner = useHeightConstraint ? (
    <div className="flex min-h-0 flex-col overflow-hidden" style={heightStyle}>
      <DialogHeader>
        {title != null && <DialogTitle>{title}</DialogTitle>}
        {description != null && (
          <DialogDescription>{description}</DialogDescription>
        )}
      </DialogHeader>
      {stickyFooter ? (
        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <div
            className={cn(
              "min-h-0 flex-1 overflow-y-auto",
              scrollable && "no-scrollbar -mx-4 px-4",
            )}
          >
            {children}
          </div>
          {closeButton != null && (
            <DialogFooter showCloseButton={false}>
              <DialogClose asChild>{closeButton}</DialogClose>
            </DialogFooter>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "min-h-0 flex-1 overflow-y-auto",
            scrollable && "no-scrollbar -mx-4 px-4",
          )}
        >
          {children}
          {closeButton != null && (
            <DialogFooter showCloseButton={false}>
              <DialogClose asChild>{closeButton}</DialogClose>
            </DialogFooter>
          )}
        </div>
      )}
    </div>
  ) : (
    <>
      <DialogHeader>
        {title != null && <DialogTitle>{title}</DialogTitle>}
        {description != null && (
          <DialogDescription>{description}</DialogDescription>
        )}
      </DialogHeader>
      {stickyFooter ? (
        <div className="flex max-h-[50vh] min-h-0 flex-col gap-4">
          <div className={cn("min-h-0 flex-1", scrollableContentClass)}>
            {children}
          </div>
          {closeButton != null && (
            <DialogFooter showCloseButton={false}>
              <DialogClose asChild>{closeButton}</DialogClose>
            </DialogFooter>
          )}
        </div>
      ) : (
        bodyContent
      )}
    </>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent showCloseButton={showCloseButton}>{inner}</DialogContent>
    </Dialog>
  );
}
