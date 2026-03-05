import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
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
        "outline",
        "ghost",
        "link",
        "number",
        "number-outline",
        "number-destructive",
      ],
      description: "รูปแบบของ Badge",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
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

export const Number: Story = {
  args: {
    children: "3",
    variant: "number",
  },
};

export const NumberOutline: Story = {
  args: {
    children: "5",
    variant: "number-outline",
  },
};

export const NumberDestructive: Story = {
  args: {
    children: "99",
    variant: "number-destructive",
  },
};
