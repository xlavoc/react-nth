import styled from "styled-components";

export const NavWrapper =  styled.nav`
  height: 3.375rem;
  position: sticky;
  top: 25rem;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.mainDark};
  color: ${props => props.theme.colors.mainLight};
`;