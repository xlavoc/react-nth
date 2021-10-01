import styled from "styled-components";

export const ItemLink = styled.a`
  padding: .25rem 1rem .25rem 1.5rem;
  margin: .125rem 0;
  //line-height: 1.5rem;
  text-decoration: none;
  color: var(--main-light-style);
  font-size: .8125rem;

  &:hover {
    background-color: var(--pale);
    color: var(--main-dark-style);
  }
`;