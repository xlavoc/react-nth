import styled from "styled-components";

export const UserPanelWrapper = styled.div`
  position: relative;
  padding: 0 1.5rem;
  background-color: ${props => props.theme.colors.mainDark};

  &:hover > div > svg {
    transform: rotate(180deg);
  }

  &:hover > div > div > svg {
    fill: ${props => props.theme.colors.mainActive};
  }

  &:hover > div:last-of-type {
    visibility: visible;
    transform: translateY(0);
  }
`;

export const UserWrapper = styled.div`
  height: 3.375rem;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.mainAccent};
  
  & > svg {
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${props => props.theme.colors.mainLight};
    transition: fill .2s ease-in-out;
  }
`;

export const UserName = styled.div`
  margin: 0 .5rem 0 1rem;
  font-size: ${props => props.theme.fontSize.l};
`;

export const UserDropdownPanel = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 3.375rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  background-color: ${props => props.theme.colors.mainDark};
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  z-index: -1;
  transform: translateY(-100%);
  transition: visibility .3s, transform .3s ease-out;
`;

export const LangWrapper = styled.div`
  padding: .125rem 0 .125rem 1.5rem;
`;

export const Line = styled.span`
  color: ${props => props.theme.colors.mainAccent};
`;