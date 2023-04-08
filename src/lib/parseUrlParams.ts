import { BingoVersion, isBingoVersion, latestBingoVersion } from "oot-bingo-lists";
import { ExplorationMode, toExplorationMode, toUrlExplorationMode } from "./explorationModes";
import { StartTilesMode, toStartTileMode } from "./startingTileModes";

export type Options = {
  seed: number;
  version: BingoVersion;
  mode: ExplorationMode;
  tiles: StartTilesMode;
  isPopout: boolean;
};

export const parseUrlParams = (urlParams: URLSearchParams, updateUrl?: boolean): Options => {
  const urlSeed = urlParams.get("seed");
  const seed = parseInt(urlSeed || "") || Math.floor(Math.random() * 999999);

  const urlVersion = urlParams.get("version") ?? "";
  const version = isBingoVersion(urlVersion) ? urlVersion : latestBingoVersion;

  const urlMode = urlParams.get("mode");
  const mode = toExplorationMode(urlMode);

  const urlTiles = urlParams.get("start-tiles");
  const tiles = toStartTileMode(urlTiles);

  const urlIsPopout = urlParams.get("popout");
  const isPopout = urlIsPopout === "true";

  if (updateUrl) {
    if (
      seed.toString() !== urlSeed ||
      version !== urlVersion ||
      toUrlExplorationMode(mode) !== urlMode ||
      tiles !== urlTiles
    ) {
      urlParams.set("seed", seed.toString());
      urlParams.set("version", version);
      urlParams.set("mode", toUrlExplorationMode(mode));
      urlParams.set("start-tiles", tiles);
      if (isPopout) {
        urlParams.set("popout", "true");
      }
      window.location.search = urlParams.toString();
    }
  }

  return {
    seed,
    version,
    mode,
    tiles,
    isPopout,
  };
};
