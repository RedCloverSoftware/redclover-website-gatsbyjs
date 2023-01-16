import styled from "styled-components"

const GradientHeroSection = styled.div`
  background: linear-gradient(
    180deg,
    #f19abb 0%,
    rgba(255, 46, 193, 0) 221.26%
  );
  border-radius: 0px 0px 10px 10px;
  min-height: ${({ min_height = "30vh" }) => min_height};

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
      font-size: ${({heading_font_size = "46px"}) => heading_font_size};
    }
  }
`
export default GradientHeroSection
