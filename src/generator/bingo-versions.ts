import {bingoList as bingoList_v9_4} from "./goallist-v9-4";
import {bingoList as bingoList_v10_0} from "./goallist-v10-0";
import {bingoList as bingoList_v10_1} from "./goallist-v10-1";

export const DEFAULT_VERSION: BingoVersion = 'v10.1';

export const bingoListsByVersion = {
    'v9.4': bingoList_v9_4,
    'v10.0': bingoList_v10_0,
    'v10.1': bingoList_v10_1
}

export type BingoVersion = keyof typeof bingoListsByVersion;

export const isBingoVersion = (str: string | null): str is BingoVersion => {
    return Object.keys(bingoListsByVersion).includes(str || '');
}



