import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  BaseDrawer,
  type BaseDrawerProps,
} from "@/components/custom-ui/BaseDrawer";

/** Wrapper สำหรับ Storybook — เก็บ state เปิด/ปิด ไว้ข้างนอก แล้วส่ง open + onOpenChange ให้ BaseDrawer */
function BaseDrawerControlled(
  props: Omit<BaseDrawerProps, "open" | "onOpenChange">,
) {
  const [open, setOpen] = React.useState(false);
  return (
    <BaseDrawer {...props} open={open} onOpenChange={setOpen} />
  );
}

const longContent = Array.from({ length: 10 }).map((_, i) => (
  <p key={i} className="mb-4 leading-normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </p>
));

const meta = {
  title: "UI/Drawer",
  component: BaseDrawerControlled,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseDrawer ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseDrawer.json\n```",
      },
      source: {
        transform: (source: string) => {
          let out = source.replace(/BaseDrawerControlled/g, "BaseDrawer");
          if (!out.includes("open={open}")) {
            out = out.replace(/<BaseDrawer\s/, "<BaseDrawer open={open} onOpenChange={setOpen} ");
          }
          return out;
        },
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "ทิศทางเลื่อนออก",
    },
    title: {
      control: "text",
      description: "หัวข้อ",
    },
    description: {
      control: "text",
      description: "คำอธิบายใต้หัวข้อ",
    },
  },
} satisfies Meta<typeof BaseDrawerControlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "right",
    title: "หัวข้อ Drawer",
    description: "คำอธิบายสั้น ๆ — ปิดได้แค่กด Cancel (กดนอกไม่ได้)",
  },
  render: (args) => (
    <BaseDrawerControlled {...args}>
      <p>เนื้อหาใน drawer</p>
    </BaseDrawerControlled>
  ),
};

export const WithSubmitAndCancel: Story = {
  args: {
    direction: "right",
    title: "ยืนยันการดำเนินการ",
    description: "มีปุ่ม Submit และ Cancel (default footer เมื่อส่ง onSubmit)",
  },
  render: (args) => (
    <BaseDrawerControlled {...args} onSubmit={() => window.alert("Submitted")}>
      <p>เนื้อหา — กด Submit หรือ Cancel</p>
    </BaseDrawerControlled>
  ),
};

export const DirectionRight: Story = {
  args: {
    direction: "right",
    title: "Drawer จากขวา",
    description: "เลื่อนออกจากด้านขวา",
  },
  render: (args) => (
    <BaseDrawerControlled {...args}>{longContent}</BaseDrawerControlled>
  ),
};

export const DirectionLeft: Story = {
  args: {
    direction: "left",
    title: "Drawer จากซ้าย",
    description: "เลื่อนออกจากด้านซ้าย",
  },
  render: (args) => (
    <BaseDrawerControlled
      {...args}
      trigger={<Button variant="outline">เปิดจากซ้าย</Button>}
    >
      {longContent}
    </BaseDrawerControlled>
  ),
};

export const DirectionTop: Story = {
  args: {
    direction: "top",
    title: "Drawer จากบน",
    description: "เลื่อนลงจากด้านบน",
  },
  render: (args) => (
    <BaseDrawerControlled
      {...args}
      trigger={<Button variant="outline">เปิดจากบน</Button>}
    >
      <p>เนื้อหาสั้น</p>
    </BaseDrawerControlled>
  ),
};

export const DirectionBottom: Story = {
  args: {
    direction: "bottom",
    title: "Drawer จากล่าง",
    description: "เลื่อนขึ้นจากด้านล่าง",
  },
  render: (args) => (
    <BaseDrawerControlled
      {...args}
      trigger={<Button variant="outline">เปิดจากล่าง</Button>}
      onSubmit={() => window.alert("ยืนยัน")}
    >
      {longContent}
    </BaseDrawerControlled>
  ),
};

export const CustomFooter: Story = {
  args: {
    direction: "right",
    title: "Footer กำหนดเอง",
    description: "ส่ง footer เป็น ReactNode หรือ (onClose) => ReactNode ได้",
  },
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false);
const footer = (onClose) => (
  <>
    <Button variant="destructive">ลบ</Button>
    <Button variant="outline" onClick={onClose}>ปิด</Button>
  </>
);

<BaseDrawer
  open={open}
  onOpenChange={setOpen}
  direction="right"
  title="Footer กำหนดเอง"
  description="ส่ง footer เป็น ReactNode หรือ (onClose) => ReactNode ได้"
  footer={footer}
>
  <p>ใช้ footer กำหนดเอง — ปิดได้แค่กดปุ่มปิด</p>
</BaseDrawer>`,
      },
    },
  },
  render: (args) => (
    <BaseDrawerControlled
      {...args}
      footer={(onClose) => (
        <>
          <Button variant="destructive">ลบ</Button>
          <Button variant="outline" onClick={onClose}>
            ปิด
          </Button>
        </>
      )}
    >
      <p>ใช้ footer กำหนดเอง — ปิดได้แค่กดปุ่มปิด</p>
    </BaseDrawerControlled>
  ),
};

export const ScrollableContent: Story = {
  args: {
    direction: "right",
    title: "Move Goal",
    description: "Set your daily activity goal.",
  },
  render: (args) => (
    <BaseDrawerControlled
      {...args}
      trigger={<Button variant="outline">Scrollable Content</Button>}
      onSubmit={() => window.alert("Submitted")}
    >
      {longContent}
    </BaseDrawerControlled>
  ),
};
