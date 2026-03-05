import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseCalendar from "@/components/custom-ui/BaseCalendar";

const meta = {
  title: "UI/Calendar",
  component: BaseCalendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseCalendar ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:3000/r/BaseCalendar.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "range", "multiple"],
      description: "โหมดการเลือกวันที่",
    },
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "รูปแบบหัวเดือน/ปี",
    },
  },
} satisfies Meta<typeof BaseCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    mode: "single",
  },
};

export const Range: Story = {
  args: {
    mode: "range",
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
  },
};

export const CaptionLayoutDropdown: Story = {
  args: {
    mode: "single",
    captionLayout: "dropdown",
  },
};
