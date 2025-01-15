import { Slider } from "../../components/Animation";
import { TeamMember } from "../../constants/Team";
import { MEMBER } from "../../type";

const Team = () => {
  return (
    <section
      className="framer-pfyxhs"
      data-framer-name="Team"
      id="team"
      data-name="Team"
    >
      <div
        className="framer-o0ji5u outline-none flex flex-col justify-start flex-shrink-0 transform-none"
        data-framer-component-type="RichTextContainer"
      >
        <h2
          className="framer-text framer-styles-preset-15mg8bp"
          data-styles-preset="IXKxaceG9"
        >
          <span
            data-text-fill="true"
            className="framer-text bg-gradient-to-r from-[rgb(255,255,255)] to-[rgb(112,190,250)]"
          >
            Meet our team
          </span>
        </h2>
      </div>
      <div className="ssr-variant hidden-5tblbe">
        <div className="framer-187tqvi-container">
          <div
            className="framer-lj12j framer-g3iu9v framer-v-g3iu9v w-full"
            data-framer-name="Team Ticker"
          >
            <div className="framer-99rgx0-container">
              <section className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-[5px] list-none indent-0 opacity-100 mask-image-[linear-gradient(to_right,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_1)_12.5%,_rgba(0,_0,_0,_1)_87.5%,_rgba(0,_0,_0,_0)_100%)] overflow-hidden">
                <ul className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none indent-0 gap-[25px] relative flex-row will-change-transform translate-x-[-0px]">
                  <Slider dir="left" time={30} pos="-50%">
                    {TeamMember.map((item: MEMBER, index: number) => (
                      <li key={index} className="w-[350px !mx-[20px]">
                        <div
                          className="framer-15o1hg6-container w-[350px] flex-shrink-0"
                          data-framer-cursor="1kzuhhy"
                        >
                          <div
                            className="framer-PCfLc framer-NrkXy framer-1psfxqf framer-v-1psfxqf border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] h-full w-full"
                            style={{
                              background:
                                "radial-gradient(50% 50% at 0% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                            }}
                            data-border="true"
                            data-framer-name="Team Dave Jones"
                            data-highlight="true"
                            tabIndex={0}
                          >
                            <div
                              className="framer-wkdxqg border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px]"
                              data-border="true"
                              data-framer-name="Memoji"
                            >
                              <div className="framer-1egdcd8 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,190,250,0.75)_0%,_rgba(10,10,10,0)_100%)]"></div>
                              <div className="framer-uwwp7h">
                                <div
                                  className="absolute inset-0 rounded-inherit"
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    src={item.avatar}
                                    alt={item.name}
                                    className="block w-full h-full rounded-inherit object-center object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="framer-wcisl7"
                              data-framer-name="Text"
                            >
                              <div
                                className="framer-19erqyv outline-none flex flex-col justify-start flex-shrink-0 text-white"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p className="framer-text font-sans text-white text-base tracking-normal">
                                  <span
                                    data-text-fill="true"
                                    className="framer-text bg-gradient-to-r from-white to-blue-400"
                                  >
                                    {item.pos}
                                  </span>
                                </p>
                              </div>
                              <div
                                className="framer-1fzkqxd flex flex-col justify-start shrink-0 text-blue-500 no-underline"
                                data-framer-component-type="RichTextContainer"
                              >
                                <h3
                                  className="framer-text framer-styles-preset-6ghdir"
                                  data-styles-preset="E4lBliITk"
                                >
                                  {item.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                    {TeamMember.map((item: MEMBER, index: number) => (
                      <li key={index} className="w-[350px] !mx-[20px]">
                        <div
                          className="framer-15o1hg6-container w-[350px] flex-shrink-0"
                          data-framer-cursor="1kzuhhy"
                        >
                          <div
                            className="framer-PCfLc framer-NrkXy framer-1psfxqf framer-v-1psfxqf border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] h-full w-full"
                            style={{
                              background:
                                "radial-gradient(50% 50% at 0% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                            }}
                            data-border="true"
                            data-framer-name="Team Dave Jones"
                            data-highlight="true"
                            tabIndex={0}
                          >
                            <div
                              className="framer-wkdxqg border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px]"
                              data-border="true"
                              data-framer-name="Memoji"
                            >
                              <div className="framer-1egdcd8 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,190,250,0.75)_0%,_rgba(10,10,10,0)_100%)]"></div>
                              <div className="framer-uwwp7h">
                                <div
                                  className="absolute inset-0 rounded-inherit"
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    src={item.avatar}
                                    alt={item.name}
                                    className="block w-full h-full rounded-inherit object-center object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="framer-wcisl7"
                              data-framer-name="Text"
                            >
                              <div
                                className="framer-19erqyv outline-none flex flex-col justify-start flex-shrink-0 text-white"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p className="framer-text font-sans text-white text-base tracking-normal">
                                  <span
                                    data-text-fill="true"
                                    className="framer-text bg-gradient-to-r from-white to-blue-400"
                                  >
                                    {item.pos}
                                  </span>
                                </p>
                              </div>
                              <div
                                className="framer-1fzkqxd flex flex-col justify-start shrink-0 text-blue-500 no-underline"
                                data-framer-component-type="RichTextContainer"
                              >
                                <h3
                                  className="framer-text framer-styles-preset-6ghdir"
                                  data-styles-preset="E4lBliITk"
                                >
                                  {item.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </Slider>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
