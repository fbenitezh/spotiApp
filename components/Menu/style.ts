import styled from "styled-components";

export const Container = styled.nav`
  grid-area: MEN;
  background-color: ${props=>props.theme.colors.secondary};
`;

export const Navbar = styled.div`
  margin: 20px 10px;
  >h4{
    color: ${props=>props.theme.colors.symbol};
    margin-top: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }
  >a{
    color: ${props=>props.theme.colors.symbol};
    font-weight: 600;
    margin: 15px 0px;
    display: block;
    line-height: 25px;
    text-decoration: none;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 9px;
  margin: 15px 0px;
  transition: all .5s ease;
  cursor: pointer;
  >p{
    color: ${props=>props.theme.colors.symbol};
    font-weight: 600;
    margin: 0;
  }
  &.active, &:hover{
    background-color: ${props=>props.theme.colors.primary};
    border-radius: 10px;
    >p,svg{
      color: ${props=>props.theme.colors.white};
    }
  }
`;

export const Icon = styled.div`
  >svg{
    font-size: 26px;
    margin: 0px 14px 0px 0px;
    color: ${props=>props.theme.colors.symbol};
  }
`;
