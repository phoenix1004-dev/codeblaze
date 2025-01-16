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
  expend,
  googleMeet,
  person1,
} from "../../assets/image";

const Services = () => {
  const [isHoverChatbot, setIsHoverChatbot] = useState<boolean>(false);
  const [isHoverLLM, setIsHoverLLM] = useState<boolean>(false);
  const [isHoverConsult, setIsHoverConsult] = useState<boolean>(false);

  return (
    <section
      className="framer-pswywp"
      data-framer-name="Services"
      id="services"
      data-name="Services"
    >
      <div className="framer-2dblr4" data-framer-name="Title" data-name="Title">
        <InitialAppearance
          className="framer-1i20ah outline-none flex flex-col justify-start flex-shrink-0 opacity-100"
          style={{ transform: "prespective(1200px)" }}
          data-framer-component-type="RichTextContainer"
          from={{ top: 0, left: 0 }}
          to={{ top: 0, left: 0 }}
          time={1}
        >
          <h2
            className="framer-text framer-styles-preset-15mg8bp !text-[20px] sm:!text-[36px] md:!text-[48px] xl:text-[80px]"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="framer-text bg-gradient-to-r from-white to-[#70bffa]"
            >
              Why Choose CodeBlaze?
            </span>
          </h2>
        </InitialAppearance>
      </div>
      <div
        className="framer-8hvpax"
        data-framer-name="Services"
        data-name="Services"
      >
        <div
          className="framer-kwc3xg !flex-col lg:!flex-row"
          data-framer-name="1 - 2"
          data-name="1 - 2"
        >
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="framer-1r8dea6 opacity-100 transform-none !flex-none !w-full  lg:!flex-1 lg:!w-1"
              data-border="true"
              data-framer-name="Chatbot Development"
              data-name="Chatbot Development"
              from={{ top: 0, left: -100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div
                className="framer-k7zq9y hidden-5tblbe"
                data-framer-name="Gradient overlay"
                data-name="Gradient overlay"
              />
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="framer-89xsy3-container">
                  <div
                    className="framer-Wen01 framer-l50WH framer-14xpdin framer-v-e204k rounded-[10px] !h-full !w-full"
                    data-framer-name="Tablet Big 1199"
                    onMouseEnter={() => {
                      setIsHoverChatbot(true);
                    }}
                    onMouseLeave={() => {
                      setIsHoverChatbot(false);
                    }}
                  >
                    <div
                      className={`framer-1r7gfum bg-[#0f0f0f] rounded-[5px] border-solid border-[1px] shadow-[0px_0px_2px_0.5px_rgba(112,_190,_250,_0)] ${
                        isHoverChatbot ? "border-[#70befa]" : "border-[#222222]"
                      }`}
                      data-border="true"
                      data-framer-name="Chatbar"
                    >
                      <div
                        className="framer-1c5lsn9 outline-none flex flex-col justify-start flex-shrink-0 transform translate-y-[-50%] text-[#0099ff] no-underline !left-[60px] sm:!left-[80px]"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8 !text-[12px] sm:!text-[16px]"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Message AI Assistant…
                        </p>
                      </div>
                      <div
                        className="framer-bxt7f7 border-solid border-[#222222] border-[1px] rounded-[3px]"
                        data-border="true"
                        data-framer-name="+ Button"
                      >
                        <div className="framer-1souglk bg-[#9c9c9c] rounded-[1px]" />
                        <div className="framer-1xzne2e bg-[#9c9c9c] rounded-[1px]" />
                      </div>
                      <div
                        className="framer-1pd23lz border-solid border-[#222222] border-[1px] rounded-[3px] shadow-[0px_0px_2px_0.5px_rgba(112,_190,_250,_0.75)] transform translate-y-[-50%]"
                        data-border="true"
                        data-framer-name="Button"
                      >
                        <div className="framer-6pqfpj transform translate-x-[-50%] translate-y-[-50%] rotate-[360deg]">
                          <div
                            className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                            data-framer-background-image-wrapper="true"
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
                      className="framer-ee1pva bg-[#0f0f0f] border-solid border-[#222222] border-[1px] rounded-[7px]"
                      data-border="true"
                      data-framer-name="Chatbot"
                    >
                      <HoverMoveTop
                        className="w-full h-full"
                        isActive={isHoverChatbot}
                        from={0}
                        to={-75}
                      >
                        <div className="w-full h-full overflow-visable relative">
                          <div
                            className="framer-1q8fu0c border-solid border-[#222222] border-[1px] rounded-[5px]"
                            data-border="true"
                            data-framer-name="Google meeting"
                          >
                            <div
                              className="framer-ivt88i"
                              data-framer-name="Text"
                            >
                              <div className="framer-wsk78n">
                                <div
                                  className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    sizes="(min-width: 1440px) 20px, (min-width: 999px) and (max-width: 1199px) 20px, (min-width: 1200px) and (max-width: 1439px) 20px, (max-width: 809px) 20px, (min-width: 810px) and (max-width: 998px) 20px"
                                    src={googleMeet}
                                    alt="google-meet"
                                    className="block w-full h-full rounded-none object-center object-cover"
                                    data-framer-original-sizes="20px"
                                  />
                                </div>
                              </div>
                              <div
                                className="framer-1kosht4 outline-none flex flex-col justify-start flex-shrink-0 transform-none text-[#0099ff] no-underline"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1otixq8 !text-[12px] sm:!text-[16px]"
                                  data-styles-preset="Z8KnRQzQq"
                                >
                                  Google Meet with John
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-flbwfi transform translate-y-[-50%]"
                              data-framer-name="Share icon"
                            >
                              <div
                                className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                                data-framer-background-image-wrapper="true"
                              >
                                <img
                                  decoding="async"
                                  src={expend}
                                  alt="expend"
                                  className="block w-full h-full rounded-none object-center object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="framer-1orlrx2 border-solid border-[#222222] border-[1px] rounded-[3px]"
                            data-border="true"
                            data-framer-name="Memoji"
                          >
                            <div className="framer-a1nn5f">
                              <div
                                className="absolute rounded-none top-0 right-0 bottom-0 left-0"
                                data-framer-background-image-wrapper="true"
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
                            className="framer-18z790b outline-none flex flex-col justify-start flex-shrink-0 transform-none text-white text-[#0099ff] underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p className="framer-text text-[15px] leading-[1.4em] tracking-[0px] text-left text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                              <span
                                data-text-fill="true"
                                className="framer-text bg-gradient-to-r from-[#ffffff] to-[#70befa]"
                              >
                                You
                              </span>
                            </p>
                          </div>
                          <div
                            className="framer-1kxseoo outline-none flex flex-col justify-start flex-shrink-0 opacity-75 transform-none text-[#0099ff] no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1otixq8 !text-[10px] sm:!text-[16px] lg:!text-[13px] xl:!text-[16px] !whitespace-normal"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Schedule a Google meeting with John for 3:45PM
                              tomorrow!
                            </p>
                          </div>
                          <div
                            className="framer-1uc0yr3 outline-none flex flex-col justify-start flex-shrink-0 transform-none text-[#9c9c9c] text-[#0099ff] no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p className="framer-text text-[15px] leading-[1.4em] tracking-[0px] text-left !text-[#9c9c9c] font-['Switzer','Switzer Placeholder',sans-serif]">
                              8:15 AM
                            </p>
                          </div>
                          <div
                            className="framer-42xbc7 border border-solid border-[#222222] rounded-[3px] shadow-[0_0_2px_0.5px_rgba(112,190,250,0.75)]"
                            data-border="true"
                            data-framer-name="AI Logo"
                          >
                            <div
                              className="framer-1vbqghs outline-none flex flex-col justify-start flex-shrink-0 transform translate-x-[-50%] translate-y-[-50%]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p className="framer-text text-[15px] leading-[1.4em] tracking-[0px] text-left !text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                                AI
                              </p>
                            </div>
                          </div>
                          <div
                            className="framer-cgf9tq outline-none flex flex-col justify-start flex-shrink-0 transform-none text-[#ffffff] text-[#0099ff] underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p className="framer-text text-[15px] leading-[1.4em] tracking-[0px] text-left text-white font-['Switzer','Switzer Placeholder',sans-serif]">
                              <span
                                data-text-fill="true"
                                className="framer-text bg-gradient-to-r from-white to-[#70baf9]"
                              >
                                AI Assistant
                              </span>
                            </p>
                          </div>
                          <div
                            className="framer-1oon2c4 flex flex-col justify-start flex-shrink-0 text-[#9c9c9c] no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p className="framer-text text-left !text-[#9c9c9c] text-[15px] leading-[1.4em]">
                              8:15 AM
                            </p>
                          </div>
                          <div
                            className="framer-13klyp5 flex flex-col justify-start opacity-75 text-[#0099ff] no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1otixq8 !text-[10px] sm:!text-[16px] lg:!text-[13px] xl:!text-[16px] !whitespace-normal"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              I've successfully scheduled a Google meeting with
                              John for
                              <br className="framer-text hidden sm:block lg:hidden xl:block" />
                              3:45PM tomorrow.
                            </p>
                          </div>
                        </div>
                      </HoverMoveTop>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-1sa4igp"
                data-framer-name="Text"
                data-name="Text"
              >
                <div
                  className="framer-1nfbmpf flex flex-col justify-start flex-shrink-0"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir !text-[28px] sm:!text-[35px]"
                    data-styles-preset="E4lBliITk"
                  >
                    Chatbot Development
                  </h3>
                </div>
                <div
                  className="framer-zrnrac outline-none flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    We develop intelligent chatbots that leverage advanced NLP
                    to elevate customer interactions and streamline your
                    business processes.
                  </p>
                </div>
              </div>
              <div
                className="framer-cd853r"
                data-framer-name="Gradient"
                data-name="Gradient"
              />
            </InitialAppearance>
          </div>
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="framer-5nicsv opacity-100 transform translate-x-100 !flex-none !w-full lg:!flex-1 lg:!w-1"
              style={{ transform: "prespective(1200px)" }}
              data-border="true"
              data-framer-name="Content creation"
              data-name="Content creation"
              from={{ top: 0, left: 100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div
                className="framer-vvtanx hidden-5tblbe"
                data-framer-name="Gradient overlay"
                data-name="Gradient overlay"
              ></div>
              <div
                className="framer-753v3m"
                data-framer-name="Visual"
                data-name="Visual"
              >
                <div className="ssr-variant hidden-r5chz7 hidden-72rtr7 !contents">
                  <div className="framer-1jyoc39-container">
                    <div
                      className="framer-zkgLH framer-l50WH framer-1u5s3dz framer-v-1u5s3dz border border-solid border-gray-800 bg-[#0f0f0f] rounded-lg shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] !h-full !w-full"
                      data-border="true"
                      data-framer-name="Desktop 1440 &amp; 1200 &amp; Tablet 999"
                    >
                      <div
                        className="framer-11i9v3j flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Generate an image of a smiling quokka on the beach.
                        </p>
                      </div>
                      <div
                        className="framer-1d7x2we flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline transform -translate-y-1/2"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8 !text-[15px]"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Generate an image of…
                        </p>
                      </div>
                      <div
                        className="framer-1ddzyo2 border border-solid border-gray-800 rounded-[3px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0.75)]"
                        data-border="true"
                        data-framer-name="Button"
                      >
                        <div
                          className="framer-r6k0tj flex flex-col justify-start shrink-0 transform translate-x-[-50%] rotate-[360deg] text-white"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text text-white text-left text-sm leading-[1.4em] tracking-0">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-white to-[#70befa] text-[14px]"
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
                  className="framer-1vkv1rn"
                  data-border="true"
                  data-framer-name="Generating Image"
                  data-name="Generating Image"
                >
                  <div className="framer-yda9mq-container">
                    <div className="w-full h-full overflow-hidden bg-[#0f0f0f] transform translate-z-0 rounded-none relative">
                      <ShootingStar />
                    </div>
                  </div>
                  <div className="framer-1cco58z-container">
                    <AnimationButton>
                      <div
                        className="framer-XOvFy framer-11v76sm framer-v-11v76sm bg-gray-800 rounded-[8px]"
                        data-framer-name="Button State 1"
                        data-highlight="true"
                      >
                        <div
                          className="framer-sj29an bg-gradient-radial from-blue-400 via-transparent to-transparent rounded-lg"
                          data-framer-name="Stroke"
                        />
                        <div
                          className="framer-1fvuyyf !bg-[#0f0f0f] rounded-[8px]"
                          data-framer-name="Fill"
                        />
                        <div
                          className="framer-hnyl0t flex flex-col justify-start flex-shrink-0 text-white"
                          data-framer-component-type="RichTextContainer"
                        >
                          <h4 className="framer-text text-white text-sm font-sans tracking-normal">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-white to-[#70bffa]"
                            >
                              Generating image…
                            </span>
                          </h4>
                        </div>
                      </div>
                    </AnimationButton>
                  </div>
                </div>
              </div>
              <div
                className="framer-1y7o9ml"
                data-framer-name="Text"
                data-name="Text"
              >
                <div
                  className="framer-zra3kj flex flex-col justify-start flex-shrink-0"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir !text-[28px] sm:!text-[35px]"
                    data-styles-preset="E4lBliITk"
                  >
                    Content Creation
                  </h3>
                </div>
                <div
                  className="framer-nmvpkf flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    Our content creation solutions effortlessly generate
                    high-quality, engaging content according to your brand's
                    guidelines to captivate your audience.
                  </p>
                </div>
              </div>
              <div
                className="framer-gtd07o"
                data-framer-name="Gradient"
                data-name="Gradient"
              />
            </InitialAppearance>
          </div>
        </div>
        <div
          className="framer-166195g"
          data-framer-name="3 - 4 - 5"
          data-name="3 - 4 - 5"
        >
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="framer-38uxhd opacity-100"
              data-border="true"
              data-framer-name="Workflow Automations"
              data-name="Workflow Automations"
              from={{ top: 0, left: -100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="framer-1a2s7tn-container">
                  <div
                    className="framer-2Hs2Z framer-l50WH framer-csn10 framer-v-csn10 rounded-[10px] !h-full !w-full"
                    data-framer-name="Workflow Automations"
                  >
                    <div className="framer-svzn11-container">
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
                    <div className="framer-15pfzxi-container">
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
                      className="framer-166hj3k bg-gradient-to-r from-white to-blue-300 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                      data-framer-name="Circle"
                    >
                      <div
                        className="framer-4jhqii bg-[#0f0f0f] rounded-full shadow-inner shadow-blue-400"
                        data-framer-name="Background"
                      >
                        <div className="framer-1ya1n41 transform translate-x-[-50%] translate-y-[-50%]">
                          <div
                            className="framer-c9ksas outline-none flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p className="framer-text">
                              <span
                                data-text-fill="true"
                                className="framer-text bg-gradient-to-r from-white to-blue-400 text-3xl font-medium text-white"
                              >
                                100+
                              </span>
                            </p>
                          </div>
                          <div
                            className="framer-15p95xe flex flex-col justify-start shrink-0 text-blue-500 no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1otixq8"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Automations
                            </p>
                          </div>
                        </div>
                        <div className="framer-18poofz rounded-full opacity-5">
                          <div
                            className="absolute inset-0 bg-repeat bg-left-top bg-[url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')] border-0"
                            data-framer-background-image-wrapper="true"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-12rghbw"
                data-framer-name="Text"
                data-name="Text"
              >
                <div
                  className="framer-1bniz92 flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir !text-[28px] sm:!text-[35px"
                    data-styles-preset="E4lBliITk"
                  >
                    Workflow Automations
                  </h3>
                </div>
                <div
                  className="framer-1gai3jp flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    We automate your workflows to streamline repetitive tasks,
                    enhance efficiency, save time, and eliminate errors.
                  </p>
                </div>
              </div>
              <div
                className="framer-rgfzcm"
                data-framer-name="Gradient"
                data-name="Gradient"
              ></div>
            </InitialAppearance>
          </div>
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="framer-tvfugu opacity-100 transform translate-y-[50px]"
              style={{ transform: "perspective(1200px)" }}
              data-border="true"
              data-framer-name="LLM Development"
              data-name="LLM Development"
              from={{ top: 100, left: 0 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="framer-h6vlzy-container !w-full h-full">
                  <div
                    className="framer-xrZ8E framer-l50WH framer-wb8ig1 framer-v-wb8ig1 !w-full"
                    data-framer-name="Desktop 1440 &amp; Tablet 999"
                    onMouseEnter={() => {
                      setIsHoverLLM(true);
                    }}
                    onMouseLeave={() => {
                      setIsHoverLLM(false);
                    }}
                  >
                    <div
                      className="framer-vprgby border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                      data-framer-name="AI Bar"
                    >
                      <div
                        className="framer-1ptvim7"
                        data-framer-name="Sparkle"
                      >
                        <div
                          className="absolute inset-0 rounded-sm"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/mNAgeLFNO3ud7TYNi6XwSYs3ag.png"
                            alt="three-star"
                            className="block w-full h-full rounded-sm object-center object-contain"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1lr30jg flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text text-white text-left text-sm leading-6 font-sans">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-blue-400 text-left text-sm leading-6 font-sans"
                          >
                            Where do Quokka's live?
                          </span>
                        </p>
                      </div>
                      <div
                        className="framer-13xn7j8 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Quokka's live on Rottnest Island.
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-1srgmwy border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                    />
                    <div
                      className="framer-1xlvs45 border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                    />
                    <div
                      className="framer-1tf778e border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px]"
                      data-border="true"
                    />
                    <div
                      className={`framer-1wxi3qm border border-solid border-[#222222] bg-[#0f0f0f] rounded-[5px] ${
                        isHoverLLM ? "border-[#70befa]" : ""
                      }`}
                      data-border="true"
                      data-framer-name="Chatbar"
                    >
                      <HoverMoveTop
                        className="w-full h-full"
                        isActive={isHoverLLM}
                        from={0}
                        to={-40}
                      >
                        <div className="w-full h-full overflow-visable">
                          <div
                            className="framer-13tvggq flex flex-col justify-start flex-shrink-0 text-blue-500 underline transform translate-y-[-50%] no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1otixq8"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              Write your prompt…
                            </p>
                          </div>
                          <div
                            className="framer-1huzdru flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1otixq8"
                              data-styles-preset="Z8KnRQzQq"
                            >
                              And are Quokka's big?
                            </p>
                          </div>
                        </div>
                      </HoverMoveTop>
                      <div
                        className="framer-1fjj3ny border border-solid border-gray-600 rounded-sm shadow-[0_0_2px_0.5px_rgba(112,190,250,0.75)] transform translate-y-[-50%]"
                        data-border="true"
                        data-framer-name="Button"
                      >
                        <div
                          className="framer-1n0dkk3 transform translate-x-[-50%] translate-y-[-50%] rotate-[360deg]"
                          data-framer-name="Arrow"
                        >
                          <div
                            className="absolute inset-0 rounded-sm"
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              src="https://framerusercontent.com/images/5eEBrcgZrpTpswgmkk51nT0I9c.png"
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
                className="framer-zdduwt"
                data-framer-name="Text"
                data-name="Text"
              >
                <div
                  className="framer-q99hft flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir !text-[28px] sm:!text-[35px"
                    data-styles-preset="E4lBliITk"
                  >
                    LLM Development
                  </h3>
                </div>
                <div
                  className="framer-14lkkk2 flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    We develop Large Language Models that transform how your
                    company interacts with data and customers.
                  </p>
                </div>
              </div>
              <div
                className="framer-1no8lx7"
                data-framer-name="Gradient"
                data-name="Gradient"
              />
            </InitialAppearance>
          </div>
          <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
            <InitialAppearance
              className="framer-1b4n1sp opacity-100"
              style={{ transform: "prespective(1200px)" }}
              data-border="true"
              data-framer-name="AI Consulting"
              data-name="AI Consulting"
              from={{ top: 0, left: 100 }}
              to={{ top: 0, left: 0 }}
              time={1}
            >
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="framer-m30icq-container">
                  <div
                    className="framer-LXnkX framer-o3waff framer-v-o3waff !w-full h-full"
                    data-framer-name="Desktop 1440 &amp; 1200 &amp; Phone 390"
                    onMouseEnter={() => setIsHoverConsult(true)}
                    onMouseLeave={() => setIsHoverConsult(false)}
                  >
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Graph"
                      style={{ imageRendering: "pixelated" }}
                      className="framer-z2mc4i flex-shrink-0 fill-black text-black"
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
                      className="framer-yk9k1c"
                      from={{ top: 180, left: 250 }}
                      to={{ top: 230, left: 150 }}
                      name="Cost"
                    >
                      <div
                        className="framer-xfg3ni flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text font-sans text-white text-left text-sm">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-blue-400"
                          >
                            Cost -67%
                          </span>
                        </p>
                      </div>
                    </MoveIndicator>
                    <MoveIndicator
                      isActive={isHoverConsult}
                      className="framer-ki5v1w"
                      from={{ top: 80, left: 80 }}
                      to={{ top: 80, left: 180 }}
                      name="Cost"
                    >
                      <div
                        className="framer-okiaas flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text font-sans text-white text-left text-sm">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-blue-400"
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
                className="framer-pjr887"
                data-framer-name="Text"
                data-name="Text"
              >
                <div
                  className="framer-1s7y07u flex flex-col justify-start shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir !text-[28px] sm:!text-[35px"
                    data-styles-preset="E4lBliITk"
                  >
                    AI Consulting
                  </h3>
                </div>
                <div
                  className="framer-hw0ron flex flex-col justify-start shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1otixq8"
                    data-styles-preset="Z8KnRQzQq"
                  >
                    Our experts provide strategic guidance, enabling your
                    business to implement AI solutions that drive transformative
                    growth.
                  </p>
                </div>
              </div>
              <div
                className="framer-1ejqpan"
                data-framer-name="Gradient"
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
