import { motion } from "framer-motion";
import React, { FC } from "react";
import { CursorPosition } from "../../type";

type HoverMoveTopProps = {
  isActive: boolean;
  from: number;
  to: number;
  children: React.ReactNode;
};

type MenuCursorProps = {
  pos: CursorPosition;
};

export const HoverMoveTop: FC<HoverMoveTopProps> = ({
  isActive,
  from,
  to,
  children,
}) => {
  return (
    <motion.div
      animate={{ y: isActive ? to : from }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const MenuCursor: FC<MenuCursorProps> = ({ pos }) => {
  return (
    <motion.div
      className="absolute z-0 h-[35px] bg-red border border-solid rounded-[6px]"
      style={{ borderColor: "rgba(112, 190, 250, 0.75)" }}
      animate={pos}
    />
  );
};
