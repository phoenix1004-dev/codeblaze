import React, { FC, useRef, useState } from "react";
import { HEADER_BUTTON_LIST } from "../../constants/Link";
import { CursorPosition, HEADER_BUTTON } from "../../type";
import { InitialCursorDiv } from "../Animation";

type ButtonProps = {
  children: React.ReactNode;
};

type HeaderButtonProps = {
  item: HEADER_BUTTON;
  setPosition: (pos: CursorPosition) => void;
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

export const HeaderButton: FC<HeaderButtonProps> = ({ item, setPosition }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const setPos = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    console.log(ref.current.offsetLeft);
    setPosition({ left: ref.current.offsetLeft, width: width, opacity: 1 });
  };

  const setInitialPos = () => {
    setPosition({
      left: 127,
      width: 135,
      opacity: 1,
    });
  };

  return (
    <a
      className="framer-1frhuhs framer-a2hxmi rounded-[5px]"
      data-framer-name="Contact"
      href={item.link}
      ref={ref}
      onMouseEnter={setPos}
      onMouseLeave={setInitialPos}
    >
      <div
        className="framer-cevu97 outline-none flex flex-col justify-start flex-shrink-0 text-white text-[#0099ff] underline transform-none"
        data-framer-component-type="RichTextContainer"
      >
        <p className="framer-text font-[Switzer] text-white text-[14px] tracking-[0px]">
          <span
            data-text-fill="true"
            className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
          >
            {item.title}
          </span>
        </p>
      </div>
      {item.icon !== null && (
        <div className="framer-9xgqfi" data-framer-name="Arrow">
          <div
            className="absolute inset-0 rounded-inherit"
            data-framer-background-image-wrapper="true"
          >
            <img
              className="block w-full h-full rounded-inherit object-center object-cover"
              decoding="async"
              src={item.icon}
              alt="arrow-right"
            />
          </div>
        </div>
      )}
    </a>
  );
};

export const HeaderButtonGroup = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 127,
    width: 135,
    opacity: 1,
  });

  return (
    <>
      <InitialCursorDiv pos={position} />
      {HEADER_BUTTON_LIST.map((item: HEADER_BUTTON, index: number) => (
        <HeaderButton key={index} item={item} setPosition={setPosition} />
      ))}
    </>
  );
};
