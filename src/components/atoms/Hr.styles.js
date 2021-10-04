import styled from "styled-components";

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: ${props => props.theme.colors.mainAccent};
  margin: .25rem 0;
`;