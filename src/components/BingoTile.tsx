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
  return (
    <StyledBingoTile
      key={position}
      onClick={() => exploBoard.onTileClick(position)}
      $color={exploBoard.getColorOfTile(position)}
      $isVisible={exploBoard.getVisibilityOfTile(position)}
    >
      {exploBoard.getGoalNameOfTile(position)}
    </StyledBingoTile>
  );
};

const tileColorToRgb = (color: TileColor, isHighlighted?: boolean) => {
  if (isHighlighted) {
    switch (color) {
      case TileColor.BLACK:
        return Colors.darkBlue;
      case TileColor.GREEN:
        return Colors.lightGreen;
      case TileColor.RED:
        return Colors.lightRed;
    }
  }
  switch (color) {
    case TileColor.BLACK:
      return Colors.black;
    case TileColor.GREEN:
      return Colors.green;
    case TileColor.RED:
      return Colors.red;
  }
};

const StyledBingoTile = styled.td<{ $color: TileColor; $isVisible: boolean }>`
  background: ${(props) => tileColorToRgb(props.$color)};
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  padding: 0 5px;
  cursor: pointer;
  width: 20%;
  height: 90px;
  text-align: center;
  border: 1px ${Colors.mediumGrey} solid;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  user-select: none;

  &:hover {
    background: ${(props) => tileColorToRgb(props.$color, true)};
  }
`;
