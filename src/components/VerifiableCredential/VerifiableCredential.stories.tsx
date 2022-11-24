import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VerifiableCredential from "./VerifiableCredential";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/VerifiableCredential",
  component: VerifiableCredential,
} as ComponentMeta<typeof VerifiableCredential>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VerifiableCredential> = (args) => <VerifiableCredential {...args} />;

export const Detailed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Detailed.args = {
  isConstrained: false,
};

export const ListItem = Template.bind({});
ListItem.args = {
  isConstrained: true,
};
