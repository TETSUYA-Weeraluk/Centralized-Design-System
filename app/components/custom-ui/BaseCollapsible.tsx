import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";

interface BaseCollapsibleProps {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  classNameContent?: string;
  title?: string;
}

const BaseCollapsible = ({
  trigger,
  children,
  classNameContent,
  title,
}: BaseCollapsibleProps) => {
  return (
    <Collapsible className="data-[state=open]:bg-muted rounded-md">
      <CollapsibleTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <div className="text-sm font-medium">
            <Button variant="ghost" className="group w-full">
              {!trigger && title || 'Collapsible' }
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
            </Button>
          </div>
        )}
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "flex flex-col items-start gap-2 p-2.5 pt-0 text-sm",
          classNameContent,
        )}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default BaseCollapsible;
