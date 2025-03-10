import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { primary: { control: "boolean" } },
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: { primary: true, label: "Primary Button" },
};

export const Secondary: StoryObj<typeof Button> = {
  args: { primary: false, label: "Secondary Button" },
};
