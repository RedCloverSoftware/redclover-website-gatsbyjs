import React from "react"

import { Logo } from "./SocialIconLink.styled.js"

const SocialIconLink = props => {
  return (
    <Logo>
      <a href={"https://" + props.social.serviceurl + props.social.account}>
        <img
          alt={props.social.name + "'s " + props.social.service}
          width="75px"
          src={props.social.iconimgsrc}
        />
      </a>
    </Logo>
  )
}

export default SocialIconLink
