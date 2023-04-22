import React from "react";
import { getBingoList } from "oot-bingo-lists";
import { generateBingoBoard } from "oot-bingo-generator";
import { Options } from "../lib/parseUrlParams";
import { BingoBoard } from "./BingoBoard";
import { useExploBoard } from "../hooks/useExploBoard";
import { getStartTiles } from "../lib/startingTileModes";
import styled from "styled-components";

interface Props {
  options: Options;
}

// todo merge this component with BingoBoard?
export const BingoCard: React.FC<Props> = ({ options }) => {
  const { seed, version, mode, tiles } = options;

  const explorationSeed = seed + 1765913;

  const bingoList = getBingoList(version);
  const board = generateBingoBoard(bingoList, mode, explorationSeed);
  const goalNames = board?.goalNames || [];

  const startTiles = getStartTiles(tiles, seed);
  const exploBoard = useExploBoard(startTiles, goalNames, options);

  if (seed === -1) {
    return null;
  }

  return (
    <BingoCardDiv id="bingoCard" $isPopout={options.isPopout}>
      <BingoBoard exploBoard={exploBoard} />
    </BingoCardDiv>
  );
};

const BingoCardDiv = styled.div<{ $isPopout: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => (props.$isPopout ? "100vh" : "557px")};
  width: 100%;
`;
