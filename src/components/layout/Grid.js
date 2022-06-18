import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  width: calc(100vw - 354px);
  padding: 24px;
  overflow-y: scroll;
  
  justify-items: stretch;
  align-items: stretch;
  justify-content: space-evenly;
  align-content: start;
`;

export const Row = styled.div`
  
`;

export const Col = styled.div`
  
`;
