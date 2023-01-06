import styled from "styled-components"

const CTAButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    width: 20rem;
    line-height: 5rem;
    transition: color 0.25s, background-image 0.25s;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    font-family: "Titan One", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    color: white;

    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;

    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(/btn.png);
  }

  & a:hover {
    color: #e9b3da;
    background-image: url(/btn-hov.png) !important;
  }
`

export default CTAButton
