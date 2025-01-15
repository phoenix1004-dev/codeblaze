import { motion } from "framer-motion";
import React, { FC } from "react";
import { CURSOR_POSITION } from "../../type";

type HoverMoveTopProps = {
  isActive: boolean;
  from: number;
  to: number;
  className?: string;
  children: React.ReactNode;
};

type MenuCursorProps = {
  pos: CURSOR_POSITION;
};

type AnimationButtonProps = {
  children: React.ReactNode;
};

type SliderProps = {
  dir: "right" | "left";
  children: React.ReactNode;
};

export const HoverMoveTop: FC<HoverMoveTopProps> = ({
  isActive,
  from,
  to,
  className,
  children,
}) => {
  return (
    <motion.div
      className={className}
      animate={{ y: isActive ? to : from }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const CursorDiv: FC<MenuCursorProps> = ({ pos }) => {
  return (
    <motion.div
      className="absolute z-0 h-[35px] bg-red border border-solid rounded-[6px]"
      style={{ borderColor: "rgba(112, 190, 250, 0.75)" }}
      animate={pos}
    />
  );
};

export const InitialCursorDiv: FC<MenuCursorProps> = ({ pos }) => {
  return (
    <motion.div
      className="absolute z-0 h-[35px] bg-red border border-solid rounded-[6px]"
      style={{ borderColor: "rgba(112, 190, 250, 0.75)" }}
      animate={pos}
    />
  );
};

export const AnimationButton: FC<AnimationButtonProps> = ({ children }) => {
  return (
    <motion.div
      className="border-[0.3px] border-transparent rounded-[8px]"
      initial={{
        backgroundImage:
          "linear-gradient(to right, #0a0a0a, #0a0a0a), linear-gradient(0deg, #70befa, #0a0a0a 40%)",
      }}
      animate={{
        backgroundImage:
          "linear-gradient(to right, #0a0a0a, #0a0a0a), linear-gradient(360deg, #70befa, #0a0a0a 40%)",
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "padding-box, border-box",
      }}
    >
      {children}
    </motion.div>
  );
};

export const Slider: FC<SliderProps> = ({ dir, children }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 flex space-x-4"
      initial={{ x: dir === "right" ? "-51%" : 0 }}
      animate={{ x: dir === "right" ? 0 : "-51%" }}
      transition={{
        ease: "linear",
        duration: 10,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
