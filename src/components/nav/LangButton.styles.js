import styled from "styled-components";

export const LangButtonStyle = styled.button`
  background-color: inherit;
  border: 0;
  padding: .125rem .5rem .125rem 0;
  color: ${props => props.theme.colors.mainLight};
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.m};

  &:hover {
    color: ${props => props.theme.colors.mainActive};
  }

  &:disabled {
    color: ${props => props.theme.colors.mainGray};
    cursor: initial;
  }
`;