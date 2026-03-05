import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseCheckbox from "@/components/custom-ui/BaseCheckbox";
import { FieldGroup, FieldSet } from "@/components/ui/field";

const meta = {
  title: "UI/Checkbox",
  component: BaseCheckbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseCheckbox ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:3000/r/BaseCheckbox.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "ข้อความข้าง checkbox",
    },
    description: {
      control: "text",
      description: "คำอธิบายเพิ่มเติม",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "แนว label เทียบกับ checkbox",
    },
    error: {
      control: "boolean",
      description: "แสดงสถานะ error",
    },
    errorMessage: {
      control: "text",
      description: "ข้อความ error",
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BaseCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Subscribe to newsletter",
    description: "Get updates about new features and releases.",
  },
};

export const Group: Story = {
  render: () => (
    <FieldGroup>
      <BaseCheckbox label="Option A" />
      <BaseCheckbox label="Option B" />
      <BaseCheckbox label="Option C" />
    </FieldGroup>
  ),
};

export const Error: Story = {
  args: {
    label: "Required field",
    error: true,
    errorMessage: "You must accept the terms to continue.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    label: "Pre-checked",
    defaultChecked: true,
  },
};
