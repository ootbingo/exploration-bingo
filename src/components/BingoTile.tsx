import React from "react"

interface BingoTileProps {
    rows: string[],
    color: string,
    goal: string,
    hidden: boolean,
    onClick: () => void
}

function BingoTile(props:BingoTileProps) {

    let classes = props.rows;

    if (props.color === "green") {
        classes.push("greensquare")
    }
    if (props.color === "red") {
        classes.push("redsquare")
    }

    if (props.hidden) {
        classes.push("hidden")
    }

    const className = classes.join(" ")

    return (
        <td className = {className} onClick={props.onClick}>
            {props.goal}
        </td>
    )
}

export default BingoTile