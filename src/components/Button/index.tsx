import React, { FC } from "react";

type TextProps = {
  children: React.ReactNode;
};

export const NormalButton: FC<TextProps> = ({ children }) => {
  return (
    <h4
      className="framer-text framer-styles-preset-1nt88v3"
      data-styles-preset="e67rss72C"
    >
      {children}
    </h4>
  );
};
