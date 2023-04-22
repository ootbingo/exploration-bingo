import React from "react";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

export const ClickToReveal: React.FC<Props> = ({ text, onClick, className }) => {
  return (
    <ClickToRevealDiv id="clickToReveal" onClick={onClick} className={className}>
      {text}
    </ClickToRevealDiv>
  );
};

export const ClickToPopout: React.FC<Props> = ({ text, onClick, className }) => {
  return <ClickToPopoutDiv text={text} onClick={onClick} />;
};

const ClickToRevealDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: rgb(13, 13, 13);
  font-size: 18px;
  user-select: none;
  cursor: pointer;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);

  border: 1px solid ${Colors.darkGrey};


  &:hover {
    color: ${Colors.white};
    background-color: rgb(27, 27, 27);
`;

const ClickToPopoutDiv = styled(ClickToReveal)`
  color: ${Colors.lightBlue};
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  background: ${Colors.darkestBlue};
  border: 1px ${Colors.mediumBlue} solid;


  &:hover {
    color: ${Colors.white};
    background: ${Colors.mediumBlue};
`;
