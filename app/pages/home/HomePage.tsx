import React from "react";
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
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";

const sidebarData: DataSidebar = {
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
      type: "collapsible",
      title: "Dashboard",
      to: "/",
      icon: LayoutDashboard,
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
      type: "submenu",
      title: "Settings",
      to: "/settings",
      icon: Settings,
      children: [
        { title: "General", to: "/settings/general" },
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
        { title: "Billing", to: "/account/billing" },
      ],
    },
  ],
  user: {
    name: "Demo User",
    email: "demo@example.com",
  },
};

export type MainLayoutProps = {
  /** ชื่อแสดงใน header (default: "Home") */
  title?: string;
  /** เนื้อหาหน้า — ใส่เป็น children */
  children: React.ReactNode;
};

const MainLayout = ({ title = "Home", children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <BaseSidebar data={sidebarData} />
      <SidebarInset className="flex flex-col min-h-0">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-semibold">{title}</span>
        </header>
        <div className="flex flex-1 flex-col gap-4 overflow-auto p-4 min-h-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
