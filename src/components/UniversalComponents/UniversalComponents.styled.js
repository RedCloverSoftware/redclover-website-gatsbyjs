import styled from "styled-components"

export const OuterContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1025px) {
    padding: 4rem 0;

    justify-content: center;
    align-items: center;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 1025px) {
    width: 90%;
  }

  @media screen and (min-width: 1025px) {
    width: 50%;
  }
`

export const TextContentBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & > * {
    flex-grow: 0;
    flex-shrink: 1;
  }

  @media screen and (max-width: 1025px) {
    width: 90%;

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      text-align: center;
    }

    & p {
      width: 100% !important;
      padding-bottom: 3rem;
    }
  }

  @media screen and (min-width: 1026px) {
    width: 50%;
  }
`

export const PagePrimaryHeading = styled.h1``

export const SectionPrimaryHeading = styled.h2``

export const SectionSecondaryHeading = styled.h3``
