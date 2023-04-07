import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

interface Props extends PropsWithChildren {
  url: string;
  isSelected?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = ({ url, isSelected, className, children }) => {
  return (
    <StyledButton href={url} $isSelected={isSelected} className={className}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: ${Colors.mediumGrey};
  background-image: linear-gradient(to bottom, ${Colors.mediumGrey}, ${Colors.darkGrey});
  border-width: 2px;
  border-style: solid;
  border-color: #4c4c4c #262626 #262626 #474747;
  text-align: center;
  font-weight: bold;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.lightBlue};
    background-image: linear-gradient(to bottom, ${Colors.lightBlue}, ${Colors.brightBlue});
    border-color: #4e7de2 #102a63 #102a63 #4576e0;
    color: ${Colors.white};
  }

  &:active {
    background-color: ${Colors.brightBlue};
    background-image: none;
    border-color: #164fc5 #071a40 #071a40 #154cbc;
    color: ${Colors.white};
  }

  ${(props) => props.$isSelected && `border-color: ${Colors.lightBlue} !important`}
`;
