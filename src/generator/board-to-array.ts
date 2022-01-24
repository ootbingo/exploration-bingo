import ootBingoGenerator from "./generator";
import {bingoListsByVersion, BingoVersion} from "./bingo-versions";

interface Goal {
    name: string,
}

export function generateBoard(seed: number, version: BingoVersion): string[] {
    const bingoFunc = ootBingoGenerator;
    const bingoList = bingoListsByVersion[version];

    const bingoOpts = {
        seed: seed.toString(),
        mode: "blackout",
        lang: "name",
    };

    const goals = bingoFunc(bingoList, bingoOpts) as unknown as Goal[]
    const board = goals.map(goal => goal.name);
    board.shift();
    return board;
}
