import React from "react";
import { BingoVersion } from "oot-bingo-lists";
import { displayExplorationMode, ExplorationMode } from "../lib/explorationModes";

interface BingoInfoProps {
  seed: number;
  version: BingoVersion;
  mode: ExplorationMode;
  goalsCompleted: number;
}

function BingoInfo(props: BingoInfoProps) {
  return (
    <div id="results">
      <div id="cardInfo">
        <p className="infoBlock">
          Version: <strong>{props.version}</strong>
        </p>
        <p className="infoBlock">
          Seed: <strong>{props.seed}</strong>
        </p>
        <p className="infoBlock">
          Mode: <strong>{displayExplorationMode(props.mode)}</strong>
        </p>
      </div>
      <p>
        Completed goals: <strong>{props.goalsCompleted}</strong>
      </p>
    </div>
  );
}

export default BingoInfo;
