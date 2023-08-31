import * as React from "react";
import { VerifiableCredential as VCred} from "@veramo/core";
import { Kudos } from './Templates/Kudos';
import { DiscordKudos } from './Templates/DiscordKudos';
import { Generic } from './Templates/Generic';
import { Profile } from './Templates/Profile';
import "./VerifiableCredential.css"

const VerifiableCredential = ({ credential } : { credential: VCred }) => {
  if (credential.type?.includes('Kudos')) {
    return <Kudos credential={credential} />;
  }

  if (credential.type?.includes('Profile')) {
    return <Profile credential={credential} />;
  }

  if (credential.type?.includes('DiscordKudos')) {
    return <DiscordKudos credential={credential} />;
  }

  return <Generic credential={credential} />;
};

export default VerifiableCredential;