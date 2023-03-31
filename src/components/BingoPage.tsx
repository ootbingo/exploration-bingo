import React, { useEffect, useState } from "react";
import { Options, parseUrlParams } from "../lib/parseUrlParams";
import { AboutBingo } from "./AboutBingo";
import styled from "styled-components";
import { BingoCard } from "./BingoCard";
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
    <BingoPageDiv id="bingoPage">
      <BingoCardContainer id="bingoCardContainer">
        {showCard ? (
          <BingoCard options={options!} />
        ) : (
          <ClickToReveal onClick={() => setBoardRevealed(true)} />
        )}
      </BingoCardContainer>

      <AboutBingo />
    </BingoPageDiv>
  );
};

const BingoPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1000px;
`;

const BingoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  min-width: 594px;
  height: 590px;
`;
