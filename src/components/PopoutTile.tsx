import React from "react";
import styled, { css } from "styled-components";
import { Colors, StyleConsts } from "../GlobalStyle";

interface Props {
  name: string;
  onClick?: () => void;
}

export const PopoutTile: React.FC<Props> = ({ name, onClick }) => {
  const type = name.includes("row") ? "row" : "col";
  return (
    <StyledTile onClick={onClick} $type={type}>
      {name}
    </StyledTile>
  );
};

const StyledTile = styled.td<{ onClick?: () => void; $type: "row" | "col" }>`
  text-align: center;
  padding: 5px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  background: ${Colors.darkestBlue};
  font-size: 75%;
  color: ${Colors.lightBlue};
  font-weight: 700;
  border: 1px ${Colors.mediumBlue} solid;
  text-transform: uppercase;
  user-select: none;

  ${(props) =>
    props.$type === "row" &&
    css`
      width: ${StyleConsts.popoutTileWidth}px;
    `};

  ${(props) =>
    props.$type === "col" &&
    css`
      height: ${StyleConsts.popoutTileHeight}px;
    `};

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;

      &:hover {
        color: ${Colors.white};
        background: ${Colors.brightBlue};
      }
    `}
`;
