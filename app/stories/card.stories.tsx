import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import BaseCard from "@/components/custom-ui/BaseCard";

const meta = {
  title: "UI/Card",
  component: BaseCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseCard ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:3000/r/BaseCard.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "หัวข้อการ์ด",
    },
    description: {
      control: "text",
      description: "คำอธิบายใต้หัวข้อ",
    },
    noPadding: {
      control: "boolean",
      description: "ปิด padding ของ content",
    },
  },
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "Card description goes here.",
    children: "Card content area. You can put any content inside.",
  },
};

export const WithExtra: Story = {
  args: {
    title: "Card with Action",
    description: "This card has an action button in the header.",
    extra: <Button variant="ghost" size="icon-xs">⋯</Button>,
    children: "Content with header action.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card with Footer",
    description: "Card that includes a footer section.",
    children: "Main content of the card.",
    footer: (
      <div className="flex justify-end gap-2 w-full">
        <Button variant="outline">Cancel</Button>
        <Button variant="default">Save</Button>
      </div>
    ),
    className: "min-w-96 max-w-sm",
  },
};

export const NoPadding: Story = {
  args: {
    title: "Card without content padding",
    noPadding: true,
    children: (
      <div className="rounded-b-lg bg-muted/50 p-4">
        Content with custom padding / full-width layout.
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    children: "Card with only content, no header or footer.",
  },
};
