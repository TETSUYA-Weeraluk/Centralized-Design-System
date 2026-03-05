import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface IBaseAlertDialogProps {
  title: React.ReactNode;
  description: React.ReactNode;
  confirmText: string;
  cancelText: string;
  children: React.ReactNode;
  mode?: "error" | "success" | "warning" | "info";
  onConfirm?: () => void;
  onCancel?: () => void;
}

const BaseAlertDialog = ({
  title,
  description,
  confirmText = "Continue",
  cancelText = "Cancel",
  children,
  mode = "info",
  onConfirm,
  onCancel,
}: IBaseAlertDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {mode !== "error" && (
            <AlertDialogCancel onClick={() => onCancel?.()}>
              {cancelText}
            </AlertDialogCancel>
          )}
          <AlertDialogAction onClick={() => onConfirm?.()}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default BaseAlertDialog;
