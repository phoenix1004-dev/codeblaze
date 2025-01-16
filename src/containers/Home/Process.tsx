import { useState } from "react";
import {
  AnalyzeBlur,
  AnalyzeBox,
  AnimationButton,
  HoverMoveTop,
  InitialAppearance,
} from "../../components/Animation";
import CodeBox from "../../components/CodeBox";
import {
  codeblaze,
  nativescript,
  react,
  remix,
  typescript,
  vite,
  vue,
} from "../../assets/image";

const Process = () => {
  const [isHoverAnalyze, setIsHoverAnalyze] = useState<boolean>(false);
  const [isHoverMaintain, setIsHoverMaintain] = useState<boolean>(false);

  return (
    <section
      className="framer-z0emgc"
      data-framer-name="Process"
      id="process"
      data-name="Process"
    >
      <InitialAppearance
        className="framer-1b77ta1 flex flex-col justify-start shrink-0 opacity-100 [transform:perspective(1200px)]"
        data-framer-component-type="RichTextContainer"
        from={{ top: 0, left: 0 }}
        to={{ top: 0, left: 0 }}
        time={1}
      >
        <h2
          className="framer-text framer-styles-preset-15mg8bp"
          data-styles-preset="IXKxaceG9"
        >
          <span
            data-text-fill="true"
            className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))] !text-[35px] sm:!text-[48px] md:!text-[80px] xl:text-[100px]"
          >
            Develop <b>100x</b> Faster
          </span>
        </h2>
      </InitialAppearance>
      <div
        className="framer-1u2zz68 !flex-col lg:!flex-row"
        data-framer-name="Process Steps"
        data-name="Process Steps"
      >
        <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
          <InitialAppearance
            className="framer-xovc6q opacity-100 !flex-none !w-full lg:!flex-1 lg:!w-1"
            data-border="true"
            data-framer-name="01 Analyze"
            data-name="01 Analyze"
            from={{ top: 100, left: 0 }}
            to={{ top: 0, left: 0 }}
            time={1}
          >
            <div className="framer-1canol3">
              <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
                <div className="framer-b7o9fl-container">
                  <div
                    className="framer-csNpt framer-1e0v1i2 framer-v-1e0v1i2 border border-solid border-[var(--token-dfd29766-9b54-40dd-9398-e62b74c1aefb,#222222)] rounded-[10px] !h-full !w-full"
                    data-border="true"
                    data-framer-name="Desktop 1440, Tablet 810"
                    onMouseEnter={() => setIsHoverAnalyze(true)}
                    onMouseLeave={() => setIsHoverAnalyze(false)}
                  >
                    <div
                      className="framer-z5xv38 border border-solid border-[var(--token-dfd29766-9b54-40dd-9398-e62b74c1aefb,#222222)] bg-[var(--token-c3b293ca-d1b8-41d0-a4df-58182d7e1499,#161616)] rounded-[5px] shadow-[0px_0px_2px_0.5px_var(--token-0a59846b-ae05-40ce-bc7b-1a139c4ffa01,rgba(112,190,250,0.75))]"
                      data-border="true"
                      data-framer-name="Logo"
                    >
                      <div className="framer-tu70xd" data-framer-name="Logo">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src={codeblaze}
                            alt="codeblaze"
                            className="block w-full h-full rounded-inherit object-contain object-center"
                          />
                        </div>
                      </div>
                    </div>
                    <AnalyzeBox
                      className="framer-1kih6qv"
                      border="true"
                      name="Airtable"
                      isActive={isHoverAnalyze}
                    >
                      <div className="framer-1gj98y7 opacity-30 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src={react}
                            alt="react"
                            className="block w-full h-full rounded-inherit object-center object-cover"
                          />
                        </div>
                      </div>
                    </AnalyzeBox>
                    <div
                      className="framer-p8bhcj border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-q3rccd border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-1ry28ob border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-1lapu67 border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-1t9zmoq border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-maefqn border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    />
                    <AnalyzeBox
                      className="framer-4769xr"
                      border="true"
                      name="Gmail"
                      isActive={isHoverAnalyze}
                    >
                      <div className="framer-17wr7i4 opacity-30 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            sizes="(min-width: 1440px) 30px, (min-width: 999px) and (max-width: 1199px) 30px, (min-width: 1200px) and (max-width: 1439px) 30px, (max-width: 809px) 30px, (min-width: 810px) and (max-width: 998px) 30px"
                            src={vite}
                            alt="vite"
                            className="block w-full h-full rounded-inherit object-contain object-center"
                            data-framer-original-sizes="30px"
                          />
                        </div>
                      </div>
                    </AnalyzeBox>
                    <AnalyzeBox
                      className="framer-29sq0s"
                      border="true"
                      name="Midjourney"
                      isActive={isHoverAnalyze}
                    >
                      <div className="framer-s8o8fs opacity-30 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            sizes="(min-width: 1440px) 30px, (min-width: 999px) and (max-width: 1199px) 30px, (min-width: 1200px) and (max-width: 1439px) 30px, (max-width: 809px) 30px, (min-width: 810px) and (max-width: 998px) 30px"
                            src={vue}
                            alt="vue"
                            className="block w-full h-full rounded-inherit object-center object-cover"
                            data-framer-original-sizes="30px"
                          />
                        </div>
                      </div>
                    </AnalyzeBox>
                    <div
                      className="framer-3ks1rw border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-1ht6jap border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <AnalyzeBox
                      className="framer-w1sqf6"
                      border="true"
                      name="Zapier"
                      isActive={isHoverAnalyze}
                    >
                      <div className="framer-4e9j0j opacity-30 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            sizes="(min-width: 1440px) 30px, (min-width: 999px) and (max-width: 1199px) 30px, (min-width: 1200px) and (max-width: 1439px) 30px, (max-width: 809px) 30px, (min-width: 810px) and (max-width: 998px) 30px"
                            src={typescript}
                            alt="typescript"
                            className="block w-full h-full rounded-inherit object-center object-cover"
                            data-framer-original-sizes="30px"
                          />
                        </div>
                      </div>
                    </AnalyzeBox>
                    <div
                      className="framer-c09535 border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <div
                      className="framer-l1mp7u border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#0c0c0c] rounded-lg"
                      data-border="true"
                    ></div>
                    <AnalyzeBox
                      className="framer-12nxdd7"
                      border="true"
                      name="OpenAI"
                      isActive={isHoverAnalyze}
                    >
                      <div className="framer-1ch0wak opacity-30 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src={nativescript}
                            alt="nativescript"
                            className="block w-full h-full rounded-inherit object-center object-cover"
                          />
                        </div>
                      </div>
                    </AnalyzeBox>
                    <AnalyzeBox
                      className="framer-1xwgw7y"
                      border="true"
                      name="Notion"
                      isActive={isHoverAnalyze}
                    >
                      <div className="framer-16door1 opacity-30 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="absolute inset-0 rounded-inherit"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src={remix}
                            alt="remix"
                            className="block w-full h-full rounded-inherit object-center object-cover"
                          />
                        </div>
                      </div>
                    </AnalyzeBox>
                    <AnalyzeBlur isActive={isHoverAnalyze} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-vt23tu"
              data-framer-name="Text"
              data-name="Text"
            >
              <div
                className="framer-1psetrq"
                data-framer-name="Title"
                data-name="Title"
              >
                <div
                  className="framer-1spdnuf hidden-wbkh13 hidden-r5chz7 hidden-5tblbe flex flex-col justify-start flex-shrink-0 transform-none !contents"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3 className="framer-text text-white text-4xl font-medium leading-none tracking-normal">
                    <span
                      data-text-fill="true"
                      className="framer-text bg-gradient-to-r from-white to-blue-400 text-4xl font-medium leading-none tracking-normal"
                    >
                      01
                    </span>
                  </h3>
                </div>
                <div
                  className="framer-1ipjf0i flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir"
                    data-styles-preset="E4lBliITk"
                  >
                    Intelligent A.I Workflow
                  </h3>
                </div>
              </div>
              <div
                className="framer-1e4hi9i flex flex-col justify-start flex-shrink-0 transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1otixq8"
                  data-styles-preset="Z8KnRQzQq"
                >
                  Codeblaze autonomously analyzes your project requirements,
                  identifying workflows, goals, and outcomes with precision.
                  This AI-driven assessment ensures every aspect of your
                  development is aligned with your needs from the start.
                </p>
              </div>
            </div>
            <div
              className="framer-7itsnv"
              data-framer-name="Gradient"
              data-name="Gradient"
            ></div>
          </InitialAppearance>
        </div>
        <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
          <InitialAppearance
            className="framer-q5m83g opacity-100 !flex-none !w-full lg:!flex-1 lg:!w-1"
            data-border="true"
            data-framer-name="02 Build &amp; Implement"
            data-name="02 Build &amp; Implement"
            from={{ top: 100, left: 0 }}
            to={{ top: 0, left: 0 }}
            delay={1}
            time={1}
          >
            <div
              className="framer-144ce2s"
              data-framer-name="Gradient"
              data-name="Gradient"
            />
            <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
              <div className="framer-vtwi8j-container">
                <div
                  className="framer-3q5h6 framer-uKIIJ framer-10gqq9e framer-v-10gqq9e !h-full !w-full"
                  data-framer-name="HTML Desktop 1440"
                >
                  <CodeBox />
                </div>
              </div>
            </div>
            <div
              className="framer-myt0gs"
              data-framer-name="Text"
              data-name="Text"
            >
              <div
                className="framer-idfkgz"
                data-framer-name="Title"
                data-name="Title"
              >
                <div
                  className="framer-11jnhro hidden-wbkh13 hidden-r5chz7 hidden-5tblbe outline-none flex flex-col justify-start flex-shrink-0 !contents"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3 className="framer-text font-sans text-[35px] font-medium tracking-normal leading-[1em] text-white">
                    <span
                      data-text-fill="true"
                      className="framer-text text-4xl bg-gradient-to-r from-white to-blue-400"
                    >
                      02
                    </span>
                  </h3>
                </div>
                <div
                  className="framer-1r27pi outline-none flex flex-col justify-start flex-shrink-0"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir"
                    data-styles-preset="E4lBliITk"
                  >
                    Automated Code Generator
                  </h3>
                </div>
              </div>
              <div
                className="framer-1duo2in outline-none flex flex-col justify-start flex-shrink-0"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1otixq8"
                  data-styles-preset="Z8KnRQzQq"
                >
                  Codeblaze AI takes your input—whether a text prompt, voice
                  command, or image—and generates complete, functional code for
                  your application. The process is fully automated, delivering
                  deployment-ready solutions without any manual intervention.
                </p>
              </div>
            </div>
          </InitialAppearance>
        </div>
        <div className="ssr-variant hidden-5tblbe hidden-ncoutt !contents">
          <InitialAppearance
            className="framer-lrrs13 opacity-100 !flex-none !w-full lg:!flex-1 lg:!w-1"
            data-border="true"
            data-framer-name="03 Maintain &amp; Improve"
            data-name="03 Maintain &amp; Improve"
            from={{ top: 100, left: 0 }}
            to={{ top: 0, left: 0 }}
            delay={2}
            time={1}
          >
            <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 !contents">
              <div
                className="framer-zrd6iz-container"
                onMouseEnter={() => setIsHoverMaintain(true)}
                onMouseLeave={() => setIsHoverMaintain(false)}
              >
                <div
                  className="framer-SbEof framer-h9ksv3 framer-v-h9ksv3 !h-full !w-full"
                  data-framer-name="Desktop 1440 &amp; 1200 &amp; Tablet 999"
                >
                  <div
                    className="framer-1mgt688 border border-solid border-[rgba(34,34,34)] bg-[rgb(15,15,15)] rounded-[5px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)]"
                    data-border="true"
                    data-framer-name="Update available"
                  >
                    <div
                      className="framer-15p655x outline-none flex flex-col justify-start flex-shrink-0 text-[rgb(156,156,156)] [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] [--framer-paragraph-spacing:0px] transform -translate-y-1/2"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p className="framer-text [--font-selector:RFM7Switzer-regular] font-[Switzer,'Switzer Placeholder',sans-serif] text-[15px] tracking-[0px] leading-[1.4em] text-left !text-[#9b9b9b]">
                        Codeblaze Savings
                      </p>
                    </div>
                    <div className="framer-12ok1dm-container transform translate-y-[-50%]">
                      <AnimationButton>
                        <div
                          className="framer-jRrTJ framer-jipnyk framer-v-jipnyk bg-[var(--token-dfd29766-9b54-40dd-9398-e62b74c1aefb,#222222)] rounded-[8px]"
                          data-framer-name="Button State 1"
                          data-highlight="true"
                        >
                          <div
                            className="framer-5r6p28 bg-radial-gradient-[25%_50%_at_50%_100%,var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,#70befa)_0%,rgba(171,171,171,0)_100%] rounded-[10px]"
                            data-framer-name="Stroke"
                          ></div>
                          <div
                            className="framer-1g3dgsk bg-[var(--token-c3b293ca-d1b8-41d0-a4df-58182d7e1499,#161616)] rounded-[8px]"
                            data-framer-name="Fill"
                          ></div>
                          <div
                            className="framer-3p9rh6 outline-none flex flex-col justify-start flex-shrink-0 text-[var(--extracted-1eung3n,#ffffff)] [--framer-link-text-color:#0099ff] [--framer-link-text-decoration:underline] transform-none"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4 className="framer-text [--font-selector:'FS;Switzer-regular'] [--framer-font-family:'Switzer','Switzer Placeholder',sans-serif] text-[14px] tracking-[0px] text-[var(--extracted-1eung3n,#ffffff)]">
                              <span
                                data-text-fill="true"
                                className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))]"
                              >
                                HUGE
                              </span>
                            </h4>
                          </div>
                          <div className="framer-xe6cjg transform rotate-360">
                            <div
                              className="absolute top-0 right-0 bottom-0 left-0 rounded-none"
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                src="https://framerusercontent.com/images/5eEBrcgZrpTpswgmkk51nT0I9c.png"
                                alt="arrow-up"
                                className="block w-full h-full rounded-none object-center object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </AnimationButton>
                    </div>
                  </div>
                  <HoverMoveTop
                    className="w-full h-full"
                    isActive={isHoverMaintain}
                    from={0}
                    to={-55}
                  >
                    <div className="w-full h-full overflow-visable">
                      <div
                        className="framer-1ej6bkh border border-solid border-gray-800 bg-[#0c0c0c] rounded-[5px] shadow-none opacity-100"
                        data-border="true"
                        data-framer-name="Operational cost"
                      >
                        <div
                          className="framer-jzu6mj outline-none flex flex-col justify-start flex-shrink-0 text-[rgb(156,156,156)] [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] [--framer-paragraph-spacing:0px] transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text [--font-selector:RFM7Switzer-regular] font-[Switzer,'Switzer Placeholder',sans-serif] text-[15px] tracking-[0px] leading-[1.4em] text-left !text-[rgb(156,156,156)]">
                            Operational cost
                          </p>
                        </div>
                        <div
                          className="framer-yljaau flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text font-switzer text-white text-left text-sm leading-6">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))]"
                            >
                              -90%
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-ztxi9q border border-solid border-[rgba(34,34,34)] bg-[#0c0c0c] rounded-[5px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)]"
                        data-border="true"
                        data-framer-name="Security"
                      >
                        <div
                          className="framer-uzmsm2 outline-none flex flex-col justify-start flex-shrink-0 text-[rgb(156,156,156)] [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] [--framer-paragraph-spacing:0px] transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text [--font-selector:RFM7Switzer-regular] font-[Switzer,'Switzer Placeholder',sans-serif] text-[15px] tracking-[0px] leading-[1.4em] text-left !text-[rgb(156,156,156)]">
                            Security
                          </p>
                        </div>
                        <div
                          className="framer-1dngx23 flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text font-switzer text-white text-left text-sm leading-6">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))]"
                            >
                              +300%
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-asgcoi border border-gray-800 bg-[#0c0c0c] rounded-[5px] shadow-sm opacity-50"
                        data-border="true"
                        data-framer-name="Workflow efficiency"
                      >
                        <div
                          className="framer-l10ppw outline-none flex flex-col justify-start flex-shrink-0 text-[rgb(156,156,156)] [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] [--framer-paragraph-spacing:0px] transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text [--font-selector:RFM7Switzer-regular] font-[Switzer,'Switzer Placeholder',sans-serif] text-[15px] tracking-[0px] leading-[1.4em] text-left !text-[rgb(156,156,156)]">
                            Workflow efficiency
                          </p>
                        </div>
                        <div
                          className="framer-ddaah8 flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text font-switzer text-white text-left text-sm leading-6">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))]"
                            >
                              +800%
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-s4ydu2 border border-gray-800 bg-[#0c0c0c] rounded-md shadow-sm opacity-25"
                        data-border="true"
                        data-framer-name="Software speed"
                      >
                        <div
                          className="framer-1xm3s2b outline-none flex flex-col justify-start flex-shrink-0 text-[rgb(156,156,156)] [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] [--framer-paragraph-spacing:0px] transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text [--font-selector:RFM7Switzer-regular] font-[Switzer,'Switzer Placeholder',sans-serif] text-[15px] tracking-[0px] leading-[1.4em] text-left !text-[rgb(156,156,156)]">
                            Software speed
                          </p>
                        </div>
                        <div
                          className="framer-10my0e2 flex flex-col justify-start flex-shrink-0 text-white text-blue-500 underline transform -translate-y-1/2"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text font-switzer text-white text-left text-sm leading-6">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))]"
                            >
                              +1000%
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </HoverMoveTop>
                </div>
              </div>
            </div>
            <div
              className="framer-1jyh00d"
              data-framer-name="Text"
              data-name="Text"
            >
              <div
                className="framer-hgftye"
                data-framer-name="Title"
                data-name="Title"
              >
                <div
                  className="framer-1vcocuf hidden-wbkh13 hidden-r5chz7 hidden-5tblbe outline-none flex flex-col justify-start flex-shrink-0 transform-none !contents"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3 className="framer-text font-inter-tight text-2xl font-medium tracking-normal leading-tight text-white">
                    <span
                      data-text-fill="true"
                      className="framer-text bg-gradient-to-r from-[var(--token-e312cf2d-478c-4df0-9124-23464ed48b15,rgb(255,255,255))] to-[var(--token-c9d7fe05-7134-4c81-9c0d-206984b9774e,rgb(112,190,250))] text-4xl"
                    >
                      03
                    </span>
                  </h3>
                </div>
                <div
                  className="framer-1s4xy7i outline-none flex flex-col justify-start flex-shrink-0 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-6ghdir"
                    data-styles-preset="E4lBliITk"
                  >
                    Seamless Upgrades
                  </h3>
                </div>
              </div>
              <div
                className="framer-1tdfzzm outline-none flex flex-col justify-start flex-shrink-0 transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1otixq8"
                  data-styles-preset="Z8KnRQzQq"
                >
                  After deployment, codeblaze empowers users to upgrade their
                  projects with ease. By simply providing additional prompts,
                  the AI generates updates and enhancements, ensuring your
                  application evolves effortlessly to meet changing need.
                </p>
              </div>
            </div>
            <div
              className="framer-17a14y"
              data-framer-name="Gradient"
              data-name="Gradient"
            ></div>
          </InitialAppearance>
        </div>
      </div>
    </section>
  );
};

export default Process;
