import styled from "styled-components";

export const UserAreaWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const IconWrapper = styled.a`
  height: 100%;
  padding: 0 1.5rem;
  border: 1px solid var(--main-accent-style);
  border-top: none;
  border-bottom: none;

  & > svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    fill: var(--main-light-style);
    transition: fill .2s ease-in-out;
  }

  &:hover > svg {
    fill: var(--main-active-style);
  }
`;