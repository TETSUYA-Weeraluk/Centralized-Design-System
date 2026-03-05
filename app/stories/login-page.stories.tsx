import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginPage from "@/components/template-page/LoginPage";

const meta = {
  title: "Template/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
