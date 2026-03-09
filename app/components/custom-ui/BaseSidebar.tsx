import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/** สร้างอักษรนำจากชื่อ (เช่น "John Doe" -> "JD") */
function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** ส่วนหัว sidebar: collapsible=true ต้องส่ง children เสมอ; collapsible=false ไม่ต้องส่ง children และกดแล้ว navigate ไป to (เช่น "/") */
function BaseSidebarHeader({
  title,
  icon: Icon,
  to = "/",
  collapsible,
  children,
}: {
  title: string;
  icon?: LucideIcon;
  /** ใช้เมื่อ collapsible === false — กดแล้ว navigate ไป path นี้ (default "/") */
  to?: string;
  /** true = dropdown โดยส่ง children เป็นเนื้อหา (children จำเป็น); false = ลิงก์ธรรมดา ไม่ต้องส่ง children */
  collapsible?: boolean;
  /** จำเป็นเมื่อ collapsible === true */
  children?: React.ReactNode;
}) {
  const { isMobile } = useSidebar();

  if (collapsible) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {Icon && <Icon className="size-4" />}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{title}</span>
                </div>
                <Icons.ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              {children}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="data-[slot=sidebar-menu-button]:p-1.5!"
        >
          <Link to={to}>
            {Icon && <Icon className="size-5!" />}
            <span className="text-base font-semibold">{title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

/** เมนูแบบ Collapsible — ต้องส่ง children (รายการย่อย) เสมอ แต่ละรายการมี title, to เท่านั้น */
function BaseSidebarItemCollapsible({
  items,
}: {
  items: {
    title: string;
    to: string;
    icon?: LucideIcon;
    isActive?: boolean;
    children: { title: string; to: string }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <Icons.ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.children.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.to}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

/** เมนูแบบ group (สไตล์ Documents) — ป้ายกลุ่ม + รายการปุ่มลิงก์ ถ้ามี extra จะมี dropdown ปุ่ม More */
function BaseSidebarItemGroup({
  title: groupLabel,
  items,
}: {
  items: {
    title: string;
    to: string;
    icon?: LucideIcon;
    /** เนื้อหา dropdown ปุ่ม More — รับเป็น ReactNode (children) */
    extra?: React.ReactNode;
  }[];
  /** ป้ายชื่อกลุ่ม (เช่น "Documents") */
  title?: string;
  /** แสดงรายการ "More" ด้านล่าง */
  showMoreItem?: boolean;
}) {
  const { isMobile } = useSidebar();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      {groupLabel && <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <Link to={item.to}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
            {item.extra != null ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction
                    showOnHover
                    className="rounded-sm data-[state=open]:bg-accent"
                  >
                    <Icons.MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  {item.extra}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}) {
  const { isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <Icons.ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <Icons.LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

/** เมนูแบบ submenu — หัวข้อมีลิงก์ + รายการย่อย (children มีแค่ title, to) */
function BaseSidebarItemSubmenu({
  items,
}: {
  items: {
    title: string;
    to: string;
    isActive?: boolean;
    icon?: LucideIcon;
    children: { title: string; to: string; isActive?: boolean }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link to={item.to} className="font-medium">
                {item.icon && <item.icon />}
                {item.title}
              </Link>
            </SidebarMenuButton>
            <SidebarMenuSub>
              {item.children.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                    <Link to={subItem.to}>
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

/** รายการย่อยของ collapsible/group — มีแค่ title กับ to (ไม่ส่ง icon) */
export type BaseSidebarChildItem = {
  title: string;
  to: string;
  isActive?: boolean;
};

/** เมนูแบบ collapsible — ต้องส่ง children เสมอ */
export type DataSidebarItemCollapsible = {
  type: "collapsible";
  title: string;
  to: string;
  icon?: LucideIcon;
  isActive?: boolean;
  children: { title: string; to: string }[];
};

/** เมนูแบบ group (สไตล์ Documents) — ป้ายกลุ่ม + รายการปุ่ม ถ้ามี extra จะมี dropdown */
export type DataSidebarItemGroup = {
  type: "group";
  title: string;
  to?: string;
  icon?: LucideIcon;
  children: {
    title: string;
    to: string;
    icon?: LucideIcon;
    /** เนื้อหา dropdown ปุ่ม More — รับเป็น ReactNode (children) */
    extra?: React.ReactNode;
  }[];
  showMoreItem?: boolean;
};

/** เมนูแบบ submenu — หัวข้อมีลิงก์ + รายการย่อย */
export type DataSidebarItemSubmenu = {
  type: "submenu";
  title: string;
  to: string;
  icon?: LucideIcon;
  isActive?: boolean;
  children: BaseSidebarChildItem[];
};

export type DataSidebarMenuItem =
  | DataSidebarItemCollapsible
  | DataSidebarItemGroup
  | DataSidebarItemSubmenu;

/** ส่วนหัว: collapsible=true ต้องส่ง children; collapsible=false ไม่ต้องส่ง children กดแล้วไป to (เช่น "/") */
export interface DataSidebarHeader {
  title: string;
  icon?: LucideIcon;
  /** ใช้เมื่อ collapsible === false สำหรับ navigate (default "/") */
  to?: string;
  /** true = dropdown โดยส่ง children (จำเป็น); false = ลิงก์ธรรมดา */
  collapsible?: boolean;
  /** จำเป็นเมื่อ collapsible === true */
  children?: React.ReactNode;
}

/** โครงสร้างข้อมูลสำหรับ BaseSidebar — รับ header และ menuItems (เรียงตาม index) */
export interface DataSidebar {
  header?: DataSidebarHeader;
  /** เมนูเรียงตามลำดับใน array — แยกประเภทด้วย type: collapsible | group | submenu */
  menuItems: DataSidebarMenuItem[];
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export type IBaseSidebarProps = Omit<
  React.ComponentProps<typeof Sidebar>,
  "children"
> & {
  data: DataSidebar;
};

const BaseSidebar = ({ data, ...sidebarProps }: IBaseSidebarProps) => {
  const { header, menuItems = [], user } = data;

  return (
    <Sidebar collapsible="icon" {...sidebarProps}>
      {header && (
        <SidebarHeader>
          <BaseSidebarHeader
            title={header.title}
            icon={header.icon}
            to={header.to ?? "/"}
            collapsible={header.collapsible}
          >
            {header.collapsible ? header.children : undefined}
          </BaseSidebarHeader>
        </SidebarHeader>
      )}
      <SidebarContent className="overflow-y-auto [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:display-none">
        {menuItems.map((item, index) => {
          if (item.type === "collapsible") {
            return (
              <BaseSidebarItemCollapsible
                key={`${item.type}-${index}-${item.title}`}
                items={[item]}
              />
            );
          }
          if (item.type === "group") {
            return (
              <BaseSidebarItemGroup
                key={`${item.type}-${index}-${item.title}`}
                items={item.children}
                title={item.title}
                showMoreItem={item.showMoreItem}
              />
            );
          }
          if (item.type === "submenu") {
            return (
              <BaseSidebarItemSubmenu
                key={`${item.type}-${index}-${item.title}`}
                items={[item]}
              />
            );
          }
          return null;
        })}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default BaseSidebar;
