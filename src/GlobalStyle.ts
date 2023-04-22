import { createGlobalStyle } from "styled-components";

export const Colors = {
  black: "#000",
  background: "#111111",
  darkGrey: "#303030",
  mediumGrey: "#424242",
  lightGrey: "#808080",
  opal: "#bec7d2",
  white: "#fff",
  darkestBlue: "#000811",
  darkBlue: "#001a36",
  mediumBlue: "#0a245a",
  brightBlue: "#1448b3",
  lightBlue: "#3c70df",
  yellow: "#f7e279",
  orange: "#e09456",
  red: "#550011",
  lightRed: "#770022",
  green: "#005511",
  lightGreen: "#007722",
} as const;

export const StyleConsts = {
  squareHeight: 91,
  squareWidth: 109.133,
  popoutTileHeight: 31,
  popoutTileWidth: 47.35,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background: ${Colors.background};
    color: ${Colors.opal};
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 0.92rem;
    line-height: 1.22rem;
    padding: 0;
    margin: 0;
    height: 100%;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  }

  strong {
    color: ${Colors.yellow};
    font-weight: 700;
  }

  ::selection {
    background: ${Colors.mediumBlue};
    color: ${Colors.white};
  }

  strong {
    color: ${Colors.yellow};
    font-weight: 700;
  }

  h1 {
    font-family: ' Roboto ', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 1.50rem;
    line-height: 1.45rem;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    color: ${Colors.orange};
    margin: 8px 0 8px 0;
    padding: 8px 0;
    word-wrap: break-word;
    overflow: hidden;
  }

  h1 img {
    position: absolute;
    margin: 0 8px;
  }

  h1 a {
    text-decoration: underline;
  }

  h2 {
    font-family: ' Roboto ', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 1.06rem;
    line-height: 1.15rem;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    color: ${Colors.orange};
    margin: 8px 0 0 0;
    padding: 8px 0;
    word-wrap: break-word;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: ${Colors.opal};
  }

  p {
    margin: 0;
    padding: 0 0 11px;
    line-height: 1.35rem;
  }

  ul {
    margin-left: 0;
    padding-left: 1em;
    text-indent: -1em;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  ul li {
    list-style-type: square;
    list-style-position: inside;
  }

  li {
    line-height: 1.35rem;
    padding-bottom: 11px;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    padding: 0;
  }
`;
