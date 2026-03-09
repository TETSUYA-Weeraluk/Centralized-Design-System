import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseSidebar, {
  type DataSidebar,
} from "@/components/custom-ui/BaseSidebar";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  FileText,
  Users,
  Plus,
} from "lucide-react";
import { Link, MemoryRouter } from "react-router";
import { Separator } from "@/components/ui/separator";

const defaultData: DataSidebar = {
  header: {
    title: "Acme Inc.",
    icon: LayoutDashboard,
    to: "/",
    collapsible: true,
    children: (
      <>
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Teams
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link to="/" className="gap-2 p-2">
            <LayoutDashboard className="size-3.5 shrink-0" />
            Acme Inc
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/other" className="gap-2 p-2">
            <Users className="size-3.5 shrink-0" />
            Other Team
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 p-2">
          <Plus className="size-4" />
          <span className="font-medium text-muted-foreground">Add team</span>
        </DropdownMenuItem>
      </>
    ),
  },
  menuItems: [
    {
      type: "collapsible",
      title: "Dashboard",
      to: "/",
      icon: LayoutDashboard,
      isActive: true,
      children: [
        { title: "Overview", to: "/" },
        { title: "Analytics", to: "/analytics" },
      ],
    },
    {
      type: "collapsible",
      title: "Projects",
      to: "/projects",
      icon: FolderKanban,
      children: [
        { title: "All", to: "/projects" },
        { title: "Active", to: "/projects/active" },
      ],
    },
    {
      type: "group",
      title: "Documents",
      children: [
        {
          title: "Design System",
          to: "/design-system",
          icon: FileText,
          extra: (
            <>
              <DropdownMenuItem asChild>
                <Link
                  to="/design-system/components"
                  className="flex items-center gap-2"
                >
                  <FileText className="size-4 text-muted-foreground" />
                  Components
                </Link>
              </DropdownMenuItem>
            </>
          ),
        },
        {
          title: "Marketing",
          to: "/marketing",
          icon: FolderKanban,
          extra: (
            <>
              <DropdownMenuItem asChild>
                <Link
                  to="/marketing/campaigns"
                  className="flex items-center gap-2"
                >
                  <FolderKanban className="size-4 text-muted-foreground" />
                  Campaigns
                </Link>
              </DropdownMenuItem>
            </>
          ),
        },
      ],
    },
    {
      type: "submenu",
      title: "Settings",
      to: "/settings",
      icon: Settings,
      children: [
        { title: "General", to: "/settings" },
        { title: "Team", to: "/settings/team" },
        { title: "Privacy", to: "/settings/privacy" },
      ],
    },
    {
      type: "submenu",
      title: "Account",
      to: "/account",
      icon: Users,
      children: [
        { title: "Profile", to: "/account/profile" },
        { title: "Security", to: "/account/security" },
        { title: "Billing", to: "/account/billing", isActive: true },
      ],
    },
  ],
  user: {
    name: "Demo User",
    email: "demo@example.com",
  },
};

