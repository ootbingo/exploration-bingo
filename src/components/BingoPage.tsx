import React, { useEffect, useState } from "react";
import AboutBingo from "./AboutBingo";
import ClickToReveal from "./ClickToReveal";
import BingoCard from "./BingoCard";
import { Options, parseUrlParams } from "../lib/parseUrlParams";

function BingoPage() {
  const [options, setOptions] = useState<Options | undefined>(undefined);
  const [boardRevealed, setBoardRevealed] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setOptions(parseUrlParams(urlParams, true));
  }, []);

  return (
    <div id="bingoPage">
      <AboutBingo />
      {options &&
        (boardRevealed ? (
          <BingoCard options={options} />
        ) : (
          <ClickToReveal onClick={() => setBoardRevealed(true)} />
        ))}
    </div>
  );
}

export default BingoPage;
