import { AnimationButton } from "../../components/Animation";

const About = () => {
  return (
    <section
      className="framer-1nwhh6k overflow-auto"
      data-framer-name="About"
      id="about"
      data-name="About"
    >
      <div
        className="framer-od6gw3 translate-y-6 sm:translate-y-2 lg:-translate-y-10"
        data-framer-name="Text &amp; Button"
        data-name="Text &amp; Button"
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
                >
                  Build, deploy, and collaborate seamlessly with our
                  browser-based platform designed for the future of web
                  development.
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="framer-fl9649-container opacity-100 transform translate-y-[10px]"
          style={{ transform: "perspective(1200px)" }}
        >
          <AnimationButton>
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
                      Get in touch
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </AnimationButton>
        </div>
      </div>
      <div className="ssr-variant hidden-wbkh13 hidden-5tblbe hidden-72rtr7 hidden-ncoutt !contents">
        <div
          className="framer-pox1sj outline-none flex flex-col justify-start shrink-0 transform !-translate-x-1/2 !bottom-0 lg:bottom-0"
          data-framer-name="Background Text"
          data-framer-component-type="RichTextContainer"
        >
          <p>
            <span
              data-text-fill="true"
              className="framer-text bg-gradient-to-t from-[rgba(255,_255,_255,_0.2)] to-[#70bffa] font-inter text-white text-[150px] sm:text-[250px] md:text-[300px] lg:text-[400px] font-medium tracking-[-1.5px]"
            >
              Halo
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
