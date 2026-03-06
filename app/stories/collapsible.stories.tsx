import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseCollapsible from "@/components/custom-ui/BaseCollapsible";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Collapsible",
  component: BaseCollapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseCollapsible ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseCollapsible.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "ข้อความบนปุ่ม trigger เมื่อไม่ได้ใช้ trigger แบบกำหนดเอง",
    },
    classNameContent: {
      control: "text",
      description: "คลาส CSS เพิ่มเติมสำหรับ content",
    },
  },
} satisfies Meta<typeof BaseCollapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "คลิกเพื่อเปิด/ปิด",
    children: (
      <p>
        นี่คือเนื้อหาภายใน collapsible สามารถใส่ข้อความหรือ component อื่นได้
      </p>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: "รายละเอียดการจัดส่ง",
    children: (
      <div className="space-y-2">
        <p>จัดส่งฟรีเมื่อซื้อครบ 500 บาท</p>
        <p>ระยะเวลาจัดส่ง 2-5 วันทำการ</p>
      </div>
    ),
  },
};

export const CustomTrigger: Story = {
  args: { children: null },
  render: () => (
    <BaseCollapsible
      trigger={
        <Button variant="outline" className="w-full justify-between">
          แสดงข้อมูลเพิ่มเติม
          <span className="ml-2">▼</span>
        </Button>
      }
    >
      <p>เนื้อหานี้ใช้ปุ่ม trigger แบบกำหนดเอง</p>
    </BaseCollapsible>
  ),
};

export const DefaultTitle: Story = {
  args: {
    children: <p>เมื่อไม่ระบุ title จะแสดง "Collapsible" เป็นค่าเริ่มต้น</p>,
  },
};

export const Multiple: Story = {
  args: { children: null },
  render: () => (
    <div className="flex w-[350px] flex-col gap-2">
      <BaseCollapsible title="คำถามที่ 1">
        <p>คำตอบสำหรับคำถามแรก</p>
      </BaseCollapsible>
      <BaseCollapsible title="คำถามที่ 2">
        <p>คำตอบสำหรับคำถามที่สอง</p>
      </BaseCollapsible>
      <BaseCollapsible title="คำถามที่ 3">
        <p>คำตอบสำหรับคำถามที่สาม</p>
      </BaseCollapsible>
    </div>
  ),
};
