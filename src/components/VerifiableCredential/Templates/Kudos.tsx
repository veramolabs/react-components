import * as React from "react";
import { VerifiableCredential } from "@veramo/core";

export const Kudos = ({ credential } : { credential: VerifiableCredential }) => {

  return <div className="message-embed">
    <div className="embed-content">
      <div className="embed-title description">🏆 Kudos to <a href={credential.credentialSubject.id}>{credential.credentialSubject.name}</a></div>
      <div className="embed-description description">{credential.credentialSubject.kudos}</div>
      <div className="embed-footer"> 
        <img className="footer-icon" src={credential.credentialSubject.authorAvatar} alt="" /> 
        <a href={credential.credentialSubject.authorId}>{credential.credentialSubject.authorName}</a> 
        <span className="divider">•</span> 
        <a href={
            `https://discord.com/channels/${credential.credentialSubject.guildId}/${credential.credentialSubject.channelId}/${credential.id}`
          }>{credential.credentialSubject.channelName}</a> 
        <span className="divider">•</span> 
        <a href={
            `https://discord.com/channels/${credential.credentialSubject.guildId}/${credential.credentialSubject.channelId}/${credential.id}`
          }>{credential.credentialSubject.guildName}</a>
      </div>
    </div>
    <div className="embed-thumbnail">
      <div className={`avatar-large ${!credential.credentialSubject.avatar || credential.credentialSubject.avatar === '' ? 'hidden' : ''}`}> <img src={credential.credentialSubject.avatar} /> </div>
    </div>
  </div>;
};
