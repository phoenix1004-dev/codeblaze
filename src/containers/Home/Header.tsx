import ToggleNav from "../../components/Nav/ToggleNav";
import { HeaderButtonGroup } from "../../components/Button";
import { useState } from "react";
import { InitialLoading } from "../../components/Animation";

const Header = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="framer-13gmy9c-container" id="header">
      <div className="ssr-variant hidden-r5chz7 hidden-5tblbe hidden-ncoutt !contents">
        <header
          className="framer-qcVxT framer-V74Ls framer-1fi3t7c framer-v-qn2nt5 !bg-[#0a0a0a] !h-full !w-full"
          data-framer-name="Loading Animation Part 1 - 1440 &amp; 1200"
          data-highlight="true"
        >
          {!isLoading && <InitialLoading setIsLoading={setIsLoading} />}
          {isLoading && (
            <video
              loop
              preload="auto"
              muted
              autoPlay
              className="absolute cursor-auto w-full h-full rounded-none block object-cover bg-transparent object-center"
              src="https://framerusercontent.com/assets/UEcewUs0sO1esTagR1XENajYHSY.mp4"
            />
          )}
          <ToggleNav />
          {isLoading && (
            <div className="framer-co01ly" data-framer-name="Header text">
              <div
                className="framer-dt8d5q outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none text-[#0099ff] underline"
                data-framer-component-type="RichTextContainer"
              >
                <h1 className="framer-text text-white font-medium tracking-[-3px]">
                  <span
                    data-text-fill="true"
                    className="framer-text !font-outfit leading-normal text-[30px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] bg-gradient-to-r from-white to-[#70bafa] text-center"
                  >
                    <b>Codeblaze</b> a.i engine.
                  </span>
                </h1>
              </div>
              <div
                className="framer-1pn7ziw outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none text-[#0099ff] no-underline"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-85tvh7 !text-[48px] !whitespace-normal !text-center !font-outfit"
                  data-styles-preset="FhU5qX9WL"
                >
                  now anybody easily develop fullstack web apps in just seconds.
                </p>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="framer-alsw2r-container opacity-100">
              <div
                className="framer-Y4gfO framer-uKIIJ framer-w31wm framer-v-w31wm border border-solid border-[#222222] bg-[#0f0f0f] rounded-[10px] !pl-[5px]"
                data-border="true"
                data-framer-name="Contact"
              >
                <HeaderButtonGroup />
              </div>
            </div>
          )}
          <div
            className="framer-suf4l1 filter blur-[75px] webkit-filter blur-[75px]"
            data-framer-name="Background Animation"
          >
            <div
              className="framer-14mkibs-container opacity-[0.001] transform perspective-[1200px]"
              data-framer-appear-id="14mkibs"
            >
              <div className="w-full h-full overflow-hidden bg-[#0a0a0a] transform translate-z-0 rounded-none relative">
                <div id="Gradients">
                  <canvas className="w-full h-full absolute"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-18jtlmv bg-gradient-to-b from-transparent to-[#0a0a0a] via-[#0a0a0a33] via-[49.62%] to-[#0a0a0a80] to-[100%]"
            data-framer-name="Gradient Frame Bottom"
          />
        </header>
        {/* <GradientEffect /> */}
      </div>
    </div>
  );
};

export default Header;
