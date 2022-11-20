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
    font: 14px 'Poppins', sans-serif;
    background-color: #323232;
    -webkit-font-smoothing: antialiased !important;
  }
`;
