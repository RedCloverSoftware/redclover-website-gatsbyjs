import styled from "styled-components"

export const OuterContainer = styled.section`
  margin-top: 8vw;
  padding: 4em 8em;
  display: flex;
  position: relative;

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: radial-gradient(
    circle,
    rgba(13, 105, 181, 1) 0%,
    rgba(11, 90, 156, 1) 100%
  );

  & > img {
    pointer-events: none;
    position: absolute;
    width: 20%;
  }

  & > img:nth-child(1) {
    left: 0;
    bottom: 50%;
  }

  & > img:nth-child(3) {
    right: 0;
    top: 50%;
  }

  @media screen and (max-width: 1300px) {
    flex-flow: column nowrap !important;
    justify-content: center !important;
    padding: 4rem 2rem !important;

    & h2 {
      text-align: center !important;
    }

    & > img {
      width: 33% !important;
    }
  }
`

export const InnerContainer = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 0 auto;

  @media screen and (max-width: 1025px) {
    width: 90%;
  }
`

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: white;
  font-weight: 400;
  font-size: 46px;
  font-family: "Titan One", sans-serif;
  text-align: center;
  width: 100%;
  z-index: 300;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media screen and (max-width: 1025px) {
    font-size: 48px !important;
    width: 100% !important;
    margin-bottom: 4rem;
  }
`
export const SectionParagraph = styled.p`
  font-size: 18px;
  text-align: left;
`
