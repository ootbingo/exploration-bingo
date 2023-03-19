export enum TileColor {
  "GREEN" = "green",
  "RED" = "red",
  "BLACK" = "black",
}

export const getNextColor = (color: TileColor) => {
  switch (color) {
    case TileColor.GREEN:
      return TileColor.RED;
    case TileColor.RED:
      return TileColor.BLACK;
    case TileColor.BLACK:
      return TileColor.GREEN;
  }
};
