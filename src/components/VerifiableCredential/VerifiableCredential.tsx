import * as React from "react";
import { VerifiableCredential as VCred} from "@veramo/core";
import { Kudos } from './Templates/Kudos';
import { Generic } from './Templates/Generic';
import "./VerifiableCredential.css"

const VerifiableCredential = ({ credential } : { credential: VCred }) => {
  if (credential.type?.includes('Kudos')) {
    return <Kudos credential={credential} />;
  }

  return <Generic credential={credential} />;
};

export default VerifiableCredential;