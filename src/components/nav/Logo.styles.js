import styled from "styled-components";

export const LogoWrapper = styled.div`
  height: 100%;
  padding: 0 1.5rem;
  border-right: 1px solid var(--main-accent-style);

  & > svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;