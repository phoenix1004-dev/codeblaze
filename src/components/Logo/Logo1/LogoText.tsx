import { useState } from "react";
import { HoverMoveTop } from "../../Animation";

const LogoText = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="codeblaze-ckv6z7-container">
      <a
        className="codeblaze-zMOkf codeblaze-16vruse codeblaze-v-16vruse codeblaze-2s0t08 h-full w-full"
        data-codeblaze-name="Logo Phone"
        href="./"
        data-codeblaze-page-link-current="true"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <HoverMoveTop isActive={isActive} from={15} to={-10}>
          <div
            className="codeblaze-m6s0ez outline-none flex flex-col justify-start flex-shrink-0 transform -translate-y-1/2 text-[#0099ff] underline"
            data-codeblaze-component-type="RichTextContainer"
          >
            <p className="codeblaze-text !font-switzer text-white tracking-[0px] translate-y-[2px]">
              <span
                data-text-fill="true"
                className="codeblaze-text bg-white text-[22px]"
              >
                codeblaze
              </span>
            </p>
          </div>
        </HoverMoveTop>
        <HoverMoveTop isActive={isActive} from={30} to={5}>
          <div
            className="codeblaze-c6deyg outline-none flex flex-col justify-start flex-shrink-0 transform -translate-y-1/2 text-[#0099ff] underline !bottom-[-30px]"
            data-codeblaze-component-type="RichTextContainer"
          >
            <p className="codeblaze-text font-switzer text-white tracking-[0px] translate-y-[2px]">
              <span
                data-text-fill="true"
                className="codeblaze-text bg-white text-[22px]"
              >
                codeblaze
              </span>
            </p>
          </div>
        </HoverMoveTop>
      </a>
    </div>
  );
};

export default LogoText;
