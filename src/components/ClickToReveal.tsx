import React from "react";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

interface Props {
  onClick: () => void;
}

export const ClickToReveal: React.FC<Props> = ({ onClick }) => {
  return (
    <ClickToRevealDiv id="clickToReveal" onClick={onClick}>
      Click to reveal
    </ClickToRevealDiv>
  );
};

const ClickToRevealDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(13, 13, 13);
  font-size: 18px;
  user-select: none;
  cursor: pointer;
  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 1);
  border: 1px solid ${Colors.darkGrey};
`;
