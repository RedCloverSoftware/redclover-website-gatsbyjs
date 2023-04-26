import styled from "styled-components"

export const PrimaryContentContainer = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  li {
    list-style-position: inside;
    background: url("/grn-chk-li-icon.svg") left 8px no-repeat;
    margin: 0;
    list-style: none;
    line-height: 34px;
    padding: 5px 10px 5px 34px;
    font-size: 16px;
  }

  & > ul,
  ol {
    width: 50%;
    margin: 0 0 4rem 0;
  }
  h2 {
    font-size: 30px;
    margin: 1rem 0;
  }
  h3 {
    font-size: 22px;
    margin: 1rem 0;
  }

  p {
    border-left: 4px solid #c86fae;
    padding: 0 1rem;
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
