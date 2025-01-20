import ToggleNav from "../../components/Nav/ToggleNav";
import { HeaderButtonGroup } from "../../components/Button";
import { useState } from "react";
import { InitialLoading } from "../../components/Animation";
import MobileNav from "../../components/Nav/MobileNav";
import { bgVideo } from "../../assets/video";

const Header = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="framer-13gmy9c-container" id="header">
      <div className="ssr-variant hidden-r5chz7 hidden-5tblbe hidden-ncoutt !contents">
        <header
          className="framer-qcVxT framer-V74Ls framer-1fi3t7c framer-v-qn2nt5 !bg-[#0a0a0a] !h-full !w-full bg-black"
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
              playsInline
              className="absolute right-[-10px] cursor-auto h-full rounded-none block object-cover bg-transparent object-center"
              src={bgVideo}
            />
          )}
          <MobileNav />
          <ToggleNav />
          {isLoading && (
            <>
              <div
                className="absolute bg-black"
                style={{
                  width: "100%",
                  height: "150%",
                  filter: "blur(80px)",
                  transform: "translate(-50%, 0)",
                }}
              />
              <div
                className="absolute left-0 h-full w-full lg:w-3/5"
                style={{ alignContent: "center" }}
              >
                <div
                  className="framer-co01ly !pl-[20px] lg:!pl-[80px]"
                  style={{ alignItems: "start" }}
                  data-framer-name="Header text"
                >
                  <div
                    className="framer-dt8d5q outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none text-[#0099ff] underline"
                    data-framer-component-type="RichTextContainer"
                  >
                    <h1 className="framer-text text-white font-medium tracking-[-3px]">
                      <span
                        data-text-fill="true"
                        className="framer-text leading-[40px] sm:leading-[60px] md:leading-[64px] lg:leading-[64px] xl:leading-[90px] 2xl:leading-[120px] text-[40px] sm:text-[60px] md:text-[64px] lg:text-[64px] xl:text-[90px] 2xl:text-[120px] bg-gradient-to-r from-white to-[#70bafa]"
                        style={{ fontWeight: 500 }}
                      >
                        Develop fullstack
                        <br />
                        apps 100x{" "}
                        <span className="font-playfair">
                          <i>faster</i>
                        </span>
                        .
                      </span>
                    </h1>
                  </div>
                  <div
                    className="framer-1pn7ziw outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none text-[#0099ff] no-underline"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-85tvh7  !whitespace-normal text-[12px] sm:!text-[16px] md:!text-[20px] lg:!text-[26px] xl:!text-[30px]"
                      data-styles-preset="FhU5qX9WL"
                    >
                      Rapidly ideate, create, and deploy powerful platforms in
                      just seconds
                    </p>
                  </div>
                </div>
                <div className="framer-alsw2r-container opacity-100 mt-[20px] ml-[20px] lg:ml-[80px] w-full">
                  <div
                    className="framer-Y4gfO framer-uKIIJ framer-w31wm framer-v-w31wm border border-solid border-[#222222] bg-[#0f0f0f] rounded-[10px] !pl-[5px]"
                    data-border="true"
                    data-framer-name="Contact"
                  >
                    <HeaderButtonGroup />
                  </div>
                </div>
              </div>
            </>
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
