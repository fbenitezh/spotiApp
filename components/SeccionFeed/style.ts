import styled from "styled-components";

export const Body = styled.div`
  display: ${props=>props.className=='grid' ? 'grid' : 'flex'};
  justify-content: space-between;
  overflow-x: auto;
  margin: 20px 0px;
  grid-template-columns: 350px 350px 350px 350px 350px;
  grid-template-rows: auto auto;
  ::-webkit-scrollbar{
    display:none;
  }
`;