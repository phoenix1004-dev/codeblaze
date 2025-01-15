import { motion } from "framer-motion";
import React, { FC } from "react";

type HoverMoveTopProps = {
  isActive: boolean;
  from: number;
  to: number;
  children: React.ReactNode;
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
