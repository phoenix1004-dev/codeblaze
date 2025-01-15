import React, { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const NormalButton: FC<ButtonProps> = ({ children }) => {
  return (
    <h4
      className="framer-text framer-styles-preset-1nt88v3"
      data-styles-preset="e67rss72C"
    >
      {children}
    </h4>
  );
};
