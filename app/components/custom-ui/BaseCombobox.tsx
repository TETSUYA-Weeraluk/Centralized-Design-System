import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import type { ComboboxRoot } from "@base-ui/react";

export interface BaseComboboxProps {
  items: string[];
  multiple?: boolean;
  value?: string[] | string;
  onValueChange: (value: string[]) => void;
  showClear?: boolean;
  disabled?: boolean;
  autoHighlight?: boolean;
  icon?: React.ReactNode;
}

export function BaseCombobox({
  items,
  multiple = false,
  value,
  onValueChange,
  showClear = false,
  disabled = false,
  autoHighlight = false,
  icon,
}: BaseComboboxProps) {
  const [internalValue, setInternalValue] = React.useState<
    string[] | string | null | undefined
  >(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleValueChange = React.useCallback(
    (
      newValue: string | string[] | null,
      _eventDetails: ComboboxRoot.ChangeEventDetails,
    ) => {
      if (newValue === null) return;
      setInternalValue(newValue);
      onValueChange(Array.isArray(newValue) ? newValue : [newValue]);
    },
    [onValueChange],
  );

  const displayValue = internalValue ?? (multiple ? [] : undefined);
  const chipValues = Array.isArray(displayValue) ? displayValue : [];
  const multipleValue = Array.isArray(displayValue) ? displayValue : [];
  const singleValue = typeof displayValue === "string" ? displayValue : null;

  if (multiple) {
    return (
      <Combobox
        items={items}
        multiple={multiple}
        value={multipleValue}
        onValueChange={handleValueChange}
        disabled={disabled}
        autoHighlight={autoHighlight}
      >
        <ComboboxChips>
          <ComboboxValue>
            {chipValues.map((item) => (
              <ComboboxChip key={item}>{item}</ComboboxChip>
            ))}
          </ComboboxValue>
          <ComboboxChipsInput
            placeholder="เพิ่มรายการ..."
            disabled={disabled}
          />
        </ComboboxChips>
        <ComboboxContent>
          <ComboboxEmpty>ไม่พบรายการ</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  }

  return (
    <Combobox
      items={items}
      value={singleValue}
      onValueChange={handleValueChange}
      disabled={disabled}
      autoHighlight={autoHighlight}
    >
      <ComboboxInput
        placeholder="เลือก..."
        showClear={showClear}
        disabled={disabled}
      >
        {icon != null && <InputGroupAddon>{icon}</InputGroupAddon>}
      </ComboboxInput>
      <ComboboxContent>
        <ComboboxEmpty>ไม่พบรายการ</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
