import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px auto 240px;
  grid-template-rows: auto 90px;
  grid-template-areas: 
  'MEN FD SB'
  'BR BR BR';
  height: 100vh;
`;

export const Children = styled.div`
  grid-area: FD;
`;