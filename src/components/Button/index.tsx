import React, { FC, useRef, useState } from "react";
import { HEADER_BUTTON_LIST } from "../../constants/Link";
import { CURSOR_POSITION, HEADER_BUTTON } from "../../type";
import { InitialCursorDiv } from "../Animation";

type ButtonProps = {
  children: React.ReactNode;
};

type HeaderButtonProps = {
  item: HEADER_BUTTON;
  currentPos: CURSOR_POSITION;
  setPosition: (pos: CURSOR_POSITION) => void;
};

export const NormalButton: FC<ButtonProps> = ({ children }) => {
  return (
    <h4
      className="codeblaze-text codeblaze-styles-preset-1nt88v3"
      data-styles-preset="e67rss72C"
    >
      {children}
    </h4>
  );
};

export const HeaderButton: FC<HeaderButtonProps> = ({
  item,
  currentPos,
  setPosition,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const setPos = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width: width, opacity: 1 });
  };

  const setInitialPos = () => {
    setPosition({
      left: 121,
      width: 133,
      opacity: 1,
    });
  };

  return (
    <a
      className="codeblaze-1frhuhs codeblaze-a2hxmi rounded-[5px]"
      data-codeblaze-name="Contact"
      href={item.link}
      ref={ref}
      onMouseEnter={setPos}
      onMouseLeave={setInitialPos}
    >
      <div
        className="codeblaze-cevu97 outline-none flex flex-col justify-start flex-shrink-0 text-white text-[#0099ff] underline transform-none"
        data-codeblaze-component-type="RichTextContainer"
      >
        <p className="codeblaze-text font-[Switzer] text-white text-[14px] tracking-[0px]">
          <span
            data-text-fill="true"
            className={
              (currentPos.left === 0 && item.key === 0) ||
              (currentPos.left > 0 && item.key === 1)
                ? "codeblaze-text bg-gradient-to-r from-white to-[#70befa]"
                : "codeblaze-text bg-[#9c9c9c]"
            }
          >
            {item.title}
          </span>
        </p>
      </div>
      {item.icon !== null && (
        <div className="codeblaze-9xgqfi" data-codeblaze-name="Arrow">
          <div
            className="absolute inset-0 rounded-inherit"
            data-codeblaze-background-image-wrapper="true"
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
  const [position, setPosition] = useState<CURSOR_POSITION>({
    left: 121,
    width: 133,
    opacity: 1,
  });

  return (
    <>
      <InitialCursorDiv pos={position} />
      {HEADER_BUTTON_LIST.map((item: HEADER_BUTTON, index: number) => (
        <HeaderButton
          key={index}
          item={item}
          currentPos={position}
          setPosition={setPosition}
        />
      ))}
    </>
  );
};

export const MobileToggleMenuButton = () => {
  return (
    <div
      className="codeblaze-1v41qs5 border border-solid border-[rgb(34,34,34)] bg-[rgb(15,15,15)] rounded-lg shadow-none"
      data-border="true"
      data-codeblaze-name="Menu"
      data-highlight="true"
      tabIndex={0}
    >
      <div
        className="codeblaze-d0shrp transform -translate-x-1/2 -translate-y-1/2"
        data-codeblaze-name="Hamburger menu"
      >
        <div className="codeblaze-53qt6p bg-[rgb(112,190,250)] rounded-[1px] transform-none"></div>
        <div className="codeblaze-npc2cw bg-[rgb(112,190,250)] rounded-[1px] transform-none"></div>
      </div>
    </div>
  );
};
