import { useState } from "react";
import { NAV_MENU } from "../../constants/Link";
import { CursorPosition, MenuLink } from "../../type";
import { CursorDiv } from "../Animation";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <div
      className="framer-bhlto9 border border-solid border-[#222222] backdrop-blur-[0px] bg-[#0f0f0f] rounded-[10px]"
      data-border="true"
      data-framer-name="Menu"
    >
      <CursorDiv pos={position} />
      {NAV_MENU.map((item: MenuLink, index: number) => (
        <MenuItem
          key={index}
          item={item}
          currentPos={position}
          setPosition={setPosition}
        />
      ))}
    </div>
  );
};

export default MenuList;
