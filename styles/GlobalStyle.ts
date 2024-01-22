import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family:
        Muli
        Josefin Sans,
        Roboto,
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        Segoe UI,
        Oxygen,
        Ubuntu,
        Cantarell,
        Fira Sans,
        Droid Sans,
        Helvetica Neue,
        sans-serif;
    height: 100vh;
    width: 100vw;
    border: 0;
    overflow-x: clip;
    }

    html {
    background: #000;
    overflow: scroll;
    overflow-x: hidden;
    }

    ::-webkit-scrollbar {
    width: 0; 
    }

    @font-face {
    font-family: 'Josefin Sans';
    src: local('Josefin Sans'), url(../public/assets/fonts/JosefinSans/JosefinSans-Regular.ttf) format('truetype');
    }

    @font-face {
    font-family: 'Josefin Sans';
    font-weight: bold;
    src: local('Josefin Sans'), url(../public/assets/fonts/JosefinSans/JosefinSans-Bold.ttf) format('truetype');
    }

    @font-face {
    font-family: 'Josefin Sans';
    font-weight: lighter;
    src: local('Josefin Sans'), url(../public/assets/fonts/JosefinSans/JosefinSans-Light.ttf) format('truetype');
    }

    @font-face {
    font-family: 'Raleway';
    src: local('Raleway'), url(../public/assets/fonts/Raleway/Raleway-Medium.ttf) format('truetype');
    }
`;

export default GlobalStyle;