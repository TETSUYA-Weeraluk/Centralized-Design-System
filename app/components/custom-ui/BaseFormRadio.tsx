import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldDescription,
  FieldSet,
} from "../ui/field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export type BaseFormRadioField = {
  state: {
    value: string;
    meta: {
      isTouched: boolean;
      isValid: boolean;
      errors: Array<{ message?: string } | undefined>;
    };
  };
  handleChange: (value: string) => void;
  handleBlur: () => void;
};

export type BaseFormRadioItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

type BaseFormRadioProps = Omit<
  React.ComponentProps<typeof RadioGroup>,
  "name" | "value" | "onValueChange"
> & {
  field: BaseFormRadioField;
  name: string;
  title?: string;
  description?: React.ReactNode;
  items: BaseFormRadioItem[];
};

const BaseFormRadio = ({
  field,
  name,
  title,
  description,
  items,
  ...props
}: BaseFormRadioProps) => {
  const isInvalid =
    field.state.meta.isTouched && field.state.meta.errors.length > 0;

  return (
    <FieldSet className="w-full" data-invalid={isInvalid}>
      {title != null && title !== "" && (
        <FieldLegend variant="label">{title}</FieldLegend>
      )}
      {description != null && (
        <FieldDescription>{description}</FieldDescription>
      )}
      <RadioGroup
        name={name}
        value={field.state.value}
        onValueChange={field.handleChange}
        onBlur={field.handleBlur}
        aria-invalid={isInvalid}
        {...props}
      >
        {items.map((item) => {
          const itemId = `${name}-${item.value}`;
          return (
            <Field key={item.value} orientation="horizontal">
              <RadioGroupItem
                value={item.value}
                id={itemId}
                disabled={item.disabled}
              />
              <FieldLabel
                htmlFor={itemId}
                className={`font-normal ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {item.label}
              </FieldLabel>
            </Field>
          );
        })}
      </RadioGroup>
      {isInvalid && field.state.meta.errors.length > 0 && (
        <FieldError errors={field.state.meta.errors} />
      )}
    </FieldSet>
  );
};

export default BaseFormRadio;
