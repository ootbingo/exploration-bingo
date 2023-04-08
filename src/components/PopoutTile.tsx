import React from "react";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

interface Props {
  name: string;
}

export const PopoutTile: React.FC<Props> = ({ name }) => {
  const type = name.includes("row") ? "row" : "col";
  return <StyledTile $type={type}>{name}</StyledTile>;
};

const StyledTile = styled.td<{ $type: "row" | "col" }>`
  text-align: center;
  padding: 5px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  background: ${Colors.darkestBlue};
  font-size: 75%;
  color: ${Colors.lightBlue};
  font-weight: 700;
  border: 1px ${Colors.mediumBlue} solid;
  text-transform: uppercase;
  max-width: 20px;
  user-select: none;

  &:hover {
    color: ${Colors.white};
    background: ${Colors.brightBlue};
  }
`;
