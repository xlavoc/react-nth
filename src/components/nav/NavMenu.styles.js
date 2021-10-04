import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const MenuItem = styled(NavLink)`
  padding: 0 1rem;
  color: ${props => props.theme.colors.mainLight};
  line-height: 3.375rem;
  font-weight: 700;
  font-size: ${props => props.theme.fontSize.m};
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover, &.active {
    background-color: ${props => props.theme.colors.mainAccent};
  }
`;