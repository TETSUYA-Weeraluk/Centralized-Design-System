import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

export interface BaseCheckboxProps extends Omit<CheckboxProps, "id"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: boolean;
  errorMessage?: React.ReactNode;
  valid?: boolean;
  orientation?: "vertical" | "horizontal";
  id?: string;
  className?: string;
}

function useIdOrName(id: string | undefined, name: string | undefined) {
  const generated = React.useId();
  return id ?? name ?? generated;
}

const BaseCheckbox = React.forwardRef<
  React.ComponentRef<typeof Checkbox>,
  BaseCheckboxProps
>(
  (
    {
      className,
      label,
      description,
      error = false,
      errorMessage,
      valid,
      orientation = "horizontal",
      id: idProp,
      name,
      disabled,
      ...checkboxProps
    },
    ref,
  ) => {
    const id = useIdOrName(idProp, name);

    return (
      <Field
        data-invalid={error ? true : undefined}
        orientation={orientation}
        className={cn(className)}
        data-valid={valid === true && !error ? true : undefined}
      >
        <Checkbox
          ref={ref}
          id={id}
          name={name}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            description
              ? `${id}-desc`
              : errorMessage
                ? `${id}-error`
                : undefined
          }
          {...checkboxProps}
        />
        {(label != null || description != null || (error && errorMessage)) && (
          <FieldContent>
            {label != null && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
            {description != null && (
              <FieldDescription id={`${id}-desc`}>
                {description}
              </FieldDescription>
            )}
            {error && errorMessage != null && (
              <FieldError id={`${id}-error`}>{errorMessage}</FieldError>
            )}
          </FieldContent>
        )}
      </Field>
    );
  },
);

export default BaseCheckbox;
