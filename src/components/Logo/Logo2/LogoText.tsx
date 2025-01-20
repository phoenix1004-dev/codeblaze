import { useState } from "react";
import { HoverMoveTop } from "../../Animation";

const LogoText = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="codeblaze-1oprh4s-container opacity-100">
      <a
        className="codeblaze-SHlZl codeblaze-qlriss codeblaze-v-qlriss codeblaze-xqedti !h-full !w-full opacity-100 !w-[48px]"
        data-codeblaze-name="Navigation Logo"
        href="./"
        data-codeblaze-page-link-current="true"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <HoverMoveTop isActive={isActive} from={0} to={-20}>
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
        <HoverMoveTop isActive={isActive} from={25} to={5}>
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
