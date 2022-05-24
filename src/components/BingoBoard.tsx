import React, { useEffect, useState } from "react";
import PopoutTile from "./PopoutTile";
import { getStartTiles, StartTilesMode } from "../lib/startingTileModes";
import { BingoTile } from "./BingoTile";

interface Props {
  goals: string[];
  seed: number;
  startTilesMode: StartTilesMode;
  setGoalsCompleted: (numberOfGoals: number) => void;
}

export function BingoBoard(props: Props) {
  const [clicks, setClicks] = useState<number[]>(Array(25).fill(0));

  useEffect(() => {
    const colorCount = clicks.filter((_, position) => calculateColor(position) !== "").length;
    props.setGoalsCompleted(colorCount);
  }, [clicks, calculateColor, props.setGoalsCompleted]);

  function onTileClick(position: number) {
    incrementClicks(position);
  }

  function incrementClicks(position: number) {
    setClicks((prevClicks) => {
      const newClicks = [...prevClicks];
      newClicks[position] = newClicks[position] + 1;
      return newClicks;
    });
  }

  function calculateColor(position: number) {
    if (clicks[position] % 3 === 1) {
      return "green";
    }
    if (clicks[position] % 3 === 2) return "red";
    return "";
  }

  function isHidden(position: number): boolean {
    const startTiles = getStartTiles(props.startTilesMode, props.seed);
    if (startTiles.includes(position)) {
      return false;
    }
    return !getAdjacentPositions(position)
      .map((adjacentPosition) => clicks[adjacentPosition])
      .some((clicks) => clicks > 0);
  }

  const createBingoTile = (position: number) => {
    return (
      <BingoTile
        key={position}
        rows={calculateRows(position)}
        color={calculateColor(position)}
        goal={props.goals[position]}
        hidden={isHidden(position)}
        onClick={() => onTileClick(position)}
      />
    );
  };

  return (
    <div id="results">
      <table id="bingo">
        <tbody>
          <tr>
            <PopoutTile name="tl-br" />
            <PopoutTile name="col1" />
            <PopoutTile name="col2" />
            <PopoutTile name="col3" />
            <PopoutTile name="col4" />
            <PopoutTile name="col5" />
          </tr>

          <tr>
            <PopoutTile name="row1" />
            {[0, 1, 2, 3, 4].map(createBingoTile)}
          </tr>
          <tr>
            <PopoutTile name="row2" />
            {[5, 6, 7, 8, 9].map(createBingoTile)}
          </tr>
          <tr>
            <PopoutTile name="row3" />
            {[10, 11, 12, 13, 14].map(createBingoTile)}
          </tr>
          <tr>
            <PopoutTile name="row4" />
            {[15, 16, 17, 18, 19].map(createBingoTile)}
          </tr>
          <tr>
            <PopoutTile name="row5" />
            {[20, 21, 22, 23, 24].map(createBingoTile)}
          </tr>

          <tr>
            <PopoutTile name="bl-tr" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function calculateRows(position: number) {
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
}

function getAdjacentPositions(position: number): number[] {
  const adjacentPositions: number[] = [];
  if (position > 4) {
    adjacentPositions.push(position - 5);
  }
  if (position < 20) {
    adjacentPositions.push(position + 5);
  }
  if (position % 5 !== 0) {
    adjacentPositions.push(position - 1);
  }
  if (position % 5 !== 4) {
    adjacentPositions.push(position + 1);
  }
  return adjacentPositions;
}
