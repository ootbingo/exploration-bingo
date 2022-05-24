import React, { useState } from "react";
import BingoInfo from "./BingoInfo";
import { getBingoList } from "oot-bingo-lists";
import { generateBingoBoard } from "oot-bingo-generator";
import { Options } from "../lib/parseUrlParams";
import { BingoBoard } from "./BingoBoard";

interface Props {
  options: Options;
}

export function BingoCard(props: Props) {
  const [goalsCompleted, setGoalsCompleted] = useState<number>(0);

  if (!props.options || props.options.seed === -1) {
    return <></>;
  }

  const { seed, version, mode, tiles } = props.options;

  const explorationSeed = seed + 1765913;

  const bingoList = getBingoList(version);
  const board = generateBingoBoard(bingoList, mode, explorationSeed);
  const goals = board?.goalNames || [];

  return (
    <>
      <BingoBoard
        goals={goals}
        startTilesMode={tiles}
        seed={seed}
        setGoalsCompleted={setGoalsCompleted}
      />
      <BingoInfo
        seed={seed}
        version={version}
        mode={mode}
        startTilesMode={tiles}
        goalsCompleted={goalsCompleted}
      />
    </>
  );
}
