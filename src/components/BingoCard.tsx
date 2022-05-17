import React, { useState } from "react";
import BingoBoard from "./BingoBoard";
import BingoInfo from "./BingoInfo";
import { getBingoList } from "oot-bingo-lists";
import { generateBingoBoard } from "oot-bingo-generator";
import { parseUrlParams } from "../lib/parseUrlParams";

const urlParams = new URLSearchParams(window.location.search);

const { seed, version, mode, tiles } = parseUrlParams(urlParams, true);

const explorationSeed = seed + 1765913;

const bingoList = getBingoList(version);
const board = generateBingoBoard(bingoList, mode, explorationSeed);
const goals = board?.goalNames || [];

function BingoCard() {
  const [goalsCompleted, setGoalsCompleted] = useState(0);
  const onGreen = () => setGoalsCompleted(goalsCompleted + 1);
  const onRed = () => setGoalsCompleted(goalsCompleted - 1);

  if (seed === -1) {
    return <></>;
  }

  return (
    <>
      <BingoBoard
        goals={goals}
        startTilesMode={tiles}
        seed={seed}
        onGreen={onGreen}
        onRed={onRed}
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

export default BingoCard;
