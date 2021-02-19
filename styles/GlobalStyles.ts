import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local(''),
    url('../fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('../fonts/poppins-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local(''),
    url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('../fonts/poppins-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local(''),
    url('../fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('../fonts/poppins-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Poppins';
  }

  body {
    background: linear-gradient(90deg, rgba(165, 165, 165, 0.03) 0%, rgba(165, 165, 165, 0.03) 8%,rgba(235, 235, 235, 0.03) 8%, rgba(235, 235, 235, 0.03) 9%,rgba(7, 7, 7, 0.03) 9%, rgba(7, 7, 7, 0.03) 14%,rgba(212, 212, 212, 0.03) 14%, rgba(212, 212, 212, 0.03) 17%,rgba(219, 219, 219, 0.03) 17%, rgba(219, 219, 219, 0.03) 95%,rgba(86, 86, 86, 0.03) 95%, rgba(86, 86, 86, 0.03) 100%),linear-gradient(67.5deg, rgba(80, 80, 80, 0.03) 0%, rgba(80, 80, 80, 0.03) 11%,rgba(138, 138, 138, 0.03) 11%, rgba(138, 138, 138, 0.03) 17%,rgba(122, 122, 122, 0.03) 17%, rgba(122, 122, 122, 0.03) 24%,rgba(166, 166, 166, 0.03) 24%, rgba(166, 166, 166, 0.03) 27%,rgba(245, 245, 245, 0.03) 27%, rgba(245, 245, 245, 0.03) 89%,rgba(88, 88, 88, 0.03) 89%, rgba(88, 88, 88, 0.03) 100%),linear-gradient(67.5deg, rgba(244, 244, 244, 0.03) 0%, rgba(244, 244, 244, 0.03) 4%,rgba(16, 16, 16, 0.03) 4%, rgba(16, 16, 16, 0.03) 10%,rgba(157, 157, 157, 0.03) 10%, rgba(157, 157, 157, 0.03) 20%,rgba(212, 212, 212, 0.03) 20%, rgba(212, 212, 212, 0.03) 83%,rgba(5, 5, 5, 0.03) 83%, rgba(5, 5, 5, 0.03) 84%,rgba(237, 237, 237, 0.03) 84%, rgba(237, 237, 237, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff);
  }
`;
