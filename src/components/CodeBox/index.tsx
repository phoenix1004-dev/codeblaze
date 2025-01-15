import { useState } from "react";
import Tabs from "./Tabs";
import Codes from "./Codes";
import {
  SelectedTextArea,
  SelectedTextCursor,
  SelectedTextTooltip,
} from "../Animation";

const CodeBox = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <div
      className="framer-xn01z1 bg-[#0f0f0f] border border-solid border-[#222222] rounded-[10px]"
      data-border="true"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Codes isHover={isHover} selected={selected} />
      <div
        className="framer-1oukmxi border border-solid border-[#222222]"
        data-border="true"
        data-framer-name="Top bar"
      >
        <Tabs selected={selected} setSelected={setSelected} />
        <div
          className="framer-1dcxamb border border-solid border-gray-800 bg-gradient-to-b from-blue-400 to-white rounded-full shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
          data-border="true"
          data-framer-name="Dot 3"
        />
        <div
          className="framer-1x1d8qg border border-solid border-gray-800 bg-gradient-to-b from-blue-400 to-white rounded-full shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
          data-border="true"
          data-framer-name="Dot 2"
        ></div>
        <div
          className="framer-x5ptsh border border-solid border-gray-800 bg-gradient-to-b from-blue-400 to-white rounded-[6px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
          data-border="true"
          data-framer-name="Dot 1"
        ></div>
      </div>
      <div
        className="framer-1muaudk border border-solid border-gray-800 bg-gradient-to-b from-transparent to-[rgba(13,13,13,0.41)] to-[rgba(13,13,13,1)] rounded-[10px]"
        data-border="true"
        data-framer-name="Overlay"
      >
        <SelectedTextCursor
          isActive={isHover}
          from={{ top: 125, left: 227 }}
          to={{ top: 85, left: 150 }}
        />
        <SelectedTextTooltip
          isActive={isHover}
          from={{ top: 140, left: 237 }}
          to={{ top: 100, left: 160 }}
        />
      </div>
      <SelectedTextArea
        isActive={isHover}
        from={{ top: 105, left: 107, width: 140 }}
        to={{ top: 65, left: 30, width: 150 }}
      />
    </div>
  );
};

export default CodeBox;
