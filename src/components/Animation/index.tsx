import { motion } from "framer-motion";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { CURSOR_POSITION, POINTER, RECT_CURSOR, STAR } from "../../type";
import { arrowRight } from "../../assets/image";

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
  time?: number;
  pos?: string;
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
  from: POINTER;
  to: POINTER;
};

type SelectedTextTooltopProps = {
  isActive: boolean;
  from: POINTER;
  to: POINTER;
};

type ToggleAnswerTextProps = {
  isActive: boolean;
  children: ReactNode;
};

type RotateButtonProps = {
  isActive: boolean;
};

type InitialLoadingProps = {
  setIsLoading: (res: boolean) => void;
};

type MoveIndicatorProps = {
  isActive: boolean;
  from: POINTER;
  to: POINTER;
  className: string;
  name: string;
  children: ReactNode;
};

type MemberIndicatorProps = {
  name: string;
};

type InitialAppearanceProps = {
  className?: string;
  style?: any;
  from: POINTER;
  to: POINTER;
  time: number;
  delay?: number;
  children: ReactNode;
};

type PriceIndicatorProps = {
  status: {
    top: number;
    left: number;
    width: number;
  };
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

export const Slider: FC<SliderProps> = ({
  dir,
  time = 10,
  pos = "-51%",
  children,
}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 flex space-x-4 overflow-hidden"
      initial={{ x: dir === "right" ? pos : 0 }}
      animate={{ x: dir === "right" ? 0 : pos }}
      transition={{
        ease: "linear",
        duration: time,
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

export const ToggleAnswerText: FC<ToggleAnswerTextProps> = ({
  isActive,
  children,
}) => {
  return (
    <motion.p
      className="framer-text font-switzer !text-[15px] !text-[#9c9c9c]"
      animate={{
        marginBottom: isActive ? "20px" : "0px",
        height: isActive ? "70px" : "0px",
        display: isActive ? "block" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.p>
  );
};

export const RotateButton: FC<RotateButtonProps> = ({ isActive }) => {
  return (
    <>
      <motion.div
        className="framer-106aa87 bg-gradient-to-l from-white to-blue-400 rounded-lg"
        animate={{ rotate: isActive ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="framer-35xf77 bg-gradient-to-b from-white to-blue-400 rounded-lg"
        animate={{ rotate: isActive ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export const RealCursorPointer = ({ isActive }: { isActive: boolean }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-[#70befa] rounded-full pointer-events-none z-[9999]"
      style={{
        opacity: isActive ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
      }}
    />
  );
};

export const InitialLoading: FC<InitialLoadingProps> = ({ setIsLoading }) => {
  const [step, setStep] = useState<number>(0);

  const spanAnimates = [
    { y: 0, opacity: 1 },
    { y: 0, opacity: 1 },
    { y: -225, opacity: 0 },
  ];
  const borderAnimates = [{}, { x: 0, opacity: 1 }, { x: 408, opacity: 0 }];

  useEffect(() => {
    if (step <= 2) return;
    setIsLoading(true);
  }, [setIsLoading, step]);

  return (
    <div className="relative h-auto overflow-hidden z-[9999]">
      <motion.span
        data-text-fill="true"
        className="framer-text relative leading-normal text-[64px] md:text-[90px] lg:text-[120px] bg-gradient-to-r from-white to-[#70befa]"
        initial={{ y: 225, opacity: 0 }}
        animate={spanAnimates[step]}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setStep((prev) => prev + 1)}
      >
        codeblaze
      </motion.span>
      <motion.div
        className="absolute w-full h-0.5 bottom-0 bg-gradient-to-r from-white to-[#70bafa]"
        initial={{ x: -408, opacity: 0 }}
        animate={borderAnimates[step]}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setStep((prev) => prev + 1)}
      />
    </div>
  );
};

export const ShootingStar = () => {
  const [stars, setStars] = useState<STAR[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const angle = Math.random() * 360;
      const distance = Math.random() * 300 + 100;
      const newStar = {
        id: Date.now(),
        angle,
        distance,
        duration: Math.random() * 2 + 10,
      };

      setStars((prevStars) => [...prevStars, newStar]);

      setTimeout(() => {
        setStars((prevStars) =>
          prevStars.filter((star) => star.id !== newStar.id)
        );
      }, (newStar.duration + 0.5) * 1000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {stars.map((star) => {
        const endX = Math.cos((star.angle * Math.PI) / 180) * star.distance;
        const endY = Math.sin((star.angle * Math.PI) / 180) * star.distance;

        return (
          <motion.div
            key={star.id}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              x: endX,
              y: endY,
              opacity: 0,
            }}
            transition={{
              duration: star.duration,
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 w-[2px] h-[2px] bg-white rounded-full translate-x-1/2 translate-y-1/2"
            style={{
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
          />
        );
      })}
    </div>
  );
};

export const MoveIndicator: FC<MoveIndicatorProps> = ({
  isActive,
  from,
  to,
  className,
  name,
  children,
}) => {
  return (
    <motion.div
      className={`${className} border border-solid border-gray-800 rounded-xl backdrop-blur-sm shadow-md`}
      data-border="true"
      data-framer-name={name}
      animate={isActive ? to : from}
    >
      {children}
    </motion.div>
  );
};

export const MemberIndicator: FC<MemberIndicatorProps> = ({ name }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 border border-solid border-[#70befa] rounded-[8px] z-[10] !p-[10px] pointer-events-none ${
        name === "" ? "hidden" : "flex"
      }`}
      style={{
        backgroundColor: "rgba(250, 250, 250, 0.1)",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
      }}
    >
      <p className="framer-text gap-2 justify-center font-sans text-white text-base tracking-normal">
        <span
          data-text-fill="true"
          className="framer-text bg-gradient-to-r from-white to-blue-400"
        >
          {name}
        </span>
      </p>
      <img className="w-4 h-4" src={arrowRight} alt="member-indicator" />
    </motion.div>
  );
};

export const InitialAppearance: FC<InitialAppearanceProps> = ({
  className = "",
  style = {},
  from,
  to,
  time,
  delay = 0,
  children,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ ...from, opacity: 0 }}
      whileInView={{ ...to, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: time, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const PriceIndicator: FC<PriceIndicatorProps> = ({ status }) => {
  return (
    <motion.div
      className="framer-ooxt3h border border-solid border-[rgb(34,34,34)] bg-[rgb(22,22,22)] rounded-[5px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
      data-border="true"
      animate={status}
      transition={{ duration: 0.3 }}
    />
  );
};
