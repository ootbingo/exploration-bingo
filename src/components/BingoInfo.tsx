import React from "react";
import { BingoVersion } from "oot-bingo-lists";
import { displayExplorationMode, ExplorationMode } from "../lib/explorationModes";
import { StartTilesMode } from "../lib/startingTileModes";

interface Props {
  seed: number;
  version: BingoVersion;
  mode: ExplorationMode;
  startTilesMode: StartTilesMode;
  goalsCompleted: number;
}

export const BingoInfo: React.FC<Props> = ({
  seed,
  version,
  mode,
  startTilesMode,
  goalsCompleted,
}) => {
  return (
    <div id="results">
      <div id="cardInfo">
        <p className="infoBlock">
          Version: <strong>{version}</strong>
        </p>
        <p className="infoBlock">
          Seed: <strong>{seed}</strong>
        </p>
        <p className="infoBlock">
          Mode: <strong>{displayExplorationMode(mode)}</strong>
        </p>
        <p className="infoBlock">
          Start tiles: <strong>{startTilesMode}</strong>
        </p>
      </div>
      <p>
        Completed goals: <strong>{goalsCompleted}</strong>
      </p>
    </div>
  );
};
