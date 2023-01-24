import * as React from "react";
import { VerifiableCredential } from "@veramo/core";

export const Generic = ({ credential } : { credential: VerifiableCredential }) => {
  return <div className="message-embed">
    <div className="embed-content">
      <div className="embed-title description">{(credential.type as string[]).join(', ')}</div>
      <div className="embed-fields">
      {Object.entries(credential.credentialSubject)
        .map(([key, value]: [string, any]): React.ReactNode => 
        <div className="embed-field" key={key}>
          <div className="embed-field-name">{key}</div>
          <div className="embed-field-value">
            {typeof value === 'object' || Array.isArray(value) ? JSON.stringify(value) : value}
          </div>
        </div>
      )}
      </div>
    </div>
  </div>;
};
