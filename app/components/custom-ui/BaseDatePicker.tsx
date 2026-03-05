"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import BaseCalendar from "./BaseCalendar";

export type BaseDatePickerValue = Date | DateRange | Date[];

export interface BaseDatePickerProps {
  value?: BaseDatePickerValue;
  onValueChange: (value: BaseDatePickerValue) => void;
  mode?: "single" | "range" | "multiple";
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  format?: string;
}

function getDisplayText(
  value: BaseDatePickerValue | undefined,
  mode: "single" | "range" | "multiple",
  placeholder: string,
  dateFormat: string,
): React.ReactNode {
  if (value == null) return <span>{placeholder}</span>;
  if (mode === "single") {
    return format(value as Date, dateFormat);
  }
  if (mode === "range") {
    const range = value as DateRange;
    if (!range?.from) return <span>{placeholder}</span>;
    return range.to
      ? `${format(range.from, dateFormat)} - ${format(range.to, dateFormat)}`
      : format(range.from, dateFormat);
  }
  const dates = value as Date[];
  if (dates.length === 0) return <span>{placeholder}</span>;
  return dates.length === 1
    ? format(dates[0], dateFormat)
    : `${dates.length} วันที่เลือก`;
}

function getDefaultMonth(value: BaseDatePickerValue | undefined): Date {
  if (!value) return new Date();
  if (value instanceof Date) return value;
  if (Array.isArray(value)) return value[0] ?? new Date();
  const range = value as DateRange;
  return range.from ?? new Date();
}

export function BaseDatePicker({
  value,
  onValueChange,
  mode = "single",
  label = "Date",
  placeholder = "เลือกวันที่",
  required = false,
  disabled = false,
  format: dateFormat = "PPP",
}: BaseDatePickerProps) {
  const [internalValue, setInternalValue] = React.useState<
    BaseDatePickerValue | undefined
  >(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleSelect = React.useCallback(
    (newValue: Date | DateRange | Date[] | undefined) => {
      if (newValue == null) return;
      setInternalValue(newValue);
      onValueChange(newValue);
    },
    [onValueChange],
  );

  return (
    <Field className="mx-auto">
      <FieldLabel htmlFor="date-picker">{label}</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker"
            className="justify-start font-normal"
            disabled={disabled}
          >
            {getDisplayText(internalValue, mode, placeholder, dateFormat)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          {/* @ts-expect-error DayPicker discriminated union - mode เป็น union ทำให้ type ไม่ match */}
          <BaseCalendar
            mode={mode}
            required={required}
            selected={internalValue}
            onSelect={handleSelect}
            defaultMonth={getDefaultMonth(internalValue ?? value)}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
