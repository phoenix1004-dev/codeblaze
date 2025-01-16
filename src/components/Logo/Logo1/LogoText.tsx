import { useState } from "react";
import { HoverMoveTop } from "../../Animation";

const LogoText = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="framer-ckv6z7-container">
      <a
        className="framer-zMOkf framer-16vruse framer-v-16vruse framer-2s0t08 h-full w-full"
        data-framer-name="Logo Phone"
        href="./"
        data-framer-page-link-current="true"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <HoverMoveTop isActive={isActive} from={15} to={-10}>
          <div
            className="framer-m6s0ez outline-none flex flex-col justify-start flex-shrink-0 transform -translate-y-1/2 text-[#0099ff] underline"
            data-framer-component-type="RichTextContainer"
          >
            <p className="framer-text !font-switzer text-white tracking-[0px] translate-y-[2px]">
              <span
                data-text-fill="true"
                className="framer-text bg-white text-[22px]"
              >
                Halo
              </span>
            </p>
          </div>
        </HoverMoveTop>
        <HoverMoveTop isActive={isActive} from={30} to={5}>
          <div
            className="framer-c6deyg outline-none flex flex-col justify-start flex-shrink-0 transform -translate-y-1/2 text-[#0099ff] underline !bottom-[-30px]"
            data-framer-component-type="RichTextContainer"
          >
            <p className="framer-text font-switzer text-white tracking-[0px] translate-y-[2px]">
              <span
                data-text-fill="true"
                className="framer-text bg-white text-[22px]"
              >
                Halo
              </span>
            </p>
          </div>
        </HoverMoveTop>
      </a>
    </div>
  );
};

export default LogoText;
