import { useState } from "react";
import {
  AnimationButton,
  HoverMoveTop,
  InitialAppearance,
  MoveIndicator,
  ShootingStar,
  Slider,
} from "../../components/Animation";
import {
  FIRST_WORKFLOW_ITEMS,
  SECOND_WORKFLOW_ITEMS,
} from "../../constants/Workflow";
import { IMAGE } from "../../type";
import WorkflowItem from "../../components/Image/Workflow";
import {
  aiChat,
  arrowUp,
  collaboration,
  deployment,
  person1,
} from "../../assets/image";

const Services = () => {
  const [isHoverChatbot, setIsHoverChatbot] = useState<boolean>(false);
  const [isHoverLLM, setIsHoverLLM] = useState<boolean>(false);
  const [isHoverConsult, setIsHoverConsult] = useState<boolean>(false);

  return (
    <section
      className="codeblaze-pswywp"
      data-codeblaze-name="Services"
      id="services"
      data-name="Services"
    >
      <div
        className="codeblaze-2dblr4"
        data-codeblaze-name="Title"
        data-name="Title"
      >
        <InitialAppearance
          className="codeblaze-1i20ah outline-none flex flex-col justify-start flex-shrink-0 opacity-100"
          style={{ transform: "prespective(1200px)" }}
          data-codeblaze-component-type="RichTextContainer"
          from={{ top: 0, left: 0 }}
          to={{ top: 0, left: 0 }}
          time={1}
        >
          <h2
            className="codeblaze-text codeblaze-styles-preset-15mg8bp !text-[24px] sm:!text-[36px] md:!text-[48px] xl:text-[80px]"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="codeblaze-text bg-gradient-to-r from-white to-[#70bffa]"
            >
              Why Choose CodeBlaze?
            </span>
          </h2>
        </InitialAppearance>
      </div>
      <div
        className="codeblaze-8hvpax lg:!gap-[70px]"
        data-codeblaze-name="Services"
        data-name="Services"
      >
        <div
          className="codeblaze-kwc3xg !flex-col lg:!flex-row"
          data-codeblaze-name="1 - 2"
          data-name="1 - 2"
        >
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="codeblaze-1r8dea6 opacity-100 transform-none !flex-none !w-full  lg:!flex-1 lg:!w-1"
              data-border="true"
              data-codeblaze-name="Chatbot Development"
              data-name="Chatbot Development"
              from={{ top: 0, left: -100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div
                className="codeblaze-k7zq9y hidden-5tblbe"
                data-codeblaze-name="Gradient overlay"
                data-name="Gradient overlay"
              />
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="codeblaze-89xsy3-container">
                  <div
                    className="codeblaze-Wen01 codeblaze-l50WH codeblaze-14xpdin codeblaze-v-e204k rounded-[10px] !h-full !w-full"
                    data-codeblaze-name="Tablet Big 1199"
                    onMouseEnter={() => {
                      setIsHoverChatbot(true);
                    }}
                    onMouseLeave={() => {
                      setIsHoverChatbot(false);
                    }}
                  >
                    <div
                      className={`codeblaze-1r7gfum bg-[#0f0f0f] rounded-[5px] border-solid border-[1px] shadow-[0px_0px_2px_0.5px_rgba(112,_190,_250,_0)] !w-full sm:!w-auto !left-0 sm:!left-[40px] ${
                        isHoverChatbot ? "border-[#70befa]" : "border-[#222222]"
                      }`}
                      data-border="true"
                      data-codeblaze-name="Chatbar"
                    >
                      <div
                        className="codeblaze-1c5lsn9 outline-none flex flex-col justify-start flex-shrink-0 transform translate-y-[-50%] text-[#0099ff] no-underline !left-[40px] sm:!left-[80px]"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-[10px] sm:!text-[16px]"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Message AI Coding Assistant…
                        </p>
                      </div>
                      <div
                        className="codeblaze-bxt7f7 border-solid border-[#222222] border-[1px] rounded-[3px] !left-[5px] sm:!left-[20px]"
                        data-border="true"
                        data-codeblaze-name="+ Btton"
                      >
                        <div className="codeblaze-1souglk bg-[#9c9c9c] rounded-[1px]" />
                        <div className="codeblaze-1xzne2e bg-[#9c9c9c] rounded-[1px]" />
                      </div>
                      <div
                        className="codeblaze-1pd23lz border-solid border-[#222222] border-[1px] rounded-[3px] shadow-[0px_0px_2px_0.5px_rgba(112,_190,_250,_0.75)] transform translate-y-[-50%] !right-[5px] sm:!right-[20px]"
                        data-border="true"
                        data-codeblaze-name="Button"
                      >
                        <div className="codeblaze-6pqfpj transform translate-x-[-50%] translate-y-[-50%] rotate-[360deg]">
                          <div
                            className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                            data-codeblaze-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              src={arrowUp}
                              alt="arrow-up"
                              className="block w-full h-full rounded-none object-center object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="codeblaze-ee1pva bg-[#0f0f0f] border-solid border-[#222222] border-[1px] rounded-[7px] !w-full sm:!w-auto !left-0 sm:!left-[40px]"
                      data-border="true"
                      data-codeblaze-name="Chatbot"
                    >
                      <HoverMoveTop
                        className="w-full h-full"
                        isActive={isHoverChatbot}
                        from={0}
                        to={-155}
                      >
                        <div className="w-full h-full overflow-visable relative">
                          <div
                            className="codeblaze-1orlrx2 border-solid border-[#222222] border-[1px] rounded-[3px]"
                            data-border="true"
                            data-codeblaze-name="Memoji"
                          >
                            <div className="codeblaze-a1nn5f">
                              <div
                                className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                                data-codeblaze-background-image-wrapper="true"
                              >
                                <img
                                  decoding="async"
                                  src={person1}
                                  alt="Memoji Tim"
                                  className="block w-full h-full rounded-none object-center object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="codeblaze-18z790b outline-none flex flex-col justify-start flex-shrink-0 transform-none text-white text-[#0099ff] underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p className="codeblaze-text text-[15px] leading-[1.4em] tracking-[0px] text-left text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                              <span
                                data-text-fill="true"
                                className="codeblaze-text bg-gradient-to-r from-[#ffffff] to-[#70befa]"
                              >
                                AI-Driven Development
                              </span>
                            </p>
                          </div>
                          <div
                            className="codeblaze-1kxseoo outline-none flex flex-col justify-start flex-shrink-0 opacity-75 transform-none text-[#0099ff] no-underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p
                              className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-[10px] sm:!text-[16px] lg:!text-[13px] xl:!text-[16px] !whitespace-normal"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Transform your ideas into code with our AI
                              assistant that generates and refines your projects
                              in real-time
                            </p>
                          </div>
                          <div
                            className="codeblaze-42xbc7 border border-solid border-[#222222] rounded-[3px] shadow-[0_0_2px_0.5px_rgba(112,190,250,0.75)]"
                            data-border="true"
                            data-codeblaze-name="AI Logo"
                          >
                            <div
                              className="codeblaze-1vbqghs outline-none flex flex-col justify-start flex-shrink-0 transform translate-x-[-50%] translate-y-[-50%]"
                              data-codeblaze-component-type="RichTextContainer"
                            >
                              <p className="codeblaze-text text-[15px] leading-[1.4em] tracking-[0px] text-left !text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                                AI
                              </p>
                            </div>
                          </div>
                          <div
                            className="codeblaze-cgf9tq outline-none flex flex-col justify-start flex-shrink-0 transform-none text-[#ffffff] text-[#0099ff] underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p className="codeblaze-text text-[15px] leading-[1.4em] tracking-[0px] text-left text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                              <span
                                data-text-fill="true"
                                className="codeblaze-text bg-gradient-to-r from-white to-[#70baf9]"
                              >
                                Full Stack in the Browser
                              </span>
                            </p>
                          </div>
                          <div
                            className="codeblaze-13klyp5 flex flex-col justify-start opacity-75 text-[#0099ff] no-underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p
                              className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-[10px] sm:!text-[16px] lg:!text-[13px] xl:!text-[16px] !whitespace-normal !whitespace-normal"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Develop both frontend and backend applications
                              directly in your browser, eliminating the need
                              <br className="hidden" />
                              for local setups
                            </p>
                          </div>
                        </div>
                        <div
                          className="codeblaze-1orlrx2 border-solid border-[#222222] border-[1px] rounded-[3px] !top-[180px]"
                          data-border="true"
                          data-codeblaze-name="Memoji"
                        >
                          <div className="codeblaze-a1nn5f">
                            <div
                              className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                              data-codeblaze-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                src={collaboration}
                                alt="Memoji Tim"
                                className="block w-full h-full rounded-none object-center object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="codeblaze-18z790b outline-none flex flex-col justify-start flex-shrink-0 transform-none text-white text-[#0099ff] underline !top-[180px]"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <p className="codeblaze-text text-[10px] md:text-[15px] leading-[1.4em] tracking-[0px] text-left text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                            <span
                              data-text-fill="true"
                              className="codeblaze-text bg-gradient-to-r from-[#ffffff] to-[#70befa]"
                            >
                              Real-Time Collaboration
                            </span>
                          </p>
                        </div>
                        <div
                          className="codeblaze-1kxseoo outline-none flex flex-col justify-start flex-shrink-0 opacity-75 transform-none text-[#0099ff] no-underline !top-[203px]"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <p
                            className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-[10px] sm:!text-[16px] lg:!text-[13px] xl:!text-[16px] !whitespace-normal"
                            data-styles-preset="Z8KnRQzQq"
                          >
                            Work alongside your team seamlessly with our
                            real-time collaboration tools.
                          </p>
                        </div>
                        <div
                          className="codeblaze-42xbc7 border border-solid border-[#222222] rounded-[3px] shadow-[0_0_2px_0.5px_rgba(112,190,250,0.75)]"
                          data-border="true"
                          data-codeblaze-name="AI Logo"
                        >
                          <div
                            className="codeblaze-1vbqghs outline-none flex flex-col justify-start flex-shrink-0 transform translate-x-[-50%] translate-y-[-50%]"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p className="codeblaze-text text-[15px] leading-[1.4em] tracking-[0px] text-left !text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                              AI
                            </p>
                          </div>
                        </div>
                        <div
                          className="codeblaze-1orlrx2 border-solid border-[#222222] border-[1px] rounded-[3px] !top-[250px]"
                          data-border="true"
                          data-codeblaze-name="Memoji"
                        >
                          <div className="codeblaze-a1nn5f">
                            <div
                              className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                              data-codeblaze-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                src={deployment}
                                alt="Memoji Tim"
                                className="block w-full h-full rounded-none object-center object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="codeblaze-18z790b outline-none flex flex-col justify-start flex-shrink-0 transform-none text-white text-[#0099ff] underline !top-[250px]"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <p className="codeblaze-text text-[15px] leading-[1.4em] tracking-[0px] text-left text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                            <span
                              data-text-fill="true"
                              className="codeblaze-text bg-gradient-to-r from-[#ffffff] to-[#70befa]"
                            >
                              Instant Deployment
                            </span>
                          </p>
                        </div>
                        <div
                          className="codeblaze-1kxseoo outline-none flex flex-col justify-start flex-shrink-0 opacity-75 transform-none text-[#0099ff] no-underline !top-[270px]"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <p
                            className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-[10px] sm:!text-[16px] lg:!text-[13px] xl:!text-[16px] !whitespace-normal"
                            data-styles-preset="Z8KnRQzQq"
                          >
                            Deploy your applications with a single click,
                            ensuring your projects are live and accessible
                            instantly.
                          </p>
                        </div>
                        <div
                          className="codeblaze-42xbc7 border border-solid border-[#222222] rounded-[3px] shadow-[0_0_2px_0.5px_rgba(112,190,250,0.75)]"
                          data-border="true"
                          data-codeblaze-name="AI Logo"
                        >
                          <div
                            className="codeblaze-1vbqghs outline-none flex flex-col justify-start flex-shrink-0 transform translate-x-[-50%] translate-y-[-50%]"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p className="codeblaze-text text-[15px] leading-[1.4em] tracking-[0px] text-left !text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                              AI
                            </p>
                          </div>
                        </div>
                      </HoverMoveTop>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="codeblaze-1sa4igp"
                data-codeblaze-name="Text"
                data-name="Text"
              >
                <div
                  className="codeblaze-1nfbmpf flex flex-col justify-start flex-shrink-0"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <h3
                    className="codeblaze-text codeblaze-styles-preset-6ghdir !text-[28px] sm:!text-[35px]"
                    data-styles-preset="E4lBliITk"
                  >
                    Voice to Code
                  </h3>
                </div>
                <div
                  className="codeblaze-zrnrac outline-none flex flex-col justify-start flex-shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <p
                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    Transform your voice into powerful code with our Voice Code
                    Module. Speak your ideas naturally, and our AI seamlessly
                    generates clean, efficient code in real-time. Pair it with
                    contextual suggestions to refine and optimize your code as
                    you go. Experience coding reimagined with the simplicity of
                    your voice.
                  </p>
                </div>
              </div>
              <div
                className="codeblaze-cd853r"
                data-codeblaze-name="Gradient"
                data-name="Gradient"
              />
            </InitialAppearance>
          </div>
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="codeblaze-5nicsv opacity-100 transform translate-x-100 !flex-none !w-full lg:!flex-1 lg:!w-1"
              style={{ transform: "prespective(1200px)" }}
              data-border="true"
              data-codeblaze-name="Content creation"
              data-name="Content creation"
              from={{ top: 0, left: 100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div
                className="codeblaze-vvtanx hidden-5tblbe"
                data-codeblaze-name="Gradient overlay"
                data-name="Gradient overlay"
              ></div>
              <div
                className="codeblaze-753v3m"
                data-codeblaze-name="Visual"
                data-name="Visual"
              >
                <div className="ssr-variant hidden-r5chz7 hidden-72rtr7 !contents">
                  <div className="codeblaze-1jyoc39-container">
                    <div
                      className="codeblaze-zkgLH codeblaze-l50WH codeblaze-1u5s3dz codeblaze-v-1u5s3dz border border-solid border-gray-800 bg-[#0f0f0f] rounded-lg shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] !h-full !w-full"
                      data-border="true"
                      data-codeblaze-name="Desktop 1440 &amp; 1200 &amp; Tablet 999"
                    >
                      <div
                        className="codeblaze-11i9v3j flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Generate an image of a smiling quokka on the beach.
                        </p>
                      </div>
                      <div
                        className="codeblaze-1d7x2we flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline transform -translate-y-1/2"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-[11px] !left-[5px] sm:!text-[15px]"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Text prompt your idea to life
                        </p>
                      </div>
                      <div
                        className="codeblaze-1ddzyo2 border border-solid border-gray-800 rounded-[3px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
                        data-border="true"
                        data-codeblaze-name="Button"
                      >
                        <div
                          className="codeblaze-r6k0tj flex flex-col justify-start shrink-0 transform translate-x-[-50%] rotate-[360deg] text-white"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <p className="codeblaze-text text-white text-left text-sm leading-[1.4em] tracking-0">
                            <span
                              data-text-fill="true"
                              className="codeblaze-text bg-gradient-to-r from-white to-[#70befa] text-[14px]"
                            >
                              Generate
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="codeblaze-1vkv1rn"
                  data-border="true"
                  data-codeblaze-name="Generating Image"
                  data-name="Generating Image"
                >
                  <div className="codeblaze-yda9mq-container">
                    <div className="w-full h-full overflow-hidden bg-[#0f0f0f] transform translate-z-0 rounded-none relative">
                      <ShootingStar />
                    </div>
                  </div>
                  <div className="codeblaze-1cco58z-container">
                    <AnimationButton>
                      <div
                        className="codeblaze-XOvFy codeblaze-11v76sm codeblaze-v-11v76sm bg-gray-800 rounded-[8px]"
                        data-codeblaze-name="Button State 1"
                        data-highlight="true"
                      >
                        <div
                          className="codeblaze-sj29an bg-gradient-radial from-blue-400 via-transparent to-transparent rounded-lg"
                          data-codeblaze-name="Stroke"
                        />
                        <div
                          className="codeblaze-1fvuyyf !bg-[#0f0f0f] rounded-[8px]"
                          data-codeblaze-name="Fill"
                        />
                        <div
                          className="codeblaze-hnyl0t flex flex-col justify-start flex-shrink-0 text-white"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <h4 className="codeblaze-text text-white text-sm font-sans tracking-normal">
                            <span
                              data-text-fill="true"
                              className="codeblaze-text bg-gradient-to-r from-white to-[#70bffa]"
                            >
                              Generating Web App...
                            </span>
                          </h4>
                        </div>
                      </div>
                    </AnimationButton>
                  </div>
                </div>
              </div>
              <div
                className="codeblaze-1y7o9ml"
                data-codeblaze-name="Text"
                data-name="Text"
              >
                <div
                  className="codeblaze-zra3kj flex flex-col justify-start flex-shrink-0"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <h3
                    className="codeblaze-text codeblaze-styles-preset-6ghdir !text-[28px] sm:!text-[35px]"
                    data-styles-preset="E4lBliITk"
                  >
                    From Idea to Code
                  </h3>
                </div>
                <div
                  className="codeblaze-nmvpkf flex flex-col justify-start flex-shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <p
                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    Effortlessly build full-stack web applications with our AI
                    Code Generator Module. Simply provide a text prompt, and our
                    AI generates the complete code for your app, or drop an
                    image or screenshot to transform it into functional code.
                    Redefining development from concept to reality.
                  </p>
                </div>
              </div>
              <div
                className="codeblaze-gtd07o"
                data-codeblaze-name="Gradient"
                data-name="Gradient"
              />
            </InitialAppearance>
          </div>
        </div>
        <div
          className="codeblaze-166195g"
          data-codeblaze-name="3 - 4 - 5"
          data-name="3 - 4 - 5"
        >
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="codeblaze-38uxhd opacity-100"
              data-border="true"
              data-codeblaze-name="Workflow Automations"
              data-name="Workflow Automations"
              from={{ top: 0, left: -100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="codeblaze-1a2s7tn-container">
                  <div
                    className="codeblaze-2Hs2Z codeblaze-l50WH codeblaze-csn10 codeblaze-v-csn10 rounded-[10px] !h-full !w-full"
                    data-codeblaze-name="Workflow Automations"
                  >
                    <div className="codeblaze-svzn11-container">
                      <section className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none opacity-100 overflow-hidden mask-image-[linear-gradient(to_right,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_1)_15%,_rgba(0,_0,_0,_1)_85%,_rgba(0,_0,_0,_0)_100%)]">
                        <ul className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none gap-5 relative flex-row transform translate-x-0 will-change-transform">
                          <Slider dir="left">
                            {FIRST_WORKFLOW_ITEMS.map(
                              (item: IMAGE, index: number) => (
                                <WorkflowItem key={index} item={item} />
                              )
                            )}
                            {FIRST_WORKFLOW_ITEMS.map(
                              (item: IMAGE, index: number) => (
                                <WorkflowItem key={index} item={item} />
                              )
                            )}
                          </Slider>
                        </ul>
                      </section>
                    </div>
                    <div className="codeblaze-15pfzxi-container">
                      <section className="flex w-full h-full max-w-full max-h-full items-center m-0 p-0 list-none text-indent-none opacity-100 overflow-hidden mask-image-[linear-gradient(to_right,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_1)_15%,_rgba(0,_0,_0,_1)_85%,_rgba(0,_0,_0,_0)_100%)]">
                        <ul className="flex w-full h-full max-w-full max-h-full items-center m-0 p-0 list-none text-indent-none gap-5 relative flex-row will-change-transform transform translate-x-0">
                          <Slider dir="right">
                            {SECOND_WORKFLOW_ITEMS.map(
                              (item: IMAGE, index: number) => (
                                <WorkflowItem key={index} item={item} />
                              )
                            )}
                            {SECOND_WORKFLOW_ITEMS.map(
                              (item: IMAGE, index: number) => (
                                <WorkflowItem key={index} item={item} />
                              )
                            )}
                          </Slider>
                        </ul>
                      </section>
                    </div>
                    <div
                      className="codeblaze-166hj3k bg-gradient-to-r from-white to-blue-300 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                      data-codeblaze-name="Circle"
                    >
                      <div
                        className="codeblaze-4jhqii bg-[#0f0f0f] rounded-full shadow-inner shadow-blue-400"
                        data-codeblaze-name="Background"
                      >
                        <div className="codeblaze-1ya1n41 transform translate-x-[-50%] translate-y-[-50%]">
                          <div
                            className="codeblaze-c9ksas outline-none flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p className="codeblaze-text">
                              <span
                                data-text-fill="true"
                                className="codeblaze-text bg-gradient-to-r from-white to-blue-400 text-3xl font-medium text-white"
                              >
                                50+
                              </span>
                            </p>
                          </div>
                          <div
                            className="codeblaze-15p95xe flex flex-col justify-start shrink-0 text-blue-500 no-underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p
                              className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-center"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              programming
                              <br />
                              languages
                            </p>
                          </div>
                        </div>
                        <div className="codeblaze-18poofz rounded-full opacity-5">
                          <div
                            className="absolute inset-0 bg-repeat bg-left-top bg-[url('https://codeblazeusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')] border-0"
                            data-codeblaze-background-image-wrapper="true"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="codeblaze-12rghbw"
                data-codeblaze-name="Text"
                data-name="Text"
              >
                <div
                  className="codeblaze-1bniz92 flex flex-col justify-start flex-shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <h3
                    className="codeblaze-text codeblaze-styles-preset-6ghdir !text-[28px] sm:!text-[35px"
                    data-styles-preset="E4lBliITk"
                  >
                    Unlock Limitless Development
                  </h3>
                </div>
                <div
                  className="codeblaze-1gai3jp flex flex-col justify-start flex-shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <p
                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    This extensive support enables seamless switching between
                    languages and frameworks, empowering you to build, adapt,
                    and innovate without limitations. OK now we need another
                    section as a text block where they heading and a description
                    about the blaze platform
                  </p>
                </div>
              </div>
              <div
                className="codeblaze-rgfzcm"
                data-codeblaze-name="Gradient"
                data-name="Gradient"
              ></div>
            </InitialAppearance>
          </div>
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="codeblaze-tvfugu opacity-100 transform translate-y-[50px]"
              style={{ transform: "perspective(1200px)" }}
              data-border="true"
              data-codeblaze-name="LLM Development"
              data-name="LLM Development"
              from={{ top: 100, left: 0 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="codeblaze-h6vlzy-container !w-full h-full">
                  <div
                    className="codeblaze-xrZ8E codeblaze-l50WH codeblaze-wb8ig1 codeblaze-v-wb8ig1 !w-full"
                    data-codeblaze-name="Desktop 1440 &amp; Tablet 999"
                    onMouseEnter={() => {
                      setIsHoverLLM(true);
                    }}
                    onMouseLeave={() => {
                      setIsHoverLLM(false);
                    }}
                  >
                    <div
                      className="codeblaze-vprgby border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                      data-codeblaze-name="AI Bar"
                    >
                      <div
                        className="codeblaze-1ptvim7"
                        data-codeblaze-name="Sparkle"
                      >
                        <div
                          className="absolute inset-0 rounded-sm"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/mNAgeLFNO3ud7TYNi6XwSYs3ag.png"
                            alt="three-star"
                            className="block w-full h-full rounded-sm object-center object-contain"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1lr30jg flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p className="codeblaze-text text-white text-left text-sm leading-6">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-blue-400 text-left text-[12px] leading-[15px]"
                            style={{ textAlign: "end" }}
                          >
                            Develop <br className="hidden lg:block xl:hidden" />{" "}
                            a platform like uber eats
                          </span>
                        </p>
                      </div>
                      {/* <div
                        className="codeblaze-13xn7j8 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Quokka's live on Rottnest Island.
                        </p>
                      </div> */}
                    </div>
                    <div
                      className="codeblaze-1srgmwy border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                    />
                    <div
                      className="codeblaze-1xlvs45 border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                    />
                    <div
                      className="codeblaze-1tf778e border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                    />
                    <div
                      className={`codeblaze-1wxi3qm border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px] ${
                        isHoverLLM ? "border-[#70befa]" : ""
                      }`}
                      data-border="true"
                      data-codeblaze-name="Chatbar"
                    >
                      <HoverMoveTop
                        className="w-full h-full"
                        isActive={isHoverLLM}
                        from={0}
                        to={-40}
                      >
                        <div className="w-full h-full overflow-visable">
                          <div
                            className="codeblaze-13tvggq flex flex-col justify-start flex-shrink-0 text-blue-500 underline transform translate-y-[-50%] no-underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p
                              className="codeblaze-text codeblaze-styles-preset-1otixq8"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Write your prompt…
                            </p>
                          </div>
                          <div
                            className="codeblaze-1huzdru flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                            data-codeblaze-component-type="RichTextContainer"
                          >
                            <p
                              className="codeblaze-text codeblaze-styles-preset-1otixq8"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Use voice or text prompts...
                            </p>
                          </div>
                        </div>
                      </HoverMoveTop>
                      <div
                        className="codeblaze-1fjj3ny border border-solid border-gray-600 rounded-sm shadow-[0_0_2px_0.5px_rgba(112,190,250,0.75)] transform translate-y-[-50%]"
                        data-border="true"
                        data-codeblaze-name="Button"
                      >
                        <div
                          className="codeblaze-1n0dkk3 transform translate-x-[-50%] translate-y-[-50%] rotate-[360deg]"
                          data-codeblaze-name="Arrow"
                        >
                          <div
                            className="absolute inset-0 rounded-sm"
                            data-codeblaze-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              src="https://codeblazeusercontent.com/images/5eEBrcgZrpTpswgmkk51nT0I9c.png"
                              alt="arrow-up"
                              className="block w-full h-full rounded-inherit object-center object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="codeblaze-zdduwt"
                data-codeblaze-name="Text"
                data-name="Text"
              >
                <div
                  className="codeblaze-q99hft flex flex-col justify-start flex-shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <h3
                    className="codeblaze-text codeblaze-styles-preset-6ghdir !text-[28px] sm:!text-[35px"
                    data-styles-preset="E4lBliITk"
                  >
                    Seamless Browser-Based Development
                  </h3>
                </div>
                <div
                  className="codeblaze-14lkkk2 flex flex-col justify-start flex-shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <p
                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    With codeblaze, you can install npm tools, run Node.js
                    servers, interact with APIs, and deploy projects to
                    production—all within your browser. This eliminates the need
                    for complex local setups and allows for a more efficient and
                    secure development process.
                  </p>
                </div>
              </div>
              <div
                className="codeblaze-1no8lx7"
                data-codeblaze-name="Gradient"
                data-name="Gradient"
              />
            </InitialAppearance>
          </div>
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="codeblaze-1b4n1sp opacity-100"
              style={{ transform: "prespective(1200px)" }}
              data-border="true"
              data-codeblaze-name="AI Consulting"
              data-name="AI Consulting"
              from={{ top: 0, left: 100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="codeblaze-m30icq-container">
                  <div
                    className="codeblaze-LXnkX codeblaze-o3waff codeblaze-v-o3waff !w-full h-full"
                    data-codeblaze-name="Desktop 1440 &amp; 1200 &amp; Phone 390"
                    onMouseEnter={() => setIsHoverConsult(true)}
                    onMouseLeave={() => setIsHoverConsult(false)}
                  >
                    <div
                      data-codeblaze-component-type="SVG"
                      data-codeblaze-name="Graph"
                      style={{ imageRendering: "pixelated" }}
                      className="codeblaze-z2mc4i flex-shrink-0 fill-black text-black"
                      aria-hidden="true"
                    >
                      <div
                        className="svgContainer w-full h-full aspect-auto"
                        style={{
                          backgroundImage: `url(${aiChat})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                    <MoveIndicator
                      isActive={isHoverConsult}
                      className="codeblaze-yk9k1c"
                      from={{ top: 180, left: 250 }}
                      to={{ top: 230, left: 150 }}
                      name="Cost"
                    >
                      <div
                        className="codeblaze-xfg3ni flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p className="codeblaze-text font-sans text-white text-left text-sm">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-blue-400"
                          >
                            Cost -67%
                          </span>
                        </p>
                      </div>
                    </MoveIndicator>
                    <MoveIndicator
                      isActive={isHoverConsult}
                      className="codeblaze-ki5v1w"
                      from={{ top: 80, left: 80 }}
                      to={{ top: 80, left: 180 }}
                      name="Cost"
                    >
                      <div
                        className="codeblaze-okiaas flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p className="codeblaze-text font-sans text-white text-left text-sm">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-blue-400"
                          >
                            Efficiency +103%
                          </span>
                        </p>
                      </div>
                    </MoveIndicator>
                  </div>
                </div>
              </div>
              <div
                className="codeblaze-pjr887"
                data-codeblaze-name="Text"
                data-name="Text"
              >
                <div
                  className="codeblaze-1s7y07u flex flex-col justify-start shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <h3
                    className="codeblaze-text codeblaze-styles-preset-6ghdir !text-[28px] sm:!text-[35px"
                    data-styles-preset="E4lBliITk"
                  >
                    Enhance Efficiency, Reduce Costs
                  </h3>
                </div>
                <div
                  className="codeblaze-hw0ron flex flex-col justify-start shrink-0 transform-none"
                  data-codeblaze-component-type="RichTextContainer"
                >
                  <p
                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    By automating tasks like package management and deployment,
                    codeblaze minimizes interventions, leading to time savings
                    and increased productivity. Its AI-powered debugging and
                    error handling enhance efficiency, enabling developers to
                    focus on building features.
                  </p>
                </div>
              </div>
              <div
                className="codeblaze-1ejqpan"
                data-codeblaze-name="Gradient"
                data-name="Gradient"
              ></div>
            </InitialAppearance>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
