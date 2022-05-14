import React, { useState } from "react";
import AboutBingo from "./AboutBingo";
import ClickToReveal from "./ClickToReveal";
import BingoCard from "./BingoCard";

function BingoPage() {
  const [boardRevealed, setBoardRevealed] = useState(false);

  const bingoContent = boardRevealed ? (
    <BingoCard />
  ) : (
    <ClickToReveal onClick={() => setBoardRevealed(true)} />
  );

  return (
    <div id="bingoPage">
      <AboutBingo />
      {bingoContent}
    </div>
  );
}

export default BingoPage;
