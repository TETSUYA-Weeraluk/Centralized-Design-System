import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseAccordion from "@/components/custom-ui/BaseAccordion";

const defaultItems = [
  {
    value: "billing",
    title: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
  },
  {
    value: "security",
    title: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits.",
  },
  {
    value: "integration",
    title: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more.",
  },
];

const itemsWithDisabled = [
  { ...defaultItems[0] },
  { ...defaultItems[1], disabled: true },
  { ...defaultItems[2] },
];

const meta = {
  title: "UI/Accordion",
  component: BaseAccordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseAccordion ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseAccordion.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    border: {
      control: "boolean",
      description: "แสดงเส้นขอบ",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "single = เปิดได้ทีละรายการ, multiple = เปิดได้หลายรายการ",
    },
  },
} satisfies Meta<typeof BaseAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Border: Story = {
  args: {
    items: defaultItems,
    border: true,
    type: "single",
  },
};

export const Single: Story = {
  args: {
    items: defaultItems,
    border: true,
    type: "single",
    defaultValue: "billing",
  },
};

export const Multi: Story = {
  args: {
    items: defaultItems,
    border: true,
    type: "multiple",
    defaultValue: ["billing"],
  },
};

export const Disabled: Story = {
  args: {
    items: itemsWithDisabled,
    border: true,
    type: "single",
  },
};
