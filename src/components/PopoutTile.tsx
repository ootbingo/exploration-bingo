import React from "react";

interface Props {
  name: string;
}

export const PopoutTile: React.FC<Props> = ({ name }) => {
  return <td className="popout">{name}</td>;
};
