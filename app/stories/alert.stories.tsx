import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseAlert from "@/components/custom-ui/BaseAlert";

const meta = {
  title: "UI/Alert",
  component: BaseAlert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseAlert ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseAlert.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "รูปแบบของ Alert",
    },
    title: {
      control: "text",
      description: "หัวข้อ",
    },
    description: {
      control: "text",
      description: "รายละเอียด",
    },
  },
} satisfies Meta<typeof BaseAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Success",
    description:
      "Your changes have been saved successfully. You can continue editing or close this panel.",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    title: "Error",
    description:
      "Something went wrong. Please check your connection and try again.",
    variant: "destructive",
  },
};
