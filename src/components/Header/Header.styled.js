import styled from "styled-components"

export const HeaderOuterWrapper = styled.div`
  width: 100%;
  z-index: 600;
  position: static;

  @media screen and (max-width: 1452px) {
    & {
      position: sticky !important;
      top: 0;
      left: 0;
    }
  }
`

export const MobileHeaderContainer = styled.header`
  @media screen and (max-width: 1299px) {
    & {
      display: flex !important;
    }
  }
  z-index: 600;
  display: none;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    90deg,
    #bb569f,
    #bf5ca3,
    #c262a8,
    #c668ac,
    #c96eb0,
    #cd74b4,
    #d07ab9,
    #d480bd
  );
  padding: 0 10vw;
  border-bottom: 4px solid #1a711b;

  & button {
    background-color: transparent;
    border: none;
  }
`

export const MobileMenu = styled.nav`
  background: radial-gradient(
    circle at 50% 50%,
    #81d662,
    #83d764,
    #88d96b,
    #8fdc73,
    #96e07c,
    #9de384,
    #a2e58a,
    #a4e68c
  );

  opacity: 0;
  visibility: hidden;
  display: none;

  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 100vw;

  transition: left 0.5s;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  & button {
    margin-top: 14vh;
    background-color: transparent;
    border: none;
  }

  &.make-menu-open {
    left: 0vw !important;
    opacity: 1 !important;
    visibility: visible !important;
    display: flex !important;
  }

  &.make-menu-close {
    left: 100vw !important;
    opacity: 1 !important;
    visibility: visible !important;
    display: flex !important;
  }
`

export const MobileMenuLinks = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  & a {
    font-size: 32px;
    font-weight: 500;
    margin: 2rem 0;
    color: #bb569f;
  }
`

export const DesktopHeaderContainer = styled.header`
  z-index: 600;
  display: none;

  @media screen and (min-width: 1300px) {
    & {
      display: flex !important;
    }
  }
`

export const HeaderInnerContainer = styled.div`
  @media screen and (min-width: 1300px) {
    & {
      width: 94%;
    }
  }

  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;
`

export const HeaderLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  & a {
    margin: 0 1rem;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
`
