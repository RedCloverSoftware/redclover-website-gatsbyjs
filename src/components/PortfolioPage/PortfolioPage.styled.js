import styled from "styled-components"

export const PortfolioGallery = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  a {
    text-decoration: none;
  }

  & .marvel-device {
    transform: scale(0.6);
    transition: transform 0.3s;
  }
  & .marvel-device:hover {
    transform: scale(0.8);
  }

  & hovered > div > div {
    display: block;
  }

  @media screen and (max-width: 1280px) {
    flex-flow: column nowrap;
    & .marvel-device {
      transform: scale(0.8);
      transition: transform 0.3s;
    }
    & .marvel-device:hover {
      transform: scale(0.8);
    }
  }
`

export const PortfolioItemSummary = styled.div`
  position: relative;

  p {
    text-decoration: none;
  }

  @media screen and (max-width: 1066px) {
    & > div {
      display: block;
      width: 80%;
      margin: 0 auto;
      transform: translateY(-3rem);
    }
  }

  @media screen and (min-width: 1067px) {
    & > div {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      transform: translateY(-25%);
      display: ${({ is_hovered = false }) => (is_hovered ? "block" : "none")};
    }
  }
`

export const PortfolioFeatured = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 48px;
  }

  margin: 4rem 0;

  & > .featured-summary,
  .gatsby-image-wrapper {
    width: 32%;
  }

  @media screen and (max-width: 1066px) {
    align-items: space-around;
    margin: 2rem 0;

    & > .featured-summary,
    .gatsby-image-wrapper {
      width: 88%;
      margin: 2rem 0;
    }
  }
`
