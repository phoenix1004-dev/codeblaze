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
    <nav className="fixed top-0 w-full h-[40px] !bg-black z-[9999] lg:hidden">
      <div className="h-full flex items-center">
        <img className="w-[100px]" src={logo} alt="log" />
        <GiHamburgerMenu
          className="absolute right-4"
          size={20}
          color="white"
          onClick={() => toggleMenu()}
        />
        <div
          className="absolute top-[40px] w-full flex flex-col gap-2 bg-white"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {NAV_MENU.map((item: MENULINK, index: number) => (
            <div
              key={index}
              className="w-full text-white bg-black text-[20px] px-[30px] py-[5px] flex justify-end"
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
