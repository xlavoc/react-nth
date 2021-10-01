import styled from "styled-components";

export const LangButtonStyle = styled.button`
  background-color: inherit;
  border: 0;
  padding: .125rem .5rem .125rem 0;
  color: var(--main-light-style);
  cursor: pointer;

  &:disabled {
    color: var(--blue-grey);
    cursor: initial;
  }
`;