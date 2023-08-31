import * as React from "react";
import { VerifiableCredential } from "@veramo/core";

export const Profile = ({ credential } : { credential: VerifiableCredential }) => {
  return <div className="message-embed">
    <div className="embed-content">
      <div className="embed-fields">
      {Object.entries(credential.credentialSubject)
        .map(([key, value]: [string, any]): React.ReactNode => {
          if (key === 'picture' || key === 'id') {
            return null
          } else {
            return<div className="embed-field" key={key}>
            <div className="embed-field-name">{key}</div>
            <div className="embed-field-value">
              {typeof value === 'object' || Array.isArray(value) ? JSON.stringify(value) : value}
            </div>
          </div>
          }
        })}
      </div>
    </div>
    <div className="embed-thumbnail">
      <div className={`avatar-large ${!credential.credentialSubject.picture || credential.credentialSubject.picture === '' ? 'hidden' : ''}`}> <img src={credential.credentialSubject.picture} /> </div>
    </div>

  </div>;
};
