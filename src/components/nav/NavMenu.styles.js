import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const MenuItem = styled.a`
  padding: 0 1rem;
  color: var(--main-light-style);
  line-height: 3.375rem;
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    background-color: var(--main-accent-style);
  }
`;