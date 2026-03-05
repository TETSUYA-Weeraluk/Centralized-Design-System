import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import BaseAlertDialog from "@/components/custom-ui/BaseAlertDialog";

const meta = {
  title: "UI/Alert Dialog",
  component: BaseAlertDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseAlertDialog ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:3000/r/BaseAlertDialog.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "โหมดของ dialog (error จะไม่แสดงปุ่ม Cancel)",
    },
    title: {
      control: "text",
      description: "หัวข้อ",
    },
    description: {
      control: "text",
      description: "รายละเอียด",
    },
    confirmText: {
      control: "text",
      description: "ข้อความปุ่มยืนยัน",
    },
    cancelText: {
      control: "text",
      description: "ข้อความปุ่มยกเลิก",
    },
  },
} satisfies Meta<typeof BaseAlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: "Are you sure?",
  description:
    "This action cannot be undone. This will permanently delete your item.",
  confirmText: "Continue",
  cancelText: "Cancel",
  children: <Button variant="outline">Open dialog</Button>,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    mode: "info",
  },
};

export const Success: Story = {
  args: {
    ...defaultArgs,
    mode: "success",
    title: "Saved successfully",
    description: "Your changes have been saved.",
    confirmText: "OK",
  },
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    mode: "warning",
    title: "Unsaved changes",
    description: "You have unsaved changes. Do you want to leave?",
  },
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    mode: "error",
    title: "Something went wrong",
    description: "An error occurred. Please try again.",
    confirmText: "OK",
  },
};
