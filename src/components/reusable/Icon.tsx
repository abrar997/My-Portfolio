import React from "react";
import { GiButterflyFlower } from "react-icons/gi";

type iconProps = {
  size?: string;
  isTeal?: boolean;
};

const Icon = ({ size, isTeal }: iconProps) => {
  return (
    <GiButterflyFlower
      className={`${size} ${isTeal ? "text-teal-600" : "text-primary"}`}
    />
  );
};

export default Icon;
