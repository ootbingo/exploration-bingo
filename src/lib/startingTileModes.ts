export type StartTilesMode = "2" | "4";
const defaultStartTilesMode: StartTilesMode = "2";

export function toStartTileMode(str: string | null): StartTilesMode {
  if (str === "2" || str === "4") {
    return str;
  }
  return defaultStartTilesMode;
}

export function getStartTiles(tilesMode: StartTilesMode, seed: number): number[] {
  switch (tilesMode) {
    case "2":
      return seed % 2 === 0 ? [6, 18] : [8, 16];
    case "4":
      return [6, 8, 16, 18];
  }
}
