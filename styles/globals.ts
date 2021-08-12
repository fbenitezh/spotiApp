import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:'border-box';
  }

  h2{
    font-weight: 600;
  }

  body{
    background-color: ${props=>props.theme.colors.primary};
    color:${props => props.theme.colors.text};
    font:400 16px Roboto, sans-serif;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .fast {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .lazy-load-image-background.blur.lazy-load-image-loaded > img {
    object-fit: contain;
  }

  .huOiqs >div>img {
    object-fit: cover;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }
`;



