import React, { useCallback, useState } from "react";
import { BingoTile } from "./BingoTile";
import { PopoutTile } from "./PopoutTile";
import { useExploBoard } from "../hooks/useExploBoard";
import { ClickToReveal } from "./ClickToReveal";
import styled from "styled-components";

interface BoardProps {
  exploBoard: ReturnType<typeof useExploBoard>;
}

export const BingoBoard: React.FC<BoardProps> = ({ exploBoard }) => {
  const [boardRevealed, setBoardRevealed] = useState(false);

  const createBingoTile = useCallback(
    (position: number) => {
      return <BingoTile position={position} exploBoard={exploBoard} />;
    },
    [exploBoard]
  );

  if (!boardRevealed) {
    return (
      <BoardDiv>
        <ClickToReveal onClick={() => setBoardRevealed(true)} />
      </BoardDiv>
    );
  }

  return (
    <BoardDiv>
      <table id="bingoTable">
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
          </tr>
        </tbody>
      </table>
    </BoardDiv>
  );
};

const BoardDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
  height: 515px;
  min-width: 594px;
`;
