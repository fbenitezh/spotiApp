import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 80px;
  margin: 10px 0px;
  background-color: ${props=>props.theme.colors.secondary};
  border-radius: 5px;
  cursor: pointer;
  transition: all .8s ease;
  position: relative;
  display: flex;
  align-items: center;
  &:hover{
    background-color: ${props=>props.theme.colors.gray};
  }
  >button{
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin: 0px 10px 0px auto;
    background-color: ${props=>props.theme.colors.discord};
    border: none;
    cursor: pointer;
    color: white;
    display: none;
    transition: all .8s ease;
    &.show{
      display: block;
    }
  }
`;

export const FotoContainer = styled.div`
  height: 100%;
  >div>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  margin: 0px 0px 0px 15px;
  >h3{
    font-weight: 600;
  }
`;