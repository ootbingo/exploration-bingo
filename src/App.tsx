import React from "react";
import { BingoPage } from "./components/BingoPage";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <StyledPage id="pageContent">
        <BingoPage />
      </StyledPage>
    );
  }
}

export default App;

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
