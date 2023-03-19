import React, { useCallback } from "react";
import { BingoTile } from "./BingoTile";
import { PopoutTile } from "./PopoutTile";
import { useExploBoard } from "../hooks/useExploBoard";

interface BoardProps {
  exploBoard: ReturnType<typeof useExploBoard>;
}

export const BingoBoard: React.FC<BoardProps> = ({ exploBoard }) => {
  const createBingoTile = useCallback(
    (position: number) => {
      return <BingoTile position={position} exploBoard={exploBoard} />;
    },
    [exploBoard]
  );

  return (
    <div id="results">
      <table id="bingo">
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
    </div>
  );
};
