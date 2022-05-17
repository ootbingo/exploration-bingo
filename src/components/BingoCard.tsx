import React, { useState } from "react";
import BingoBoard from "./BingoBoard";
import BingoInfo from "./BingoInfo";
import { getBingoList, isBingoVersion, latestBingoVersion } from "oot-bingo-lists";
import { toExplorationMode, toUrlExplorationMode } from "../lib/explorationModes";
import { generateBingoBoard } from "oot-bingo-generator";

const urlParams = new URLSearchParams(window.location.search);

const urlSeed = urlParams.get("seed");
const seed = parseInt(urlSeed || "") || Math.floor(Math.random() * 999999);

const urlVersion = urlParams.get("version") ?? "";
const version = isBingoVersion(urlVersion) ? urlVersion : latestBingoVersion;

const urlMode = urlParams.get("mode");
const mode = toExplorationMode(urlMode);

if (
  seed.toString() !== urlSeed ||
  version !== urlVersion ||
  toUrlExplorationMode(mode) !== urlMode
) {
  urlParams.set("version", version);
  urlParams.set("mode", toUrlExplorationMode(mode));
  urlParams.set("seed", seed.toString());
  window.location.search = urlParams.toString();
}

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
      <BingoBoard goals={goals} seed={seed} onGreen={onGreen} onRed={onRed} />
      <BingoInfo seed={seed} version={version} mode={mode} goalsCompleted={goalsCompleted} />
    </>
  );
}

export default BingoCard;
