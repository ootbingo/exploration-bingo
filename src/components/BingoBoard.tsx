import React, { useCallback, useMemo, useState } from "react";
import { BingoTile } from "./BingoTile";
import { PopoutTile } from "./PopoutTile";
import { useExploBoard } from "../hooks/useExploBoard";
import { ClickToReveal } from "./ClickTo";
import styled, { css } from "styled-components";
import { BingoInfo } from "./BingoInfo";
import { generateBingoBoardFromVersion } from "oot-bingo-lists";
import { getStartTiles } from "../lib/startingTileModes";
import { Options } from "../lib/parseUrlParams";
import { StyleConsts } from "../GlobalStyle";

interface BoardProps {
  options: Options;
}

export const BingoBoard: React.FC<BoardProps> = ({ options }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const { seed, version, mode, tiles } = options;

  const goalNames = useMemo(() => {
    const explorationSeed = seed + 1765913;
    const board = generateBingoBoardFromVersion(version, mode, explorationSeed);
    return board?.goalNames || [];
  }, [seed, mode, version]);

  const startTiles = getStartTiles(tiles, seed);
  const exploBoard = useExploBoard(startTiles, goalNames, options);

  const createBingoTile = useCallback(
    (position: number) => {
      if (!isRevealed) {
        return null;
      }
      return <BingoTile position={position} exploBoard={exploBoard} key={position} />;
    },
    [exploBoard, isRevealed]
  );

  const openBoardPopout = useCallback(() => {
    window.open(
      window.location.href + "&popout=true",
      "_blank",
      "height=580, width=620, rel=noreferrer, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no"
    );
  }, []);

  const bingoInfo = (
    <BingoInfo
      seed={options.seed}
      version={options.version}
      mode={options.mode}
      startTilesMode={options.tiles}
      goalsCompleted={exploBoard.numberCompleted}
    />
  );

  return (
    <BoardDiv id="bingoBoard" $isPopout={options.isPopout}>
      <Table id="bingoTable" $isPopout={options.isPopout}>
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
            {!isRevealed && (
              <RevealTd $isPopout={options.isPopout} colSpan={5} rowSpan={5}>
                <ClickToReveal onClick={() => setIsRevealed(true)} />
              </RevealTd>
            )}
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
              {bingoInfo}
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
  margin: ${(props) => (props.$isPopout ? "0" : "24px 0 0")};

  ${(props) =>
    props.$isPopout &&
    css`
      height: 100%;
    `}
}
`;

const RevealTd = styled.td<{ $isPopout: boolean }>`
  height: 100%;
  min-width: ${StyleConsts.squareWidth * 5}px;
`;

const Table = styled.table<{ $isPopout: boolean }>`
  height: ${(props) => (props.$isPopout ? "100%" : "auto")};
`;

const BingoInfoTile = styled.td`
  height: 100%;
`;
