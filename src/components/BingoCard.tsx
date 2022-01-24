import React, {useState} from "react"
import BingoBoard from "./BingoBoard"
import {generateBoard} from "../generator/board-to-array"
import BingoInfo from "./BingoInfo";
import {DEFAULT_VERSION, isBingoVersion} from "../generator/bingo-versions";

const urlParams = new URLSearchParams(window.location.search)

const urlSeed = urlParams.get("seed");
const seed = parseInt(urlSeed || '') || Math.floor(Math.random() * 999999)

const urlVersion = urlParams.get("version");
const version = isBingoVersion(urlVersion) ? urlVersion : DEFAULT_VERSION;

if (seed.toString() !== urlSeed || version !== urlVersion) {
    urlParams.set('version', version);
    urlParams.set('seed', seed.toString());
    window.location.search = urlParams.toString();
}

const explorationSeed = seed + 1765913
const goals = generateBoard(explorationSeed, version);

function BingoCard() {
    const [goalsCompleted, setGoalsCompleted] = useState(0);
    const onGreen = () => setGoalsCompleted(goalsCompleted + 1)
    const onRed = () => setGoalsCompleted(goalsCompleted - 1)

    if (seed === -1) {
        return <></>
    }

    return (
        <>
            <BingoBoard goals={goals} seed={seed} onGreen={onGreen} onRed={onRed}/>
            <BingoInfo seed={seed} version={version} goalsCompleted={goalsCompleted}/>
        </>
    )
}

export default BingoCard