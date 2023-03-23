import * as React from "react";
import { VerifiableCredential } from "@veramo/core";

export const DiscordKudos = ({ credential } : { credential: VerifiableCredential }) => {

  return <div className="message-embed">
    <div className="embed-content">
      <div className="embed-title description">🏆 Kudos to <a href={credential.credentialSubject.discordUserId}>{credential.credentialSubject.discordUserName}</a></div>
      <div className="embed-description description">{credential.credentialSubject.kudos}</div>
      <div className="embed-footer"> 
        <img className="footer-icon" src={credential.credentialSubject.discordAuthorAvatar} alt="" /> 
        <a href={credential.credentialSubject.discordAuthorId}>{credential.credentialSubject.discordAuthorName}</a> 
        <span className="divider">•</span> 
        <a href={
            `https://discord.com/channels/${credential.credentialSubject.discordGuildId}/${credential.credentialSubject.discordChannelId}/${credential.id}`
          }>{credential.credentialSubject.discordChannelName}</a> 
        <span className="divider">•</span> 
        <a href={
            `https://discord.com/channels/${credential.credentialSubject.discordGuildId}/${credential.credentialSubject.discordChannelId}/${credential.id}`
          }>{credential.credentialSubject.discordGuildName}</a>
      </div>
    </div>
    <div className="embed-thumbnail">
      <div className={`avatar-large ${!credential.credentialSubject.discordUserAvatar || credential.credentialSubject.discordUserAvatar === '' ? 'hidden' : ''}`}> <img src={credential.credentialSubject.discordUserAvatar} /> </div>
    </div>
  </div>;
};
