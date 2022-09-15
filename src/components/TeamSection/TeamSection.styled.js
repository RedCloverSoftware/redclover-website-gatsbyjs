import styled from "styled-components"
import { PrismicRichText } from "@prismicio/react"

export const OuterContainer = styled.section`
  padding: 10rem 8rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /*background: radial-gradient(circle at 50% 50%, #e9b3da, #e8b1d9, #e6abd6, #e2a3d1, #df9acc, #db90c6, #d788c2, #d582be, #d480bd);*/

  @media screen and (max-width: 1025px) {
    flex-flow: column nowrap !important;
    padding: 4rem 2rem !important;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  width: 50%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 2em 0;
    width: 62%;
  }

  & > p {
    max-width: 100%;
  }

  @media screen and (max-width: 1025px) {
    & > * {
      width: 100% !important;
    }
    width: 100% !important;
  }
`

export const SectionTitle = styled.h2`
  text-align: center;
  width: 50%;

  @media screen and (max-width: 1025px) {
    width: 100% !important;
  }
`
export const SectionIntroParagraph = styled(PrismicRichText)``
