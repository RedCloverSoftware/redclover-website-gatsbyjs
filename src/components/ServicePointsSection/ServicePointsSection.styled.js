import styled from "styled-components"

export const OuterContainer = styled.section`
  padding: 10rem 0;
  background: radial-gradient(
    circle,
    rgba(13, 105, 181, 1) 0%,
    rgba(11, 90, 156, 1) 100%
  );

  @media screen and (max-width: 1025px) {
    padding: 2rem !important;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap !important;
    & > * {
      flex: 0 0 88vw;
      width: 88vw;
      margin: 2em 0;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1339px) {
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap !important;
    & > * {
      flex: 0 0 60vw;
      width: 60vw;
      margin: 2em 0;
    }
  }

  @media only screen and (min-width: 1340px) {
    justify-content: space-around;
    & > * {
      flex: 0 0 24vw;
      width: 22vw;
      margin: 2em 0;
    }
  }
`

export const SectionTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: left;
  width: 90%;
  margin: 0 auto;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media screen and (max-width: 1340px) {
    text-align: center;
  }
`
