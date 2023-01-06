import styled from "styled-components"

import {
  OuterContainer,
  TextContentBlock,
} from "../UniversalComponents/UniversalComponents.styled.js"

export const HeroOuterContainer = styled(OuterContainer)`
  & #device-mockups {
    transform: scale(0.7);
  }

  & #device-mockups .screen > div {
    position: relative;

    width: 100%;
    height: 100%;

    overflow-x: hidden;
  }

  & #device-mockups .screen > div > img {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: fit-content;

    object-fit: cover;
    object-position: 0%;

    filter: blur(0.033rem);
    transition: object-position 0.5s;
  }

  @media screen and (max-width: 1025px) {
    #device-mockups {
      display: none !important;
    }
  }

  @media screen and (min-width: 1026px) {
    position: relative;

    background-size: contain !important;
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;

    &:before {
      content: " ";
      display: block;
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      z-index: -1;

      background: url(/hero-background2.svg) no-repeat top right;
      opacity: 0.6;
    }
  }
`

export const HeroTextContentBlock = styled(TextContentBlock)`
  & h1 {
    width: fit-content;
    color: #671955;
    text-align: left;
    font-weight: 400;
    margin-bottom: 4rem;
  }

  & p {
    width: 70%;
  }

  @media screen and (max-width: 1025px) {
    & h1 {
      text-align: center;
    }
    & p {
      padding-bottom: 3rem;
    }
  }

  @media screen and (min-width: 1026px) {
    & a {
      display: none !important;
    }
  }
`
