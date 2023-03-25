import styled from "styled-components"

export const OuterContainer = styled.footer`
  z-index: -1;
  padding: 1em;

  border-top: 4px solid #1a711b;

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
`

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & p {
    margin: 0;
    text-align: center;
  }
`
