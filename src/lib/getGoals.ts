import { generateBoard } from "oot-bingo-generator";
import { BingoVersion, getBingoList } from "oot-bingo-lists";

export function getGoals(
  mode: "blackout" | "shortBlackout",
  seed: number,
  version: BingoVersion
): string[] {
  const bingoList = getBingoList(version);
  if (!bingoList) {
    return [];
  }

  const card = generateBoard(bingoList, mode, seed);
  return card.goals.map((goal) => goal.name);
}
