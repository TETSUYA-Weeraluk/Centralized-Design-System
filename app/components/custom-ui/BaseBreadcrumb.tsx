import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BaseBreadcrumbProps {
  items: {
    linkComponent?: React.ReactNode;
  }[];
}

const BaseBreadcrumb = ({ items }: BaseBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const showEllipsis = items.length > 3;

          if (showEllipsis && index > 0 && index < items.length - 2) {
            if (index === 1) {
              return (
                <React.Fragment key={`ellipsis-${index}`}>
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              );
            }
            return null;
          }

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.linkComponent}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>{item.linkComponent}</BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default BaseBreadcrumb;
