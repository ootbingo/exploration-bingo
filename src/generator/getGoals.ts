import {bingoListsByVersion, BingoVersion} from "./bingoVersions";
import {generateBoard} from 'oot-bingo-generator'

export function getGoals(mode: 'blackout' | 'shortBlackout', seed: number, version: BingoVersion): string[] {

    const bingoList = bingoListsByVersion[version];

    const card = generateBoard(bingoList as any, mode, seed);
    return card.goals.map(goal => goal.name);
}
