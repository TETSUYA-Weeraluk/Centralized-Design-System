import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "ghost",
        "outline",
        "link",
        "icon",
      ],
      description: "รูปแบบของปุ่ม",
    },
    size: {
      control: "select",
      options: ["default", "icon", "icon-xs", "icon-sm", "icon-lg"],
      description: "ขนาดของปุ่ม",
    },
    disabled: {
      control: "boolean",
      description: "ลองเปิดเพื่อดูโหมด disabled",
    },
    loading: {
      control: "boolean",
      description: "แสดงสถานะ loading",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 8 ตัวอย่าง — เล่น default / hover (เอาเมาส์ไปชี้) / disabled (เปิดจาก Controls) ได้ใน Storybook

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    variant: "default",
    loading: true,
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: <ChevronRight />,
  },
};
