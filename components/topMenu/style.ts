import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const Navigation = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  >svg{
    background-color: ${props=>props.theme.colors.secondary};
    padding: 10px;
    margin: 0px 10px;
    border-radius: 100%;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const DropdownList = styled.div`
  background-color: ${props=>props.theme.colors.secondary};
  margin-top: 8px;
  border-radius: 10px;
  padding: 5px 5px;
  position: absolute;
  right: 30px;
  top: 70px;
  width: 187px;
  display: none;
  >p{
    border-radius: 2px;
    padding: 10px 7px;
    margin:8px 0px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
      background-color: ${props=>props.theme.colors.symbol};
    }
  }
  &.show{
    display: block;
  }
`;

export const PrincipalButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color:${props=>props.theme.colors.secondary};
  border:none;
  border-radius: 15px;
  cursor: pointer;
  >img{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 15px;
  }
  >p,>svg{
    margin: 0px 5px;
    color: ${props=>props.theme.colors.white};
  }
  >p{
    font-size: 16px;
    font-weight: 600;
  }
`;