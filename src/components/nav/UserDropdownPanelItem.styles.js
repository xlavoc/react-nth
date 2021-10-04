import styled from "styled-components";

export const ItemLink = styled.a`
  padding: .25rem 1rem .25rem 1.5rem;
  margin: .125rem 0;
  text-decoration: none;
  color: ${props => props.theme.colors.mainLight};
  font-size: ${props => props.theme.fontSize.m};

  &:hover {
    background-color: ${props => props.theme.colors.bgSelect};
    color: ${props => props.theme.colors.mainDark};
  }
`;