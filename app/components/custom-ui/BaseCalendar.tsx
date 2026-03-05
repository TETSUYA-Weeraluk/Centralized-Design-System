import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";

type BaseCalendarProps = React.ComponentProps<typeof Calendar>;

const BaseCalendar = ({
  className,
  ...props 
}: BaseCalendarProps) => {
  return (
    <Calendar
      mode="single" 
      {...props}
      className={cn("rounded-lg border shadow-sm p-3", className)}
    />
  );
};

export default BaseCalendar;