const meta = {
  title: "Layout/BaseSidebar",
  component: BaseSidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          'Sidebar ตัวกลาง รับ `header` และ `menuItems` (เรียงตาม index) — header แบบ collapsible ต้องส่ง children; แบบลิงก์กดไป to (เช่น "/"). menuItems แยกประเภทด้วย type: collapsible | group | submenu \n\n ติดตั้ง component BaseSidebar ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseSidebar.json\n```',
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof BaseSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

/** ตัวอย่างเต็ม: header แบบ dropdown + menuItems ทุกประเภท (collapsible, group, submenu) */
export const Default: Story = {
  render: (args) => (
    <SidebarProvider>
      <BaseSidebar data={args.data ?? defaultData} />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-semibold">Content area</span>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <p className="text-muted-foreground">
            ใช้ SidebarTrigger เปิด/ปิด sidebar • เมนูเรียงตามลำดับใน menuItems
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
  args: {
    data: defaultData,
  },
};

/** Header แบบลิงก์ธรรมดา (collapsible: false) — กดแล้วไป to ไม่ต้องส่ง children */
export const HeaderLinkOnly: Story = {
  render: (args) => (
    <SidebarProvider>
      <BaseSidebar data={args.data ?? defaultData} />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-semibold">Header ลิงก์เดียว</span>
        </header>
        <div className="p-4">
          <p className="text-muted-foreground">
            header.collapsible = false, header.to = &quot;/&quot; — ไม่ต้องส่ง
            children
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
  args: {
    data: {
      ...defaultData,
      header: {
        title: "Acme Inc.",
        icon: LayoutDashboard,
        to: "/",
        collapsible: false,
      },
      menuItems: defaultData.menuItems,
      user: defaultData.user,
    },
  },
};

/** ไม่มี header — มีแค่ menuItems + user */
export const NoHeader: Story = {
  render: (args) => (
    <SidebarProvider>
      <BaseSidebar data={args.data ?? defaultData} />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <span className="font-semibold">ไม่มี header</span>
        </header>
        <div className="p-4">
          <p className="text-muted-foreground">
            ส่งเฉพาะ menuItems และ user (ไม่ส่ง header)
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
  args: {
    data: {
      menuItems: defaultData.menuItems,
      user: defaultData.user,
    },
  },
};

const sidebarWrapper = (data: DataSidebar, label: string) => (
  <SidebarProvider>
    <BaseSidebar data={data} />
    <SidebarInset>
      <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <span className="font-semibold">{label}</span>
      </header>
      <div className="p-4">
        <p className="text-muted-foreground">{label}</p>
      </div>
    </SidebarInset>
  </SidebarProvider>
);

/** **Collapsible** — เมนูแบบพับเปิด/ปิด กดหัวข้อแล้วแสดงรายการย่อย (children มีแค่ title, to) */
export const TypeCollapsible: Story = {
  render: () =>
    sidebarWrapper(
      {
        menuItems: [
          {
            type: "collapsible",
            title: "Dashboard",
            to: "/",
            icon: LayoutDashboard,
            isActive: true,
            children: [
              { title: "Overview", to: "/" },
              { title: "Analytics", to: "/analytics" },
            ],
          },
          {
            type: "collapsible",
            title: "Projects",
            to: "/projects",
            icon: FolderKanban,
            children: [
              { title: "All", to: "/projects" },
              { title: "Active", to: "/projects/active" },
            ],
          },
        ],
        user: defaultData.user,
      },
      "menuItems type: collapsible — พับเปิด/ปิด รายการย่อยมี title, to",
    ),
  args: {
    data: {
      menuItems: [],
      user: defaultData.user,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Collapsible** — หัวข้อเมนูกดแล้วขยายแสดงรายการย่อย (children). ต้องส่ง `children: { title, to }[]` เสมอ รายการย่อยไม่ต้องส่ง icon. ใช้ `isActive` เพื่อเปิดรายการนั้นตั้งแต่โหลด",
      },
    },
  },
};

/** **Group** — ป้ายกลุ่ม (เช่น Documents) + รายการปุ่มลิงก์ แต่ละรายการมี optional extra (dropdown ปุ่ม More เป็น ReactNode) */
export const TypeGroup: Story = {
  render: () =>
    sidebarWrapper(
      {
        menuItems: [
          {
            type: "group",
            title: "Documents",
            children: [
              {
                title: "Design System",
                to: "/design-system",
                icon: FileText,
                extra: (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/design-system/components"
                        className="flex items-center gap-2"
                      >
                        <FileText className="size-4 text-muted-foreground" />
                        Components
                      </Link>
                    </DropdownMenuItem>
                  </>
                ),
              },
              {
                title: "Marketing",
                to: "/marketing",
                icon: FolderKanban,
                extra: (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/marketing/campaigns"
                        className="flex items-center gap-2"
                      >
                        <FolderKanban className="size-4 text-muted-foreground" />
                        Campaigns
                      </Link>
                    </DropdownMenuItem>
                  </>
                ),
              },
            ],
            showMoreItem: true,
          },
        ],
        user: defaultData.user,
      },
      "menuItems type: group — ป้ายกลุ่ม + รายการปุ่ม (extra = dropdown More)",
    ),
  args: {
    data: {
      menuItems: [],
      user: defaultData.user,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Group** — มีป้ายชื่อกลุ่ม (title) ด้านบน และรายการเป็นปุ่มลิงก์ (title, to, icon?). ถ้ารายการมี `extra` (ReactNode) จะมีปุ่ม More แสดง dropdown. ใช้ `showMoreItem: true` เพื่อแสดงแถว "More" ด้านล่างกลุ่ม (ซ่อนเมื่อ sidebar เป็น icon)',
      },
    },
  },
};

/** **Submenu** — หัวข้อเป็นลิงก์ (to) + รายการย่อยแสดงด้านล่าง (children มี title, to, isActive?) */
export const TypeSubmenu: Story = {
  render: () =>
    sidebarWrapper(
      {
        menuItems: [
          {
            type: "submenu",
            title: "Settings",
            to: "/settings",
            icon: Settings,
            children: [
              { title: "General", to: "/settings" },
              { title: "Team", to: "/settings/team" },
              { title: "Privacy", to: "/settings/privacy" },
            ],
          },
          {
            type: "submenu",
            title: "Account",
            to: "/account",
            icon: Users,
            children: [
              { title: "Profile", to: "/account/profile" },
              { title: "Security", to: "/account/security" },
              { title: "Billing", to: "/account/billing", isActive: true },
            ],
          },
        ],
        user: defaultData.user,
      },
      "menuItems type: submenu — หัวข้อลิงก์ + รายการย่อย (title, to, isActive?)",
    ),
  args: {
    data: {
      menuItems: [],
      user: defaultData.user,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Submenu** — หัวข้อเป็นลิงก์ (มี to) และมีรายการย่อย (children) แสดงด้านล่างเสมอ. children มีแค่ `title`, `to`, `isActive?` (ไม่ส่ง icon ในรายการย่อย). ใช้เมื่อต้องการเมนูหลักที่ลิงก์ได้พร้อมรายการย่อยโผล่ด้านล่าง",
      },
    },
  },
};
