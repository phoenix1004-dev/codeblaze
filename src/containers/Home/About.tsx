import {
  AnimationButton,
  InitialAppearance,
  Slider,
} from "../../components/Animation";
import { FlowIcons } from "../../constants/FlowIcons";
import { IMAGE } from "../../type";

const About = () => {
  return (
    <section
      className="framer-1nwhh6k overflow-auto"
      data-framer-name="About"
      id="about"
      data-name="About"
    >
      <div className="absolute w-full h-[130px] top-0 left-0">
        <div className="relative w-full h-full overflow-x-hidden">
          <Slider dir="left" time={40}>
            <div className="flex gap-10 my-10">
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
              {FlowIcons.map((item: IMAGE, index: number) => (
                <img
                  className="w-[50px] h-[50px]"
                  key={index}
                  src={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </Slider>
        </div>
      </div>
      <InitialAppearance
        className="framer-od6gw3 -translate-y-12"
        data-framer-name="Text &amp; Button"
        data-name="Text &amp; Button"
        from={{ top: 30, left: 0 }}
        to={{ top: 0, left: 0 }}
        time={0.5}
      >
        <div className="framer-wt8gf5" data-framer-name="Text" data-name="Text">
          <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 hidden-5tblbe hidden-ncoutt !contents">
            <div
              className="framer-phcsba outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform perspective-[1200px]"
              data-framer-component-type="RichTextContainer"
            >
              <h3 className="framer-text !leading-normal">
                <span
                  data-text-fill="true"
                  className="framer-text bg-gradient-to-r from-white to-[#70bffa] text-white text-center text-[18px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-medium tracking-normal w-full"
                  style={{
                    fontFamily: "Outfit",
                    fontStyle: "ExtraLight",
                    fontWeight: 200,
                  }}
                >
                  Build, deploy, and collaborate seamlessly with our
                  browser-based platform designed for the future of{" "}
                  <span
                    className="font-playfair"
                    style={{ fontStyle: "italic" }}
                  >
                    <b>fullstack web development</b>
                  </span>
                  .
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="framer-fl9649-container opacity-100 transform translate-y-[10px]"
          style={{ transform: "perspective(1200px)" }}
        >
          <div className="flex gap-3 ml-2">
            <AnimationButton>
              <p className="text-white px-1 py-0.5 text-[10px] sm:text-[16px] md:text-[20px] xl:text-[24px]">
                Beta Launch
              </p>
            </AnimationButton>
            <p className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] xl:text-[24px]">
              apply for early access
            </p>
          </div>
          {/* <AnimationButton>
            <div
              className="framer-m2G2h framer-1x78atm framer-v-1x78atm bg-[#222222] rounded-[8px]"
              data-framer-name="Button State 1"
              data-highlight="true"
            >
              <div
                className="framer-qdqyn3 rounded-[10px] !relative"
                data-framer-name="Stroke"
              >
                <div
                  className="framer-1ckdakb rounded-[8px]"
                  data-framer-name="Fill"
                />
                <div
                  className="framer-w410ah"
                  data-framer-component-type="RichTextContainer outline-none flex flex-col justify-start flex-shrink-0 text-white text-[#0099ff] underline"
                >
                  <h4 className="framer-text">
                    <span
                      data-text-fill="true"
                      className="framer-text bg-gradient-to-r from-white to-[#70bffa] font-switzer text-white text-[14px] tracking-normal"
                    >
                      Sign Up Now
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </AnimationButton> */}
        </div>
      </InitialAppearance>
      {/* <div className="ssr-variant hidden-wbkh13 hidden-5tblbe hidden-72rtr7 hidden-ncoutt !contents">
        <div
          className="framer-pox1sj outline-none flex flex-col justify-start shrink-0 !w-full !h-full transform !-translate-x-1/2 !bottom-0 lg:bottom-0"
          data-framer-name="Background Text"
          data-framer-component-type="RichTextContainer"
        >
          <img
            className="w-full h-full bg-contain"
            src={bgCodeblaze}
            alt="codeblaze"
          />
        </div>
      </div> */}
    </section>
  );
};

export default About;
