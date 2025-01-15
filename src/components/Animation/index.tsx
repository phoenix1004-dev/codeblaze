import { motion } from "framer-motion";
import React, { FC } from "react";
import { CURSOR_POSITION, Pointer, RECT_CURSOR } from "../../type";

type HoverMoveTopProps = {
  isActive: boolean;
  from: number;
  to: number;
  className?: string;
  children: React.ReactNode;
};

type CursorProps = {
  pos: CURSOR_POSITION;
};

type AnimationButtonProps = {
  children: React.ReactNode;
};

type SliderProps = {
  dir: "right" | "left";
  children: React.ReactNode;
};

type AnalyzeBoxProps = {
  className?: string;
  border?: string;
  name?: string;
  isActive: boolean;
  children: React.ReactNode;
};

type ChangeColorTextProps = {
  className?: string;
  isActive: boolean;
  from: string;
  to: string;
  children: React.ReactNode;
};

type SelectedTextAreaProps = {
  isActive: boolean;
  from: RECT_CURSOR;
  to: RECT_CURSOR;
};

type SelectedTextCursorProps = {
  isActive: boolean;
  from: Pointer;
  to: Pointer;
};

type SelectedTextTooltopProps = {
  isActive: boolean;
  from: Pointer;
  to: Pointer;
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

export const CursorDiv: FC<CursorProps> = ({ pos }) => {
  return (
    <motion.div
      className="absolute z-0 h-[35px] bg-red border border-solid rounded-[6px]"
      style={{ borderColor: "rgba(112, 190, 250, 0.75)" }}
      animate={pos}
    />
  );
};

export const ClickableCursorDiv: FC<CursorProps> = ({ pos }) => {
  return (
    <motion.div
      className="framer-oggjeu border border-solid border-gray-800 bg-gray-900 rounded-[5px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
      animate={pos}
      data-border="true"
    />
  );
};

export const InitialCursorDiv: FC<CursorProps> = ({ pos }) => {
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

export const AnalyzeBox: FC<AnalyzeBoxProps> = ({
  className,
  border,
  name,
  isActive,
  children,
}) => {
  return (
    <motion.div
      className={`${className} border border-solid border-[rgba(34,34,34)] rounded-[5px]`}
      data-border={border}
      data-framer-name={name}
      animate={{
        boxShadow: isActive
          ? "0 0 2px 0.5px rgba(112, 190, 250, 0.75)"
          : "0 0 2px 0.5px rgba(112, 190, 250, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const AnalyzeBlur = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="framer-1c27g3o border border-solid border-[#222222] rounded-lg"
      data-border="true"
      animate={{
        background: isActive
          ? "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(13, 13, 13, 0.75) 100%)"
          : "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgb(13, 13, 13) 100%)",
      }}
    />
  );
};

export const ChangeColorText: FC<ChangeColorTextProps> = ({
  className,
  isActive,
  from,
  to,
  children,
}) => {
  return (
    <motion.p
      className={className}
      animate={{ color: isActive ? to : from }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.p>
  );
};

export const SelectedTextArea: FC<SelectedTextAreaProps> = ({
  isActive,
  from,
  to,
}) => {
  return (
    <motion.div
      className="framer-1l8m52c border border-solid border-gray-800 rounded-[2px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
      data-border="true"
      data-framer-name="Code highlighter"
      animate={isActive ? to : from}
    />
  );
};

export const SelectedTextCursor: FC<SelectedTextTooltopProps> = ({
  isActive,
  from,
  to,
}) => {
  return (
    <motion.div
      className="framer-1lsin23 opacity-75"
      data-framer-name="Pointer"
      animate={isActive ? to : from}
    >
      <div
        className="absolute rounded-[inherit] top-0 right-0 bottom-0 left-0"
        data-framer-background-image-wrapper="true"
      >
        <img
          decoding="async"
          src="https://framerusercontent.com/images/rvmRoFIcGrHNamGkuTyVS7imKU.png"
          alt="telegram"
          className="block w-full h-full rounded-[inherit] object-center object-cover"
        />
      </div>
    </motion.div>
  );
};

export const SelectedTextTooltip: FC<SelectedTextCursorProps> = ({
  isActive,
  from,
  to,
}) => {
  return (
    <motion.div
      className="framer-1ywhfnj border border-solid border-gray-800 bg-gray-900 rounded-[5px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
      data-border="true"
      data-framer-name="User name"
      animate={isActive ? to : from}
    >
      <div
        className="framer-h1p7s4 outline-none flex flex-col justify-start flex-shrink-0 text-white hover:text-blue-500 underline transform -translate-x-1/2 -translate-y-1/2"
        data-framer-component-type="RichTextContainer"
      >
        <p className="framer-text font-sans text-[14px] tracking-normal text-white">
          <span
            data-text-fill="true"
            className="framer-text bg-gradient-to-r from-white to-blue-400"
          >
            Tibor
          </span>
        </p>
      </div>
    </motion.div>
  );
};
