import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import { BaseDialog } from "@/components/custom-ui/BaseDialog";

const longContent = Array.from({ length: 10 }).map((_, i) => (
  <p key={i} className="mb-4 leading-normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </p>
));

const meta = {
  title: "UI/Dialog",
  component: BaseDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseDialog ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseDialog.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "หัวข้อ",
    },
    description: {
      control: "text",
      description: "คำอธิบาย",
    },
    scrollable: {
      control: "boolean",
      description: "ให้เนื้อหาส scroll ได้",
    },
    stickyFooter: {
      control: "boolean",
      description: "แสดง footer ติดล่าง",
    },
    showCloseButton: {
      control: "boolean",
      description: "แสดงปุ่ม X ปิดมุมขวาบน",
    },
    contentMaxHeight: {
      control: "text",
      description: "ความสูงสูงสุด (เช่น 80vh, 400px)",
    },
    contentHeight: {
      control: "text",
      description: "ความสูงคงที่/ล็อค (เช่น 80vh, 400px)",
    },
  },
} satisfies Meta<typeof BaseDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "หัวข้อ Dialog",
    description: "คำอธิบายสั้น ๆ",
    scrollable: false,
    stickyFooter: false,
    showCloseButton: true,
  },
  render: (args) => (
    <BaseDialog {...args}>
      <p>เนื้อหาใน dialog</p>
    </BaseDialog>
  ),
};

export const ScrollableContent: Story = {
  args: {
    title: "Scrollable Content",
    description: "Dialog ที่เนื้อหาส scroll ได้",
    scrollable: true,
    stickyFooter: false,
    showCloseButton: true,
    contentMaxHeight: "60vh",
  },
  render: (args) => <BaseDialog {...args}>{longContent}</BaseDialog>,
};

export const StickyFooter: Story = {
  args: {
    title: "Sticky Footer",
    description: "Footer ติดล่าง พร้อมปุ่มปิดกำหนดเอง",
    scrollable: true,
    stickyFooter: true,
    showCloseButton: true,
    closeButton: <Button variant="outline">ปิด</Button>,
  },
  render: (args) => <BaseDialog {...args}>{longContent}</BaseDialog>,
};

export const NoCloseButton: Story = {
  args: {
    title: "No Close Button",
    description: "ไม่มีปุ่ม X ต้องกดปุ่มปิดหรือกดนอก",
    showCloseButton: false,
    closeButton: <Button variant="outline">ปิด</Button>,
  },
  render: (args) => (
    <BaseDialog {...args}>
      <p>ปิดได้แค่กดปุ่มปิดหรือคลิกนอก dialog</p>
    </BaseDialog>
  ),
};

export const CustomClose: Story = {
  args: {
    title: "Custom Close",
    description: "ใช้ปุ่มปิดแบบกำหนดเอง",
    showCloseButton: true,
    closeButton: <Button>ยืนยันปิด</Button>,
  },
  render: (args) => (
    <BaseDialog {...args}>
      <p>เนื้อหา — กดปุ่มด้านล่างเพื่อปิด</p>
    </BaseDialog>
  ),
};

export const ContentMaxHeight: Story = {
  args: {
    title: "ความสูงสูงสุด 80vh",
    description: "Dialog สูงไม่เกิน 80vh เนื้อหาเกินจะ scroll",
    scrollable: true,
    contentMaxHeight: "80vh",
    showCloseButton: true,
  },
  render: (args) => <BaseDialog {...args}>{longContent}</BaseDialog>,
};

export const ContentHeight: Story = {
  args: {
    title: "ความสูงคงที่ 20vh",
    description: "Dialog ล็อคความสูง 20vh",
    scrollable: true,
    contentHeight: "20vh",
    showCloseButton: true,
  },
  render: (args) => <BaseDialog {...args}>{longContent}</BaseDialog>,
};
