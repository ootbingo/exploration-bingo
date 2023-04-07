import React from "react";
import { getBingoList } from "oot-bingo-lists";
import { generateBingoBoard } from "oot-bingo-generator";
import { Options } from "../lib/parseUrlParams";
import { BingoBoard } from "./BingoBoard";
import { BingoInfo } from "./BingoInfo";
import { useExploBoard } from "../hooks/useExploBoard";
import { getStartTiles } from "../lib/startingTileModes";
import styled from "styled-components";

interface Props {
  options: Options;
}

export const BingoCard: React.FC<Props> = ({ options }) => {
  const { seed, version, mode, tiles } = options;

  const explorationSeed = seed + 1765913;

  const bingoList = getBingoList(version);
  const board = generateBingoBoard(bingoList, mode, explorationSeed);
  const goalNames = board?.goalNames || [];

  const startTiles = getStartTiles(tiles, seed);
  const exploBoard = useExploBoard(startTiles, goalNames);

  if (seed === -1) {
    return null;
  }

  return (
    <BingoCardDiv>
      <BingoBoard exploBoard={exploBoard} />
      <BingoInfo
        seed={seed}
        version={version}
        mode={mode}
        startTilesMode={tiles}
        goalsCompleted={exploBoard.numberCompleted}
      />
    </BingoCardDiv>
  );
};

const BingoCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
