import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import BaseFormRadio, {
  type BaseFormRadioField,
  type BaseFormRadioItem,
} from "@/components/custom-ui/BaseFormRadio";

/** Args สำหรับ Story (ไม่รวม field เพราะใส่ใน render แล้ว) */
type BaseFormRadioStoryArgs = Omit<
  React.ComponentProps<typeof BaseFormRadio>,
  "field"
>;

const defaultItems: BaseFormRadioItem[] = [
  { value: "a", label: "ตัวเลือก A" },
  { value: "b", label: "ตัวเลือก B" },
  { value: "c", label: "ตัวเลือก C" },
];

function useMockField(initial: {
  value?: string;
  isTouched?: boolean;
  errors?: Array<{ message?: string } | undefined>;
}): BaseFormRadioField {
  const [value, setValue] = useState(initial.value ?? "");
  const [isTouched, setTouched] = useState(initial.isTouched ?? false);
  const [errors] = useState(initial.errors ?? []);

  return {
    state: {
      value,
      meta: {
        isTouched,
        isValid: errors.length === 0,
        errors,
      },
    },
    handleChange: (v: string) => setValue(v),
    handleBlur: () => setTouched(true),
  };
}

const meta = {
  title: "Form/BaseFormRadio",
  component: BaseFormRadio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Radio group สำหรับฟอร์มที่รับ `field` จาก TanStack Form (form.Field children). รองรับ title, description และ items (value, label, disabled)",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "ชื่อฟิลด์ (ใช้กับ name และ id ของแต่ละ radio)" },
    title: { control: "text", description: "ข้อความ legend ด้านบน" },
    description: { control: "text", description: "คำอธิบายเพิ่มเติม" },
    items: { description: "รายการตัวเลือก { value, label, disabled? }" },
  },
} satisfies Meta<typeof BaseFormRadio>;

export default meta;
/** Story type ที่ให้ args ไม่ต้องมี field (ใส่ใน render แทน) */
type Story = Omit<StoryObj<typeof meta>, "args"> & {
  args?: Partial<BaseFormRadioStoryArgs>;
};

export const Default: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormRadio {...args} field={field} />
      </div>
    );
  },
  args: {
    title: "เลือกหนึ่งข้อ",
    name: "choice",
    items: defaultItems,
  },
};

export const WithTitle: Story = {
  render: (args) => {
    const field = useMockField({ value: "b" });
    return (
      <div className="w-[320px]">
        <BaseFormRadio {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "choice",
    title: "เลือกหนึ่งข้อ",
    items: defaultItems,
  },
};

export const WithDescription: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormRadio {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "notification",
    title: "แจ้งเตือน",
    description: "เลือกวิธีที่ต้องการรับการแจ้งเตือน",
    items: [
      { value: "email", label: "อีเมล" },
      { value: "sms", label: "SMS" },
      { value: "push", label: "Push Notification" },
    ],
  },
};

export const Error: Story = {
  render: (args) => {
    const field = useMockField({
      value: "",
      isTouched: true,
      errors: [{ message: "กรุณาเลือกอย่างน้อยหนึ่งตัวเลือก" }],
    });
    return (
      <div className="w-[320px]">
        <BaseFormRadio {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "choice",
    title: "เลือกหนึ่งข้อ",
    items: defaultItems,
  },
};

export const WithDisabledItem: Story = {
  render: (args) => {
    const field = useMockField({ value: "a" });
    return (
      <div className="w-[320px]">
        <BaseFormRadio {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "choice",
    title: "ตัวเลือก (B ปิดใช้งาน)",
    items: [
      { value: "a", label: "ตัวเลือก A" },
      { value: "b", label: "ตัวเลือก B", disabled: true },
      { value: "c", label: "ตัวเลือก C" },
    ],
  },
};
