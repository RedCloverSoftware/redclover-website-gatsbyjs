import React from "react"
import styled from "styled-components"

{
  /* DEPRECATED COMPONENT */
}
{
  /* This component makes use of a prop in styles, prop not being passed when exported to separate module */
}

const OuterContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  align-items: center;

  & > img {
    width: 50%;
    object-fit: cover;
    margin: 0;
    align-self: stretch;
  }

  @media screen and (max-width: 1339px) {
    height: unset !important;

    & > img {
      width: 100% !important;
      height: 22rem;
    }
  }

  @media screen and (max-width: 1400px) and (orientation: landscape) {
    height: unset !important;

    & > img {
      width: 100% !important;
      height: 22rem;
    }
  }
`

const InnerImageContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  height: 100%;
`

const InnerTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  background: ${props => props.gradient || ""};

  & h2 {
    text-align: center;
    font-family: "Dosis", sans-serif;
  }

  & p {
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    color: black;
  }

  @media screen and (min-width: 1026px) {
    padding: 8em 6em;
    flex: 1 1 50%;
  }

  @media screen and (max-width: 1025px) {
    min-height: 33rem;
    padding: 2rem;
    flex: 1 1 100%;
  }
`

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 900;

  font-family: "Dosis", sans-serif;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 1200px) {
    & {
      font-size: 72px !important;
    }
  }
`

const SplitTextGallerySection = props => {
  return (
    <OuterContainer>
      {props.imageleft ? (
        <img alt="" src={props.featured_image.url} />
      ) : (
        <InnerTextContainer gradient={props.gradient}>
          <SectionTitle>{props.primary_heading}</SectionTitle>
          <p>{props.primary_paragraph}</p>
          <br />
        </InnerTextContainer>
      )}

      {props.imageleft ? (
        <InnerTextContainer gradient={props.gradient}>
          <SectionTitle>{props.primary_heading}</SectionTitle>
          <p>{props.primary_paragraph}</p>
          <br />
        </InnerTextContainer>
      ) : (
        <img alt="" src={props.featured_image.url} />
      )}
    </OuterContainer>
  )
}

export default SplitTextGallerySection
