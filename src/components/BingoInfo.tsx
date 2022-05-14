import React from "react";
import { BingoVersion } from "oot-bingo-lists";

interface BingoInfoProps {
  seed: number;
  version: BingoVersion;
  goalsCompleted: number;
}

function BingoInfo(props: BingoInfoProps) {
  return (
    <div id="results">
      <div id="cardInfo">
        <p>
          Version: <strong>{props.version}</strong>
        </p>
        <p id="seed">
          Seed: <strong>{props.seed}</strong>
        </p>
      </div>
      <p>
        Completed goals: <strong>{props.goalsCompleted}</strong>
      </p>
    </div>
  );
}

export default BingoInfo;
