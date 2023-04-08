import React from "react";
import { BingoVersion } from "oot-bingo-lists";
import { displayExplorationMode, ExplorationMode } from "../lib/explorationModes";
import { StartTilesMode } from "../lib/startingTileModes";
import styled from "styled-components";

interface Props {
  seed: number;
  version: BingoVersion;
  mode: ExplorationMode;
  startTilesMode: StartTilesMode;
  goalsCompleted: number;
}

export const BingoInfo: React.FC<Props> = ({
  seed,
  version,
  mode,
  startTilesMode,
  goalsCompleted,
}) => {
  return (
    <InfoDiv id="bingoInfo">
      <InfoRow id="cardInfo">
        <InfoItem>
          Version: <strong>{version}</strong>
        </InfoItem>
        <InfoItem>
          Seed: <strong>{seed}</strong>
        </InfoItem>
        <InfoItem>
          Mode: <strong>{displayExplorationMode(mode)}</strong>
        </InfoItem>
        <InfoItem>
          Start tiles: <strong>{startTilesMode}</strong>
        </InfoItem>
      </InfoRow>
      <InfoRow>
        <InfoItem>
          Completed goals: <strong>{goalsCompleted}</strong>
        </InfoItem>
      </InfoRow>
    </InfoDiv>
  );
};

const InfoDiv = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  @media only screen and (max-height: 450px) {
    display: none;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoItem = styled.p`
  margin-left: 12px;
`;
