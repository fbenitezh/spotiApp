import styled from "styled-components";

export const Card = styled.div`
  width: 270px;
  height: 270px;
  background-color: ${props=>props.theme.colors.secondary};
  padding: 15px 20px 0px 20px;
  margin: 0px 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .8s ease;
  position: relative;
  &:hover{
    background-color: ${props=>props.theme.colors.gray};
  }
  >button{
    width: 35px;
    height: 35px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 100%;
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
  height: 65%;
  >img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  margin: 20px 0px 0px 0px;
  >h3{
    font-weight: 600;
  }
`;