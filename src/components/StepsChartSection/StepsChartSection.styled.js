import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const OuterContainer = styled.section`
  background-color: white;
  padding-bottom: 12rem;
  /*background: radial-gradient(circle at 50% 50%, #e9b3da, #e8b1d9, #e6abd6, #e2a3d1, #df9acc, #db90c6, #d788c2, #d582be, #d480bd);*/

  @media screen and (max-width: 1025px) {
    padding: 0 2rem 12rem 2rem !important;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin: 0 auto;

  & > * {
    flex-shrink: 1;
  }

  @media screen and (max-width: 1300px) {
    flex-flow: column nowrap !important;

    & svg {
      min-height: 4rem;
      margin: 2rem 0;
    }
  }
`

export const CentralTextBlock = styled.div`
  flex-basis: 33%;

  & > * {
    color: white;
  }
`

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  width: 100%;

  color: black;
`

export const SectionIntroParagraph = styled.p`
  color: black;
  font-size: 24px;
  width: 77%;
  margin: 4em auto;

  @media screen and (max-width: 1025px) {
    width: 100% !important;
  }
`

export const StyledGatsbyImage = styled(GatsbyImage)`
  width: 4rem;
  margin: 0 auto;
`

export const ProcessItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  & img {
    margin: 0 auto;
    width: 2rem;
  }

  & h3 {
    margin: 2rem 0;
    font-size: 20px;
    font-weight: 900;
  }

  & p {
    margin: 0;
    padding: 0;
  }

  & button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  @media screen and (max-width: 1300px) {
    align-items: center !important;
  }
`

export const ProcessDescriptionWrapper = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > p {
    position: absolute;
    top: 0;
    width: 33vw;
  }
`
