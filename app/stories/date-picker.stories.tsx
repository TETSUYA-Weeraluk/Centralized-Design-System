import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import {
  BaseDatePicker,
  type BaseDatePickerProps,
  type BaseDatePickerValue,
} from "@/components/custom-ui/BaseDatePicker";

function BaseDatePickerControlled(
  props: Omit<BaseDatePickerProps, "value" | "onValueChange">,
) {
  const { mode, ...rest } = props;
  const [value, setValue] = React.useState<BaseDatePickerValue | undefined>(
    undefined,
  );
  return (
    <BaseDatePicker
      {...rest}
      mode={mode}
      value={value}
      onValueChange={setValue}
    />
  );
}

const meta = {
  title: "UI/DatePicker",
  component: BaseDatePickerControlled,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ติดตั้ง component BaseDatePicker ด้วยคำสั่ง:\n\n```bash\nnpx shadcn@latest add http://192.168.11.53:8080/r/BaseDatePicker.json\n```",
      },
      source: {
        transform: (source: string) =>
          source.replace(/BaseDatePickerControlled/g, "BaseDatePicker"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "range", "multiple"],
      description: "โหมดเลือก: single / range / multiple",
    },
    label: {
      control: "text",
      description: "ข้อความ label",
    },
    placeholder: {
      control: "text",
      description: "ข้อความเมื่อยังไม่เลือก",
    },
    required: {
      control: "boolean",
      description: "กำหนดให้กรอก",
    },
    disabled: {
      control: "boolean",
      description: "ปิดการใช้งาน",
    },
    format: {
      control: "select",
      options: ["PPP", "PP", "P", "yyyy-MM-dd", "dd/MM/yyyy", "MMM d, yyyy"],
      description: "รูปแบบแสดงวันที่ (date-fns format)",
    },
  },
} satisfies Meta<typeof BaseDatePickerControlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "single",
    label: "วันที่",
    placeholder: "เลือกวันที่",
    format: "PPP",
    required: false,
    disabled: false,
  },
};

export const Range: Story = {
  args: {
    mode: "range",
    label: "ช่วงวันที่",
    placeholder: "เลือกช่วงวันที่",
    required: false,
    disabled: false,
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    label: "หลายวันที่",
    placeholder: "เลือกหลายวันที่",
    required: false,
    disabled: false,
  },
};

export const Required: Story = {
  args: {
    mode: "single",
    label: "วันที่ (บังคับ)",
    placeholder: "เลือกวันที่",
    required: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    mode: "single",
    label: "วันที่",
    placeholder: "เลือกวันที่",
    required: false,
    disabled: true,
  },
};

export const WithFormat: Story = {
  args: {
    mode: "single",
    label: "วันที่",
    placeholder: "เลือกวันที่",
    format: "yyyy-MM-dd",
    required: false,
    disabled: false,
  },
};
