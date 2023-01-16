import styled from "styled-components"

export const PrimaryContentContainer = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  & > ul,
  ol {
    width: 50%;
    margin: 0 0;
    transform: translateX(1rem);
  }
  h2 {
    font-size: 30px;
    margin: 1rem 0;
  }
  h3 {
    font-size: 22px;
    margin: 1rem 0;
  }

  @media screen and (max-width: 1066px) {
    width: 82%;
    & > ul,
    ol {
      width: 100%;
      transform: unset;
    }
  }
`
