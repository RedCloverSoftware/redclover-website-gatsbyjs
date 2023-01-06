import styled from "styled-components"

export const OuterContainer = styled.div`
  background-color: white;
`

export const InnerContainer = styled.div`
  background-color: white;
  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: center;

  padding: 1em 2em;
  min-height: 40rem;

  & .gatsby-image-wrapper {
    object-fit: contain !important;
    margin: 2rem 0;
  }

  & .gatsby-image-wrapper img {
    height: 5rem;
    max-height: 5rem;
    object-fit: contain !important;
  }

  & h3 {
    text-align: center;
    font-size: 30px;
    margin: 1rem 0;
    min-height: 4rem;
  }

  & p {
    min-height: 12rem;
  }
`
