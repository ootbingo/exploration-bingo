import React, { useEffect, useState } from "react";
import { Options, parseUrlParams } from "../lib/parseUrlParams";
import { AboutBingo } from "./AboutBingo";
import styled from "styled-components";
import { BingoCard } from "./BingoCard";

export const BingoPage: React.FC = () => {
  const [options, setOptions] = useState<Options | undefined>(undefined);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setOptions(parseUrlParams(urlParams, true));
  }, []);

  if (!options) {
    return null;
  }

  if (options.isPopout) {
    return (
      <PopoutPageDiv>
        <BingoCard options={options} />
      </PopoutPageDiv>
    );
  }

  return (
    <BingoPageDiv id="bingoPage">
      <BingoCard options={options} />
      {!options.isPopout && <AboutBingo />}
    </BingoPageDiv>
  );
};

const BingoPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 964px;
`;

const PopoutPageDiv = styled(BingoPageDiv)`
  max-width: initial;
  flex-direction: column;
  justify-content: center;
`;
