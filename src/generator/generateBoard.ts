import {bingoListsByVersion, BingoVersion} from "./bingoVersions";
import ootBingoGenerator from "./generator";

interface Goal {
    name: string,
}

export function generateBoard(mode: 'blackout' | 'shortBlackout', seed: number, version: BingoVersion): string[] {
    const bingoFunc = ootBingoGenerator;
    const bingoList = bingoListsByVersion[version];

    const bingoOpts = {
        seed: seed.toString(),
        mode: mode,
        lang: "name",
    };

    const goals = bingoFunc(bingoList, bingoOpts) as unknown as Goal[]
    const board = goals.map(goal => goal.name);
    board.shift();
    return board;
}
