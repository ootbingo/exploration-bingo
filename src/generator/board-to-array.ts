import ootBingoGenerator from "./generator";
import { bingoList } from "./goallist";

interface Goal {
    name: string,
}

export function generateBoard(seed: number): string[] {
    var bingoFunc = ootBingoGenerator;

    const bingoOpts = {
        seed: seed.toString(),
        mode: "blackout",
        lang: "name",
    };

    const board = (bingoFunc(bingoList, bingoOpts) as unknown as Goal[])
        .map(goal => goal.name);
    board.shift();
    return board;
}
