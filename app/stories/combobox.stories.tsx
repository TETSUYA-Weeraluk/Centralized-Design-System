import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { GlobeIcon } from "lucide-react";
import { BaseCombobox } from "@/components/custom-ui/BaseCombobox";

const defaultItems = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];
const timezoneItems = [
  "Asia/Bangkok",
  "Asia/Tokyo",
  "America/New_York",
  "Europe/London",
  "UTC",
];

function BaseComboboxControlled(
  props: Omit<React.ComponentProps<typeof BaseCombobox>, "value" | "onValueChange"> & {
    defaultValue?: string[] | string;
  }
) {
  const { defaultValue, multiple, ...rest } = props;
  const [value, setValue] = React.useState<string[] | string>(
    defaultValue ?? (multiple ? [] : "")
  );
  return (
    <BaseCombobox
      {...rest}
      multiple={multiple}
      value={value}
      onValueChange={(v) => setValue(multiple ? v : v[0] ?? "")}
    />
  );
}

const meta = {
  title: "UI/Combobox",
  component: BaseComboboxControlled,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseCombobox ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseCombobox.json\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "รายการตัวเลือก",
    },
    multiple: {
      control: "boolean",
      description: "เลือกได้หลายค่า",
    },
    showClear: {
      control: "boolean",
      description: "แสดงปุ่มล้างค่า",
    },
    disabled: {
      control: "boolean",
      description: "ปิดการใช้งาน",
    },
    autoHighlight: {
      control: "boolean",
      description: "ไฮไลต์รายการแรกเมื่อเปิด/กรอง",
    },
  },
} satisfies Meta<typeof BaseComboboxControlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: defaultItems,
    multiple: false,
    showClear: false,
    disabled: false,
    autoHighlight: false,
  },
};

export const WithIcon: Story = {
  args: {
    items: timezoneItems,
    multiple: false,
    showClear: true,
    disabled: false,
    autoHighlight: true,
    icon: <GlobeIcon className="size-4" />,
  },
};

export const Multiple: Story = {
  args: {
    items: defaultItems,
    multiple: true,
    showClear: false,
    disabled: false,
    autoHighlight: true,
  },
};

export const WithClearButton: Story = {
  args: {
    items: defaultItems,
    multiple: false,
    showClear: true,
    disabled: false,
    autoHighlight: false,
  },
};

export const Disabled: Story = {
  args: {
    items: defaultItems,
    multiple: false,
    showClear: false,
    disabled: true,
    autoHighlight: false,
  },
};

export const AutoHighlight: Story = {
  args: {
    items: defaultItems,
    multiple: false,
    showClear: false,
    disabled: false,
    autoHighlight: true,
  },
};
