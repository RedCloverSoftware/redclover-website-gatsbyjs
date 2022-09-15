import React from "react"

import SocialIconLink from "../SocialIconLink/SocialIconLink"

import {
  OuterContainer,
  InnerContainer,
  SocialLinksContainer,
} from "./TeamMember.styled.js"

const TeamMember = props => {
  return (
    <OuterContainer>
      <InnerContainer>
        <img
          alt={props.teammember.name}
          width="75px"
          src={props.teammember.imgsrc}
        />
        <h2>{props.teammember.name}</h2>
        <span>{props.teammember.title}</span>

        <br />
        <SocialLinksContainer>
          {props.teammember.socials.map((currentSocial, i) => (
            <SocialIconLink social={currentSocial} key={i} />
          ))}
        </SocialLinksContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export default TeamMember
