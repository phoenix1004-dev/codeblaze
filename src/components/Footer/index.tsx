import { logo } from "../../assets/image";
import { SOCIALMEDIA_LINK_LIST } from "../../constants/Link";
import { SOCIALMEDIA } from "../../type";

const Footer = () => {
  return (
    <footer
      className="framer-1wook1e"
      data-framer-name="Footer"
      data-name="Footer"
    >
      <div
        className="framer-lcv5t9"
        data-framer-name="Newsletter"
        data-name="Newsletter"
      >
        <div className="framer-5ea7pa" data-border="true">
          <div
            className="framer-1hfx2vh"
            data-framer-name="Text"
            data-name="Text"
          >
            <div className="ssr-variant hidden-5tblbe">
              <div
                className="framer-rcj2g6 flex flex-col justify-start flex-shrink-0 transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h3
                  className="framer-text framer-styles-preset-6ghdir"
                  data-styles-preset="E4lBliITk"
                >
                  <span
                    data-text-fill="true"
                    className="framer-text bg-gradient-to-r from-white to-[#70bfea]"
                  >
                    Contact
                  </span>
                </h3>
              </div>
            </div>
            <div
              className="framer-2q0y32 hidden-ncoutt hidden-5tblbe flex flex-col justify-start flex-shrink-0 transform-none"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1otixq8"
                data-styles-preset="Z8KnRQzQq"
              >
                Have questions? Reach out to us at support@codeblaze.ai.
              </p>
            </div>
          </div>
          <div className="framer-x0cb7i-container">
            <div className="w-full h-full flex justify-center items-center relative">
              <form
                className="w-full h-auto flex relative flex-row text-[rgb(161, 214, 255)] gap-2.5"
                method="POST"
              >
                <input
                  type="email"
                  data-name="email"
                  placeholder="name@email.com"
                  className="v1 framer-custom-input appearance-none w-full h-auto outline-none border-none px-4.5 py-2.5 rounded-md text-sm font-normal leading-none bg-transparent text-[rgb(255, 255, 255)] shadow-[inset_0_0_0_0px_rgb(112,190,250),inset_0_0_0_1px_rgb(34,34,34)]"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  data-1p-ignore="true"
                  value=""
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
            className="framer-1axqknl"
            data-framer-name="Gradient"
            data-name="Gradient"
          ></div>
        </div>
      </div>
      <div className="framer-135ipx1" data-framer-name="Menu" data-name="Menu">
        <div className="framer-15ktov7">
          <div
            className="framer-1ua9n3d"
            data-framer-name="Logo"
            data-name="Logo"
          >
            <div
              className="framer-1octt6 !w-[200px] !h-[50px]"
              data-framer-name="Logo Image"
              data-name="Logo Image"
            >
              <div
                className="absolute top-0 right-0 bottom-0 left-0 rounded-none"
                data-framer-background-image-wrapper="true"
              >
                <img
                  decoding="async"
                  src={logo}
                  alt="logo"
                  className="block w-full h-full rounded-none object-center object-contain"
                />
              </div>
            </div>
          </div>
          <div className="framer-94yyjc">
            <div
              className="framer-146y9ol"
              data-framer-name="Socials"
              data-name="Socials"
            >
              <div
                className="framer-13qfdx9 flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                data-framer-component-type="RichTextContainer"
              >
                <p className="framer-text text-white text-[15px] leading-[1.4em] tracking-normal font-sans">
                  <span
                    data-text-fill="true"
                    className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                  >
                    Socials
                  </span>
                </p>
              </div>
              {SOCIALMEDIA_LINK_LIST.map((item: SOCIALMEDIA, index: number) => (
                <div key={index} className="ssr-variant hidden-5tblbe">
                  <div className="framer-u6c4zq-container">
                    <a
                      className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                      data-framer-name="Footer Link"
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
                        className="framer-zos1th flex flex-col !w-[90px]"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          {item.title}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              {/* <div className="ssr-variant hidden-5tblbe">
                <div className="framer-u6c4zq-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="https://www.instagram.com/codeblaze.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram color="white" />
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Instagram
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-1r0f7no-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare color="white" />
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Twitter
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-tcb6ra-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin color="white" />
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        LinkedIn
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-94wwb1-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook color="white" />
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Facebook
                      </p>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
            <div
              className="framer-1yja4ab"
              data-framer-name="Links"
              data-name="Links"
            >
              <div
                className="framer-1a8cu23 flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                data-framer-component-type="RichTextContainer"
              >
                <p className="framer-text text-white text-[15px] leading-[1.4em] tracking-normal font-sans">
                  <span
                    data-text-fill="true"
                    className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                  >
                    Links
                  </span>
                </p>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-uk2mh6-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="./#services"
                    target="_blank"
                  >
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Home
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-xmcuuy-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="./#about"
                    target="_blank"
                  >
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        About
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-vugw55-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="./#"
                    target="_blank"
                  >
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Features
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-1vg0fww-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="./#faq"
                    target="_blank"
                  >
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        FAQ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ssr-variant hidden-5tblbe">
                <div className="framer-e322lx-container">
                  <a
                    className="framer-f8bpb framer-l50WH framer-1jysear framer-v-1jysear framer-3jgckd w-full h-full"
                    data-framer-name="Footer Link"
                    href="./#contact"
                    target="_blank"
                  >
                    <div
                      className="framer-zos1th flex flex-col justify-start flex-shrink-0 transform-none outline-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
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
            className="framer-tcg6s9 hidden-5tblbe"
            data-framer-name="Credits"
            data-name="Credits"
          >
            <div
              className="framer-1tq6m41 flex flex-col justify-start flex-shrink-0 transform-none outline-none"
              data-framer-component-type="RichTextContainer"
            >
              <p className="framer-text text-white text-[15px] leading-[1.4em] tracking-normal font-sans">
                <span
                  data-text-fill="true"
                  className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                >
                  Legal
                </span>
              </p>
            </div>
            <div
              className="framer-awy7jg flex flex-col justify-start flex-shrink-0 transform-none outline-none"
              data-framer-component-type="RichTextContainer"
            >
              <p className="framer-text text-[rgb(156,156,156)] text-[15px] leading-[1.4em] !text-white">
                <a
                  className="framer-text framer-styles-preset-57rakp !mb-[5px]"
                  data-styles-preset="zMpsiMOLk"
                  href="./term"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
                <br className="framer-text" />
                <a
                  className="framer-text framer-styles-preset-57rakp"
                  data-styles-preset="zMpsiMOLk"
                  href=".privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy & Policy
                </a>
                <br className="framer-text" />
                <a
                  className="framer-text framer-styles-preset-57rakp"
                  data-styles-preset="zMpsiMOLk"
                  href="./disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disclaimer
                </a>
                <br className="framer-text" />
                <a
                  className="framer-text framer-styles-preset-57rakp"
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
      <div className="framer-zvvbtb">
        <div
          className="framer-156dqtz"
          data-framer-name="Line"
          data-name="Line"
        ></div>
        <div
          className="framer-b2uskf flex flex-col justify-start flex-shrink-0 transform-none outline-none"
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-1otixq8"
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
