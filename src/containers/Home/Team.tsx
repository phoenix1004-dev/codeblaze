import { FC, useState } from "react";
import { MemberIndicator, Slider } from "../../components/Animation";
import { TeamMember } from "../../constants/Team";
import { MEMBER } from "../../type";

type Props = {
  setIsHoverTeam: (v: boolean) => void;
};

const Team: FC<Props> = ({ setIsHoverTeam }) => {
  const [selectedMember, setSelectedMember] = useState<string>("");

  const hoverTeamCard = (name: string) => {
    setSelectedMember(name);
    setIsHoverTeam(name !== "");
  };

  return (
    <section
      className="codeblaze-pfyxhs"
      data-codeblaze-name="Team"
      id="team"
      data-name="Team"
    >
      <div
        className="codeblaze-o0ji5u outline-none flex flex-col justify-start flex-shrink-0 transform-none"
        data-codeblaze-component-type="RichTextContainer"
      >
        <h2
          className="codeblaze-text codeblaze-styles-preset-15mg8bp !text-[35px] sm:!text-[48px] md:!text-[64px] xl:text-[100px]"
          data-styles-preset="IXKxaceG9"
        >
          <span
            data-text-fill="true"
            className="codeblaze-text bg-gradient-to-r from-[rgb(255,255,255)] to-[rgb(112,190,250)]"
          >
            Meet our team
          </span>
        </h2>
      </div>
      <div className="ssr-variant hidden-5tblbe !contents">
        <div className="codeblaze-187tqvi-container">
          <div
            className="codeblaze-lj12j codeblaze-g3iu9v codeblaze-v-g3iu9v !w-full"
            data-codeblaze-name="Team Ticker"
          >
            <div className="codeblaze-99rgx0-container">
              <section className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-[5px] list-none indent-0 opacity-100 mask-image-[linear-gradient(to_right,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_1)_12.5%,_rgba(0,_0,_0,_1)_87.5%,_rgba(0,_0,_0,_0)_100%)] overflow-hidden">
                <ul className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none indent-0 gap-[25px] relative flex-row will-change-transform translate-x-[-0px]">
                  <Slider dir="left" time={30} pos="-50%">
                    {TeamMember.map((item: MEMBER, index: number) => (
                      <li
                        key={index}
                        className="w-[350px !mx-[20px]"
                        style={{ cursor: selectedMember === "" ? "" : "none" }}
                      >
                        <div
                          className="codeblaze-15o1hg6-container w-[350px] flex-shrink-0"
                          data-codeblaze-cursor="1kzuhhy"
                          onMouseEnter={() => hoverTeamCard(item.name)}
                          onMouseLeave={() => hoverTeamCard("")}
                        >
                          <div
                            className="codeblaze-PCfLc codeblaze-NrkXy codeblaze-1psfxqf codeblaze-v-1psfxqf border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] h-full w-full"
                            style={{
                              background:
                                "radial-gradient(50% 50% at 0% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                            }}
                            data-border="true"
                            data-codeblaze-name="Team Dave Jones"
                            data-highlight="true"
                            tabIndex={0}
                          >
                            <div
                              className="codeblaze-wkdxqg border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px]"
                              data-border="true"
                              data-codeblaze-name="Memoji"
                            >
                              <div className="codeblaze-1egdcd8 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,190,250,0.75)_0%,_rgba(10,10,10,0)_100%)]"></div>
                              <div className="codeblaze-uwwp7h">
                                <div
                                  className="absolute inset-0 rounded-inherit"
                                  data-codeblaze-background-image-wrapper="true"
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
                              className="codeblaze-wcisl7"
                              data-codeblaze-name="Text"
                            >
                              <div
                                className="codeblaze-19erqyv outline-none flex flex-col justify-start flex-shrink-0 text-white"
                                data-codeblaze-component-type="RichTextContainer"
                              >
                                <p className="codeblaze-text font-sans text-white text-base tracking-normal">
                                  <span
                                    data-text-fill="true"
                                    className="codeblaze-text bg-gradient-to-r from-white to-blue-400"
                                  >
                                    {item.pos}
                                  </span>
                                </p>
                              </div>
                              <div
                                className="codeblaze-1fzkqxd flex flex-col justify-start shrink-0 text-blue-500 no-underline"
                                data-codeblaze-component-type="RichTextContainer"
                              >
                                <h3
                                  className="codeblaze-text codeblaze-styles-preset-6ghdir !text-[28px]"
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
                          className="codeblaze-15o1hg6-container w-[350px] flex-shrink-0"
                          data-codeblaze-cursor="1kzuhhy"
                          onMouseEnter={() => hoverTeamCard(item.name)}
                          onMouseLeave={() => hoverTeamCard("")}
                        >
                          <div
                            className="codeblaze-PCfLc codeblaze-NrkXy codeblaze-1psfxqf codeblaze-v-1psfxqf border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] h-full w-full"
                            style={{
                              background:
                                "radial-gradient(50% 50% at 0% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                            }}
                            data-border="true"
                            data-codeblaze-name="Team Dave Jones"
                            data-highlight="true"
                            tabIndex={0}
                          >
                            <div
                              className="codeblaze-wkdxqg border border-solid border-[1px] border-[rgb(34,34,34)] rounded-[10px]"
                              data-border="true"
                              data-codeblaze-name="Memoji"
                            >
                              <div className="codeblaze-1egdcd8 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,190,250,0.75)_0%,_rgba(10,10,10,0)_100%)]"></div>
                              <div className="codeblaze-uwwp7h">
                                <div
                                  className="absolute inset-0 rounded-inherit"
                                  data-codeblaze-background-image-wrapper="true"
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
                              className="codeblaze-wcisl7"
                              data-codeblaze-name="Text"
                            >
                              <div
                                className="codeblaze-19erqyv outline-none flex flex-col justify-start flex-shrink-0 text-white"
                                data-codeblaze-component-type="RichTextContainer"
                              >
                                <p className="codeblaze-text font-sans text-white text-base tracking-normal">
                                  <span
                                    data-text-fill="true"
                                    className="codeblaze-text bg-gradient-to-r from-white to-blue-400"
                                  >
                                    {item.pos}
                                  </span>
                                </p>
                              </div>
                              <div
                                className="codeblaze-1fzkqxd flex flex-col justify-start shrink-0 text-blue-500 no-underline"
                                data-codeblaze-component-type="RichTextContainer"
                              >
                                <h3
                                  className="codeblaze-text codeblaze-styles-preset-6ghdir"
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
      <MemberIndicator name={selectedMember} />
    </section>
  );
};

export default Team;
