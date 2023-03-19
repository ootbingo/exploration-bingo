import React, { useEffect, useState } from "react";
import { Options, parseUrlParams } from "../lib/parseUrlParams";
import { BingoCard } from "./BingoCard";
import { AboutBingo } from "./AboutBingo";
import { ClickToReveal } from "./ClickToReveal";

export const BingoPage: React.FC = () => {
  const [options, setOptions] = useState<Options | undefined>(undefined);
  const [boardRevealed, setBoardRevealed] = useState(false);

  const showCard = boardRevealed && !!options;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setOptions(parseUrlParams(urlParams, true));
  }, []);

  return (
    <div id="bingoPage">
      <AboutBingo />
      {showCard ? (
        <BingoCard options={options} />
      ) : (
        <ClickToReveal onClick={() => setBoardRevealed(true)} />
      )}
    </div>
  );
};
