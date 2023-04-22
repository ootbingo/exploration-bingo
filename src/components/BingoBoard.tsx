import React, { useCallback, useState } from "react";
import { BingoTile } from "./BingoTile";
import { PopoutTile } from "./PopoutTile";
import { useExploBoard } from "../hooks/useExploBoard";
import { ClickToReveal } from "./ClickToReveal";
import styled from "styled-components";
import { BingoInfo } from "./BingoInfo";
import { getBingoList } from "oot-bingo-lists";
import { generateBingoBoard } from "oot-bingo-generator";
import { getStartTiles } from "../lib/startingTileModes";
import { Options } from "../lib/parseUrlParams";

interface BoardProps {
  options: Options;
}

export const BingoBoard: React.FC<BoardProps> = ({ options }) => {
  const [boardRevealed, setBoardRevealed] = useState(false);

  const { seed, version, mode, tiles } = options;

  const explorationSeed = seed + 1765913;

  const bingoList = getBingoList(version);
  const board = generateBingoBoard(bingoList, mode, explorationSeed);
  const goalNames = board?.goalNames || [];

  const startTiles = getStartTiles(tiles, seed);
  const exploBoard = useExploBoard(startTiles, goalNames, options);

  const createBingoTile = useCallback(
    (position: number) => {
      return <BingoTile position={position} exploBoard={exploBoard} />;
    },
    [exploBoard]
  );

  if (!boardRevealed) {
    return (
      <BoardDiv id="bingoBoard" $isPopout={exploBoard.options.isPopout}>
        <ClickToReveal onClick={() => setBoardRevealed(true)} />
      </BoardDiv>
    );
  }

  const openBoardPopout = () => {
    window.open(
      window.location.href + "&popout=true",
      "_blank",
      "height=545, width=605, rel=noreferrer, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no"
    );
  };

  return (
    <BoardDiv id="bingoBoard" $isPopout={exploBoard.options.isPopout}>
      <Table id="bingoTable">
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
            <BingoInfoTile colSpan={5} rowSpan={2}>
              <BingoInfo
                seed={options.seed}
                version={options.version}
                mode={options.mode}
                startTilesMode={options.tiles}
                goalsCompleted={exploBoard.numberCompleted}
              />
            </BingoInfoTile>
          </tr>
          <tr>
            <PopoutTile name="board" onClick={options.isPopout ? undefined : openBoardPopout} />
          </tr>
        </tbody>
      </Table>
    </BoardDiv>
  );
};

const BoardDiv = styled.div<{ $isPopout: boolean }>`
  margin: ${(props) => (props.$isPopout ? "0" : "15px 0 5px")};
  height: ${(props) => (props.$isPopout ? "100%" : "557px")};
  min-width: ${(props) => (props.$isPopout ? "100%" : "594px")};
`;

const Table = styled.table`
  height: 100%;
`;

const BingoInfoTile = styled.td`
  height: 100%;
`;
