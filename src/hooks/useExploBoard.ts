import { useCallback, useState } from "react";
import { getNextColor, TileColor } from "../lib/tileColors";

export const useExploBoard = (startTiles: number[], goalNames: string[]) => {
  const [visibleTiles, setVisibleTiles] = useState<Set<number>>(new Set(startTiles));
  const [tileColors, setTileColors] = useState<TileColor[]>(Array(25).fill(TileColor.BLACK));

  const getColorOfTile = useCallback(
    (tile: number) => {
      return tileColors[tile];
    },
    [tileColors]
  );

  const getVisibilityOfTile = useCallback(
    (tile: number) => {
      return visibleTiles.has(tile);
    },
    [visibleTiles]
  );

  const updateVisibilities = useCallback(
    (clickedTile: number) => {
      const invisibleAdjacentTiles = getAdjacentTiles(clickedTile).filter(
        (adjTile) => !visibleTiles.has(adjTile)
      );
      if (invisibleAdjacentTiles.length > 0) {
        const newVisibleTiles = new Set(visibleTiles);
        invisibleAdjacentTiles.forEach((adjTile) => newVisibleTiles.add(adjTile));
        setVisibleTiles(newVisibleTiles);
      }
    },
    [visibleTiles]
  );

  const getGoalNameOfTile = useCallback(
    (tile: number) => {
      return goalNames[tile];
    },
    [goalNames]
  );

  const onTileClick = useCallback(
    (tile: number) => {
      updateVisibilities(tile);

      setTileColors(
        tileColors.map((color, i) => {
          return i === tile ? getNextColor(color) : color;
        })
      );
    },
    [tileColors, updateVisibilities]
  );

  return {
    numberCompleted: tileColors.filter((color) => color === TileColor.GREEN).length,
    onTileClick,
    getColorOfTile,
    getVisibilityOfTile,
    getGoalNameOfTile,
  };
};

const getAdjacentTiles = (tile: number): number[] => {
  const adjacentTiles: number[] = [];
  if (tile > 4) {
    adjacentTiles.push(tile - 5);
  }
  if (tile < 20) {
    adjacentTiles.push(tile + 5);
  }
  if (tile % 5 !== 0) {
    adjacentTiles.push(tile - 1);
  }
  if (tile % 5 !== 4) {
    adjacentTiles.push(tile + 1);
  }
  return adjacentTiles;
};
