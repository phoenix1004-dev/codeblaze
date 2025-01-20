import { codeblaze2 } from "../../assets/image";
import { SOCIALMEDIA_LINK_LIST } from "../../constants/Link";
import { SOCIALMEDIA } from "../../type";

const Footer = () => {
  return (
    <footer
      className="codeblaze-1wook1e"
      data-codeblaze-name="Footer"
      data-name="Footer"
    >
      <div
        className="codeblaze-lcv5t9"
        data-codeblaze-name="Newsletter"
        data-name="Newsletter"
      >
        <div className="codeblaze-5ea7pa !items-end" data-border="true">
          <div
            className="codeblaze-1hfx2vh"
            data-codeblaze-name="Text"
            data-name="Text"
          >
            <div className="ssr-variant hidden-5tblbe">
              <div
                className="codeblaze-rcj2g6 flex flex-col justify-start flex-shrink-0 transform-none"
                data-codeblaze-component-type="RichTextContainer"
              >
                <h3
                  className="codeblaze-text codeblaze-styles-preset-6ghdir"
                  data-styles-preset="E4lBliITk"
                >
                  <span
                    data-text-fill="true"
                    className="codeblaze-text bg-gradient-to-r from-white to-[#70bfea]"
                  >
                    Contact
                  </span>
                </h3>
              </div>
            </div>
            <div
              className="codeblaze-2q0y32 hidden-ncoutt hidden-5tblbe flex flex-col justify-start flex-shrink-0 transform-none"
              data-codeblaze-component-type="RichTextContainer"
            >
              <p
                className="codeblaze-text codeblaze-styles-preset-1otixq8"
                data-styles-preset="Z8KnRQzQq"
              >
                Stay updated with the latest breakthroughs and announcements in
                the world of A.I. by subscribing to our newsletter
              </p>
            </div>
          </div>
          <div className="codeblaze-x0cb7i-container">
            <div className="w-full h-full flex justify-center items-center relative">
              <form
                className="w-full h-auto flex relative flex-row text-[rgb(161, 214, 255)] gap-2.5"
                method="POST"
              >
                <input
                  type="email"
                  data-name="email"
                  placeholder="name@email.com"
                  className="v1 codeblaze-custom-input appearance-none w-full h-auto outline-none border-none px-4.5 py-2.5 rounded-md text-sm font-normal leading-none bg-transparent text-[rgb(255, 255, 255)] shadow-[inset_0_0_0_0px_rgb(112,190,250),inset_0_0_0_1px_rgb(34,34,34)] text-white px-2"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  data-1p-ignore="true"
                  defaultValue=""
                />

                <div className="relative top-0 right-0 bottom-0">
                  <input
                    type="submit"
                    className="appearance-none w-full h-full outline-none border-none cursor-pointer py-[5px] px-[17px] rounded-lg text-sm font-normal leading-none bg-[rgb(22,22,22)] text-[rgb(161,214,255)] z-10 shadow-[0px_0px_3px_rgb(112,190,250)]"
                    value="subscribe"
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            className="codeblaze-1axqknl"
            data-codeblaze-name="Gradient"
            data-name="Gradient"
          ></div>
        </div>
      </div>
      <div
        className="codeblaze-135ipx1"
        data-codeblaze-name="Menu"
        data-name="Menu"
      >
        <div className="codeblaze-15ktov7">
          <div
            className="codeblaze-1ua9n3d"
            data-codeblaze-name="Logo"
            data-name="Logo"
          >
            <div
              className="codeblaze-1octt6 !w-[200px] !h-[50px]"
              data-codeblaze-name="Logo Image"
              data-name="Logo Image"
            >
              <div
                className="absolute top-0 right-0 bottom-0 left-0 rounded-none"
                data-codeblaze-background-image-wrapper="true"
              >
                <img
                  decoding="async"
                  src={codeblaze2}
                  alt="logo"
                  className="block w-full h-full rounded-none object-center object-contain"
                />
              </div>
            </div>
          </div>
          <div className="codeblaze-94yyjc">
            <div
              className="codeblaze-146y9ol"
              data-codeblaze-name="Socials"
              data-name="Socials"
            >
              <div
                className="codeblaze-13qfdx9 flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                data-codeblaze-component-type="RichTextContainer"
              >
                <p className="codeblaze-text text-white text-[15px] leading-[1.4em] tracking-normal font-sans">
                  <span
                    data-text-fill="true"
                    className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                  >
                    Socials
                  </span>
                </p>
              </div>
              {SOCIALMEDIA_LINK_LIST.map((item: SOCIALMEDIA, index: number) => (
                <div key={index} className="ssr-variant hidden-5tblbe">
                  <div className="codeblaze-u6c4zq-container">
                    <a
                      className="codeblaze-f8bpb codeblaze-l50WH codeblaze-1jysear codeblaze-v-1jysear codeblaze-3jgckd w-full h-full"
                      data-codeblaze-name="Footer Link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-5 h-5"
                        src={item.icon}
                        alt={item.title}
                      />
                      <div
                        className="codeblaze-zos1th flex flex-col !w-[90px]"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          {item.title}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="codeblaze-1yja4ab"
              data-codeblaze-name="Links"
              data-name="Links"
            >
              <div
                className="codeblaze-1a8cu23 flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                data-codeblaze-component-type="RichTextContainer"
              >
                <p className="codeblaze-text text-white text-[15px] leading-[1.4em] tracking-normal font-sans">
                  <span
                    data-text-fill="true"
                    className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                  >
                    Links
                  </span>
                </p>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="codeblaze-uk2mh6-container">
                  <a
                    className="codeblaze-f8bpb codeblaze-l50WH codeblaze-1jysear codeblaze-v-1jysear codeblaze-3jgckd w-full h-full"
                    data-codeblaze-name="Footer Link"
                    href="./#services"
                    target="_blank"
                  >
                    <div
                      className="codeblaze-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Home
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="codeblaze-xmcuuy-container">
                  <a
                    className="codeblaze-f8bpb codeblaze-l50WH codeblaze-1jysear codeblaze-v-1jysear codeblaze-3jgckd w-full h-full"
                    data-codeblaze-name="Footer Link"
                    href="./#about"
                    target="_blank"
                  >
                    <div
                      className="codeblaze-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        About
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="codeblaze-vugw55-container">
                  <a
                    className="codeblaze-f8bpb codeblaze-l50WH codeblaze-1jysear codeblaze-v-1jysear codeblaze-3jgckd w-full h-full"
                    data-codeblaze-name="Footer Link"
                    href="./#"
                    target="_blank"
                  >
                    <div
                      className="codeblaze-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Features
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="codeblaze-1vg0fww-container">
                  <a
                    className="codeblaze-f8bpb codeblaze-l50WH codeblaze-1jysear codeblaze-v-1jysear codeblaze-3jgckd w-full h-full"
                    data-codeblaze-name="Footer Link"
                    href="./#faq"
                    target="_blank"
                  >
                    <div
                      className="codeblaze-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        FAQ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="codeblaze-e322lx-container">
                  <a
                    className="codeblaze-f8bpb codeblaze-l50WH codeblaze-1jysear codeblaze-v-1jysear codeblaze-3jgckd w-full h-full"
                    data-codeblaze-name="Footer Link"
                    href="./#contact"
                    target="_blank"
                  >
                    <div
                      className="codeblaze-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Contact
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="codeblaze-tcg6s9 hidden-5tblbe"
            data-codeblaze-name="Credits"
            data-name="Credits"
          >
            <div
              className="codeblaze-1tq6m41 flex flex-col justify-start flex-shrink-0 transform-none outline-none"
              data-codeblaze-component-type="RichTextContainer"
            >
              <p className="codeblaze-text text-white text-[15px] leading-[1.4em] tracking-normal font-sans">
                <span
                  data-text-fill="true"
                  className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                >
                  Legal
                </span>
              </p>
            </div>
            <div
              className="codeblaze-awy7jg flex flex-col justify-start flex-shrink-0 transform-none outline-none"
              data-codeblaze-component-type="RichTextContainer"
            >
              <p className="codeblaze-text text-[rgb(156,156,156)] text-[15px] !leading-[28px] !text-white !font-outfit">
                <a
                  className="codeblaze-text codeblaze-styles-preset-57rakp !font-outfit !text-[15px]"
                  data-styles-preset="zMpsiMOLk"
                  href="./term"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
                <br className="codeblaze-text" />
                <a
                  className="codeblaze-text codeblaze-styles-preset-57rakp !font-outfit !text-[15px]"
                  data-styles-preset="zMpsiMOLk"
                  href="privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy & Policy
                </a>
                <br className="codeblaze-text" />
                <a
                  className="codeblaze-text codeblaze-styles-preset-57rakp !font-outfit !text-[15px]"
                  data-styles-preset="zMpsiMOLk"
                  href="./disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disclaimer
                </a>
                <br className="codeblaze-text" />
                <a
                  className="codeblaze-text codeblaze-styles-preset-57rakp !font-outfit !text-[15px]"
                  data-styles-preset="zMpsiMOLk"
                  href="./cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie & GDPR
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="codeblaze-zvvbtb">
        <div
          className="codeblaze-156dqtz"
          data-codeblaze-name="Line"
          data-name="Line"
        ></div>
        <div
          className="codeblaze-b2uskf flex flex-col justify-start flex-shrink-0 transform-none outline-none"
          data-codeblaze-component-type="RichTextContainer"
        >
          <p
            className="codeblaze-text codeblaze-styles-preset-1otixq8"
            data-styles-preset="Z8KnRQzQq"
          >
            © 2025, Codeblaze Inc - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
