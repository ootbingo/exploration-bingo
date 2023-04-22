import React from "react";
import styled, { css } from "styled-components";
import { Colors } from "../GlobalStyle";

interface Props {
  name: string;
  onClick?: () => void;
}

export const PopoutTile: React.FC<Props> = ({ name, onClick }) => {
  return <StyledTile onClick={onClick}>{name}</StyledTile>;
};

const StyledTile = styled.td<{ onClick?: () => void }>`
  text-align: center;
  padding: 5px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  background: ${Colors.darkestBlue};
  font-size: 75%;
  color: ${Colors.lightBlue};
  font-weight: 700;
  border: 1px ${Colors.mediumBlue} solid;
  text-transform: uppercase;
  max-width: 48px;
  user-select: none;

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;

      &:hover {
        color: ${Colors.white};
        background: ${Colors.brightBlue};
      }
    `}
`;
