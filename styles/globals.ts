import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    marign:0;
    padding:0;
    box-sizing:'border-box';
  }

  body{
    background-color: ${props=>props.theme.colors.primary};
    color:${props => props.theme.colors.text};
    font:400 16px Roboto, sans-serif;
  }
`;



