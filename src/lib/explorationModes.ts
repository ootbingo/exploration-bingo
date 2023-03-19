export type ExplorationMode = "blackout" | "shortBlackout";
export type UrlExplorationMode = "blackout" | "short-blackout";

export const toExplorationMode = (str: string | null): ExplorationMode => {
  switch (str?.toLowerCase()) {
    case "blackout":
      return "blackout";
    case "shortblackout":
    case "short-blackout":
      return "shortBlackout";
    default:
      return "blackout";
  }
};

export const toUrlExplorationMode = (str: string | null): UrlExplorationMode => {
  switch (str?.toLowerCase()) {
    case "blackout":
      return "blackout";
    case "shortblackout":
    case "short-blackout":
      return "short-blackout";
    default:
      return "blackout";
  }
};

export const displayExplorationMode = (mode: ExplorationMode): string => {
  switch (mode) {
    case "blackout":
      return "Blackout";
    case "shortBlackout":
      return "Short Blackout";
  }
};
