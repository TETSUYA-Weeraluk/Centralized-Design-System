import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import BaseFormInput, {
  type BaseFormInputField,
} from "@/components/custom-ui/BaseFormInput";
import { User, Mail } from "lucide-react";

/** Args สำหรับ Story (ไม่รวม field เพราะใส่ใน render แล้ว) */
type BaseFormInputStoryArgs = Omit<
  React.ComponentProps<typeof BaseFormInput>,
  "field"
>;

function useMockField(initial: {
  value?: string;
  isTouched?: boolean;
  errors?: Array<{ message?: string } | undefined>;
}): BaseFormInputField {
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
  title: "Form/BaseFormInput",
  component: BaseFormInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input สำหรับฟอร์มที่รับ `field` จาก TanStack Form (form.Field children). แสดง label, icon (optional), และ error messages ได้ \n\n ติดตั้ง component BaseFormInput ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseFormInput.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "ชื่อฟิลด์ (ใช้กับ id และ name)" },
    title: { control: "text", description: "ข้อความ label ด้านบน" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
      description: "ประเภท input",
    },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof BaseFormInput>;

export default meta;
/** Story type ที่ให้ args ไม่ต้องมี field (ใส่ใน render แทน) */
type Story = Omit<StoryObj<typeof meta>, "args"> & {
  args?: Partial<BaseFormInputStoryArgs>;
};

export const Default: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "username",
    title: "บัญชีผู้ใช้งาน",
    placeholder: "กรอกชื่อผู้ใช้",
  },
};

export const WithTitle: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "email",
    title: "อีเมล",
    placeholder: "example@email.com",
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "username",
    title: "บัญชีผู้ใช้งาน",
    icon: <User size={16} className="text-primary" />,
    placeholder: "กรอกชื่อผู้ใช้",
  },
};

export const WithIconEmail: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "email",
    title: "อีเมล",
    type: "email",
    icon: <Mail size={16} className="text-primary" />,
    placeholder: "example@email.com",
  },
};

export const Error: Story = {
  render: (args) => {
    const field = useMockField({
      value: "",
      isTouched: true,
      errors: [{ message: "กรุณากรอกบัญชีผู้ใช้งาน" }],
    });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "username",
    title: "บัญชีผู้ใช้งาน",
    placeholder: "กรอกชื่อผู้ใช้",
  },
};

export const Password: Story = {
  render: (args) => {
    const field = useMockField({ value: "" });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "password",
    title: "รหัสผ่าน",
    type: "password",
    placeholder: "กรอกรหัสผ่าน",
  },
};

export const Disabled: Story = {
  render: (args) => {
    const field = useMockField({ value: "disabled value" });
    return (
      <div className="w-[320px]">
        <BaseFormInput {...args} field={field} />
      </div>
    );
  },
  args: {
    name: "disabled-field",
    title: "ฟิลด์ปิดใช้งาน",
    placeholder: "ไม่สามารถแก้ไขได้",
    disabled: true,
  },
};
