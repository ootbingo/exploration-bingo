import React, {useState} from "react"
import BingoBoard from "./BingoBoard"
import {generateBoard} from "../generator/generateBoard"
import BingoInfo from "./BingoInfo";
import {DEFAULT_VERSION, isBingoVersion} from "../generator/bingoVersions";
import {toExplorationMode, toUrlExplorationMode} from "../generator/explorationModes";

const urlParams = new URLSearchParams(window.location.search)

const urlSeed = urlParams.get("seed");
const seed = parseInt(urlSeed || '') || Math.floor(Math.random() * 999999)

const urlVersion = urlParams.get("version");
const version = isBingoVersion(urlVersion) ? urlVersion : DEFAULT_VERSION;

const urlMode = urlParams.get("mode");
const mode = toExplorationMode(urlMode);

if (seed.toString() !== urlSeed || version !== urlVersion || toUrlExplorationMode(mode) !== urlMode) {
    urlParams.set('version', version);
    urlParams.set('mode', toUrlExplorationMode(mode));
    urlParams.set('seed', seed.toString());
    window.location.search = urlParams.toString();
}

const explorationSeed = seed + 1765913
const goals = generateBoard(mode, explorationSeed, version);

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