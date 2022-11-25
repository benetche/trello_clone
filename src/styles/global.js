import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root{
   height: 100% ;
  }

  body{
    height: 100%;
    margin: 0;
    background-attachment: fixed;
    background-image: linear-gradient(45deg, #B91372, #41EAD4);
    background-repeat: no-repeat;
    font: 14px 'Poppins', sans-serif;
    color: #121212;
    -webkit-font-smoothing: antialiased !important;
  }
`;
