import React from "react";
import { TileColor } from "../lib/tileColors";
import { useExploBoard } from "../hooks/useExploBoard";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

interface Props {
  position: number;
  exploBoard: ReturnType<typeof useExploBoard>;
}

export const BingoTile: React.FC<Props> = ({ position, exploBoard }) => {
  const classes = calculateRows(position);

  const className = classes.join(" ");

  return (
    <StyledBingoTile
      className={className}
      key={position}
      onClick={() => exploBoard.onTileClick(position)}
      $color={exploBoard.getColorOfTile(position)}
      $isVisible={exploBoard.getVisibilityOfTile(position)}
    >
      {exploBoard.getGoalNameOfTile(position)}
    </StyledBingoTile>
  );
};

const calculateRows = (position: number) => {
  const row = Math.floor(position / 5) + 1;
  const col = (position % 5) + 1;

  let rows = [`row${row}`, `col${col}`];
  if (row === col) {
    rows = rows.concat("tlbr");
  }
  if (row + col === 6) {
    rows = rows.concat("bltr");
  }
  return rows;
};

const tileColorToRgb = (color: TileColor) => {
  switch (color) {
    case TileColor.BLACK:
      return "#000";
    case TileColor.GREEN:
      return "#005511";
    case TileColor.RED:
      return "#550011";
  }
};

const StyledBingoTile = styled.td<{ $color: TileColor; $isVisible: boolean }>`
  background: ${(props) => tileColorToRgb(props.$color)};
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  padding: 0 5px;
  cursor: pointer;
  width: 95px;
  height: 90px;
  text-align: center;
  border: 1px ${Colors.mediumGrey} solid;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
`;
