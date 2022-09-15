import styled from "styled-components"

export const OuterContainer = styled.section`
  background-image: url(/blue-bg-tri.svg), url(/pink-bg-tri.svg);

  background-position: top right, bottom left;

  background-repeat: no-repeat;

  background-size: 40rem;
`

export const InnerContainer = styled.div`
  padding: 8rem 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & h2 {
    color: #671955;
  }

  & div > h2:nth-child(1) {
    transform: translateX(-25%);
  }

  & > div {
    flex: 0 0 50%;
  }

  & > #aboutus-section-body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  & > #aboutus-section-body h2 {
    width: 100%;
  }

  & > #aboutus-section-body p {
    width: 100%;
    margin-bottom: 4rem;
    font-size: 18px;
  }

  & img {
    display: block;
    object-fit: cover;
    width: 100%;
    margin: 0 auto;
    clip-path: circle(35% at 50% 50%);
  }

  @media screen and (max-width: 1300px) {
    padding: 4rem 0;
    flex-flow: column nowrap !important;
    align-items: center !important;

    & div > h2:nth-child(1) {
      transform: translateX(0) !important;
    }

    & > div {
      width: 90%;
      flex: 0 0 80% !important;
    }
  }
`
