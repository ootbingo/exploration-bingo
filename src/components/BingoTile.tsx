import React from "react";

interface Props {
  rows: string[];
  color: string;
  goal: string;
  hidden: boolean;
  onClick: () => void;
}

export const BingoTile: React.FC<Props> = ({ rows, color, goal, hidden, onClick }) => {
  const classes = rows;

  if (color === "green") {
    classes.push("greensquare");
  }
  if (color === "red") {
    classes.push("redsquare");
  }

  if (hidden) {
    classes.push("hidden");
  }

  const className = classes.join(" ");

  return (
    <td className={className} onClick={onClick}>
      {goal}
    </td>
  );
};
