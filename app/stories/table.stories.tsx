import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef } from "@tanstack/react-table";
import BaseTable from "@/components/custom-ui/BaseTable";
import { Button } from "@/components/ui/button";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const sampleColumns: ColumnDef<User, unknown>[] = [
  { accessorKey: "id", header: "ID", cell: (info) => info.getValue() },
  { accessorKey: "name", header: "ชื่อ" },
  { accessorKey: "email", header: "อีเมล" },
  { accessorKey: "role", header: "บทบาท" },
];

const sampleData: User[] = [
  { id: 1, name: "สมชาย ใจดี", email: "somchai@example.com", role: "Admin" },
  { id: 2, name: "สมหญิง รักเรียน", email: "somying@example.com", role: "User" },
  { id: 3, name: "วิชัย มั่นคง", email: "wichai@example.com", role: "Editor" },
  { id: 4, name: "มานี มีสุข", email: "manee@example.com", role: "User" },
  { id: 5, name: "วิชา เก่งกาจ", email: "wicha@example.com", role: "Admin" },
];

const meta = {
  title: "UI/Table",
  component: BaseTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseTable ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseTable.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    totalCount: {
      control: "number",
      description: "จำนวนข้อมูลทั้งหมด (server-side)",
    },
    totalPage: {
      control: "number",
      description: "จำนวนหน้าทั้งหมด",
    },
    searchPlaceholder: {
      control: "text",
      description: "placeholder ของ search input",
    },
    limitOptions: {
      control: "object",
      description: "ตัวเลือก limit [10, 20, 30]",
    },
  },
} satisfies Meta<typeof BaseTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = sampleColumns as ColumnDef<object, unknown>[];

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
    totalCount: 100,
    totalPage: 10,
    limitOptions: [10, 20, 30],
  },
};

export const WithSearch: Story = {
  args: {
    columns,
    data: sampleData,
    totalCount: 100,
    totalPage: 10,
    onSearch: (keyword: string) => console.log("onSearch:", keyword),
    searchPlaceholder: "ค้นหาชื่อหรืออีเมล...",
  },
};

export const WithExtra: Story = {
  args: {
    columns,
    data: sampleData,
    totalCount: 100,
    totalPage: 10,
    extra: <Button size="default">เพิ่มผู้ใช้</Button>,
  },
};

export const WithSearchAndExtra: Story = {
  args: {
    columns,
    data: sampleData,
    totalCount: 100,
    totalPage: 10,
    onSearch: (keyword: string) => console.log("onSearch:", keyword),
    searchPlaceholder: "ค้นหา...",
    extra: <Button size="default">เพิ่มผู้ใช้</Button>,
  },
};

export const Pagination: Story = {
  args: {
    columns,
    data: sampleData,
    totalCount: 67,
    totalPage: 7,
    onPageChange: (page: number, limit: number) =>
      console.log("onPageChange:", { page, limit }),
    limitOptions: [10, 20, 50],
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    totalCount: 0,
    totalPage: 1,
  },
};

export const SinglePage: Story = {
  args: {
    columns,
    data: sampleData.slice(0, 3),
    totalCount: 3,
    totalPage: 1,
  },
};
