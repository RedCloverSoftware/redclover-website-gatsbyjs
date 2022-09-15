import React from "react"

//import TeamMember from "./TeamMember"

import {
  OuterContainer,
  InnerContainer,
  SectionTitle,
  SectionIntroParagraph,
} from "./TeamSection.styled.js"

const TeamSection = props => {
  return (
    <OuterContainer id="about-us">
      <SectionTitle>{props.primary_heading}</SectionTitle>
      <InnerContainer>
        <SectionIntroParagraph field={props.primary_paragraph} />

        {/* Currently not in use
                props.teammembers.map((currentTeamMember, i) => <TeamMember teammember={currentTeamMember} key={i} />)
                */}
      </InnerContainer>
    </OuterContainer>
  )
}

export default TeamSection
