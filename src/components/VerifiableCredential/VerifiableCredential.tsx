import React from "react";
import "./VerifiableCredential.css";

export interface VerifiableCredentialProps {
  isConstrained?: boolean;
}

const VerifiableCredential = (props: VerifiableCredentialProps) => {
  if (props.isConstrained) {
    return <span>Verifiable Credential</span>
  }
  return <h1>Verifiable Credential</h1>;
};

export default VerifiableCredential;