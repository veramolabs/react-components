import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VerifiableCredential from "./VerifiableCredential";
import KudosCredential from "../../test-vectors/kudos-credential"
import DiscordKudosCredential from "../../test-vectors/discord-kudos-credential"
import ProfileCredential from "../../test-vectors/profile-credential"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/VerifiableCredential",
  component: VerifiableCredential,
} as ComponentMeta<typeof VerifiableCredential>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VerifiableCredential> = (args) => <VerifiableCredential {...args} />;

export const Kudos = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Kudos.args = {
  credential: KudosCredential,
};

export const DiscordKudos = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DiscordKudos.args = {
  credential: DiscordKudosCredential,
};

export const Profile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Profile.args = {
  credential: ProfileCredential,
};
