import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../../../assets/image";
import { NAV_MENU } from "../../../constants/Link";
import { MENULINK } from "../../../type";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("asda");
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className="fixed top-3 h-[40px] !bg-[#222222] z-[9999] lg:hidden"
      style={{ width: "90%" }}
    >
      <div className="h-full flex items-center">
        <img className="w-[100px]" src={logo} alt="log" />
        <GiHamburgerMenu
          className="absolute right-4"
          size={20}
          onClick={() => toggleMenu()}
        />
        <div
          className="absolute top-[40px] w-full flex flex-col gap-2"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {NAV_MENU.map((item: MENULINK, index: number) => (
            <div
              key={index}
              className="w-full text-white bg-[#222222] text-[20px] px-[20px] py-[3px] bg-opacity-90"
            >
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
