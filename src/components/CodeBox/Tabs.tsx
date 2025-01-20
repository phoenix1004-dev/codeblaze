import { FC, useState } from "react";
import { CodeTabs } from "../../constants/CodeTabs";
import { ClickableCursorDiv } from "../Animation";
import Tab from "./Tab";
import { CURSOR_POSITION, TAB } from "../../type";

type Props = {
  selected: number;
  setSelected: (value: number) => void;
};

const Tabs: FC<Props> = ({ selected, setSelected }) => {
  const [position, setPosition] = useState<CURSOR_POSITION>({
    left: 6,
    width: 57,
    opacity: 1,
  });

  return (
    <div
      className="codeblaze-11sdx13 border border-solid border-gray-800 bg-[#0c0c0c] rounded-[10px]"
      data-border="true"
      data-codeblaze-name="HTML/React/CSS"
    >
      <ClickableCursorDiv pos={position} />
      {CodeTabs.map((item: TAB, index: number) => (
        <Tab
          key={index}
          item={item}
          selected={selected}
          setPosition={setPosition}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Tabs;
