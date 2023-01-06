import styled from "styled-components"

export const HeroSection = styled.div`
  background: linear-gradient(
    180deg,
    #f19abb 0%,
    rgba(255, 46, 193, 0) 221.26%
  );
  border-radius: 0px 0px 10px 10px;
  min-height: 30vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #0b5a9c;
    font-size: 60px;
  }

  @media screen and (max-width: 1066px) {
    min-height: 40vh;
    h1 {
      text-align: center;
      width: 90%;
      font-size: 46px;
    }
  }
`

export const SubServiceSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  padding: 6rem 0;

  & > .gatsby-image-wrapper {
    flex-basis: 30%;
    margin: 0 2rem;
  }

  &:nth-child(even) {
    background-color: #fadbe7;
  }

  &:nth-child(odd) > .gatsby-image-wrapper {
    order: 2;
  }

  @media screen and (max-width: 1066px) {
    & {
      padding: 0 0 4rem 0;
    }

    & > .gatsby-image-wrapper {
      flex-basis: 100%;
      margin: 0 0;
    }

    &:nth-child(odd) > .gatsby-image-wrapper {
      order: 0;
    }
  }
`

export const SubServiceTextBlock = styled.div`
  flex-basis: 40%;
  margin: 0 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1066px) {
    & {
      flex-basis: 92%;
      margin: 0 0;
      align-items: center;
    }

    & > h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 2rem 0;
      text-align: center;
    }

    & > h2 {
      font-size: 46px;
    }
  }
`
