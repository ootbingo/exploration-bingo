import React from "react";

interface Props {
  onClick: () => void;
}

export const ClickToReveal: React.FC<Props> = ({ onClick }) => {
  return (
    <div id="clickToReveal" onClick={onClick}>
      Click to reveal
    </div>
  );
};
