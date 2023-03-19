import React from "react";
import { TileColor } from "../lib/tileColors";
import { useExploBoard } from "../hooks/useExploBoard";

interface Props {
  position: number;
  exploBoard: ReturnType<typeof useExploBoard>;
}

export const BingoTile: React.FC<Props> = ({ position, exploBoard }) => {
  const classes = calculateRows(position);

  const color = exploBoard.getColorOfTile(position);

  if (color === TileColor.GREEN) {
    classes.push("greenSquare");
  }

  if (color === TileColor.RED) {
    classes.push("redSquare");
  }

  if (!exploBoard.getVisibilityOfTile(position)) {
    classes.push("hidden");
  }

  const className = classes.join(" ");

  return (
    <td className={className} key={position} onClick={() => exploBoard.onTileClick(position)}>
      {exploBoard.getGoalNameOfTile(position)}
    </td>
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
