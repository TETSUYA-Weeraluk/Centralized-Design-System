import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface BaseCardProps extends Omit<
  React.ComponentProps<"div">,
  "title"
> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  noPadding?: boolean;
}

const BaseCard = React.forwardRef<HTMLDivElement, BaseCardProps>(
  (
    {
      className,
      title,
      description,
      extra,
      children,
      footer,
      noPadding,
      ...props
    },
    ref,
  ) => {
    const hasHeader = title != null || description != null || extra != null;

    return (
      <Card ref={ref} className={cn(className)} {...props}>
        {hasHeader && (
          <CardHeader className={extra ? "has-data-[slot=card-action]" : ""}>
            {(title != null || description != null) && (
              <>
                {title != null && <CardTitle>{title}</CardTitle>}
                {description != null && (
                  <CardDescription>{description}</CardDescription>
                )}
              </>
            )}
            {extra != null && <CardAction>{extra}</CardAction>}
          </CardHeader>
        )}
        {children != null && (
          <CardContent className={cn(noPadding && "p-0")}>
            {children}
          </CardContent>
        )}
        {footer != null && <CardFooter>{footer}</CardFooter>}
      </Card>
    );
  },
);

export default BaseCard;
