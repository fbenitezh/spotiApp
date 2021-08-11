import styled from "styled-components";

export const Container = styled.div`
  grid-area: BR;
  display: grid;
  grid-template-columns: 500px auto 500px;
  grid-template-rows: auto;
  grid-template-areas: 'SI SEL CON';//SI -> Song Info SEL->Selector CON -> Config
  align-items: center;
  box-shadow:rgba(0,0,0,0.2) 0px 10px 5px 13px;
  padding: 10px 15px;
`;

export const SongInfo = styled.section`
  grid-area: SI;
  display: flex;
  >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    >p{
      margin:0;
      color: ${props=>props.theme.colors.white};
      font-weight: 600;
      font-size: 15px;
      display: block;
    }
    >span{
      color: ${props=>props.theme.colors.symbol};
      font-size: 13px;
    }
  }
`;

export const SongImage = styled.div`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  >img{
    width: 100%;
    object-fit: cover;
    border-radius:100%;
  }
`;

export const Selector = styled.div`
  grid-area: SEL;
  text-align:center;
  >button{
    background: none;
    border:none;
    font-size: 25px;
    margin:0px 20px;
    color: ${props=>props.theme.colors.white};
    cursor: pointer;
    transition: all .5s ease;
    position: relative;
    top: 0;
    &.disabled{
      color: ${props=>props.theme.colors.symbol};
    }
    &:hover{
      /* box-shadow: rgba(0,0,0,0.2) 0px 10px 5px 13px; */
      top: -3px;
      color: ${props=>props.theme.colors.discord};
    }
  }
`;

export const Config = styled.div`
  grid-area: CON;
`;