import logo from "../assets/images/logo.png";
import { NormalButton } from "../components/Button";
import Logo from "../components/Logo/Logo1";
import { NAV_MENU } from "../constants/Link";
import { MenuLink } from "../type";
import Section1 from "../containers/Home/Section1";

const Home = () => {
  return (
    <div
      data-framer-ssr-released-at="2024-11-18T17:03:50.809Z"
      data-framer-page-optimized-at="2024-11-21T07:30:55.702Z"
    >
      <div className="framer-IqNBt framer-vrYYp framer-NrkXy framer-l50WH framer-V74Ls framer-uKIIJ framer-Fw2Wf framer-72rtr7 min-h-screen !w-auto">
        <div className="framer-k2s3e6-container" />
        <div className="framer-ogrscq-container hidden-5tblbe !opacity-0 !-translate-x-1/2 !-translate-y-[100px]">
          <nav
            className="framer-eE9h1 framer-uKIIJ framer-ux1xcs framer-v-ux1xcs border border-solid border-[rgb(34,34,34)] bg-[rgb(15,15,15)] rounded-[10px]"
            data-border="true"
            data-framer-name="Main"
          >
            <div className="framer-1hv1geq" data-framer-name="Logo">
              <div className="framer-1rc6u42" data-framer-name="Logo">
                <div
                  className="absolute inset-0 rounded-inherit"
                  data-framer-background-image-wrapper="true"
                >
                  <img
                    className="block w-full h-full rounded-inherit object-center object-contain"
                    decoding="async"
                    src={logo}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            {NAV_MENU.map((item: MenuLink, index: number) => (
              <a
                key={index}
                className="framer-lu3rjb framer-1rmjqro rounded-[5px]"
                data-framer-name="Services"
                data-highlight="true"
                href={item.link}
              >
                <div
                  className="framer-p69owj outline-none flex flex-col justify-start flex-shrink-0 [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <NormalButton>{item.title}</NormalButton>
                </div>
              </a>
            ))}
            <div className="framer-poqdm0" data-framer-name="Get template">
              <div className="framer-15ydghx-container">
                <a
                  className="framer-bnygp framer-lsiydu framer-v-lsiydu framer-86q8yf bg-[var(--token-dfd29766-9b54-40dd-9398-e62b74c1aefb,rgb(34,34,34))] rounded-[8px]"
                  data-framer-name="Button State 1"
                  data-highlight="true"
                  href="https://tiborbregman.lemonsqueezy.com/buy/7ba08e30-c822-47b8-8af9-9909fc8aeb50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="framer-1nhaedp bg-gradient-radial from-[#70befa] to-transparent rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"
                    data-framer-name="Stroke"
                  ></div>
                  <div
                    className="framer-1lkeuwd bg-[#161616] rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md"
                    data-framer-name="Fill"
                  ></div>
                  <div
                    className="framer-1x509j2 outline-none flex flex-col justify-start flex-shrink-0 text-white link text-blue-500 underline"
                    data-framer-component-type="RichTextContainer"
                  >
                    <h4 className="framer-text font-[Switzer, sans-serif] text-white text-[14px] tracking-normal">
                      <span
                        data-text-fill="true"
                        className="framer-text bg-gradient-to-r from-white to-[#70befa]"
                      >
                        Get template
                      </span>
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="ssr-variant hidden-5tblbe">
          <div className="framer-c341if-container hidden-72rtr7 hidden-wbkh13 hidden-r5chz7 hidden-ncoutt opacity-0 transform -translate-y-[100px]">
            <div
              className="framer-hEVRE framer-PZPbf framer-17q0614 framer-v-17q0614 border-[1px] border-solid border-transparent bg-gradient-radial from-transparent to-transparent rounded-bl-lg rounded-br-lg w-full"
              data-border="true"
              data-framer-name="Phone Navigation"
            >
              <div className="framer-wmhqws" data-framer-name="Menu closed">
                <Logo />
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 hidden-72rtr7 hidden-ncoutt">
          <div className="framer-c341if-container hidden-72rtr7 hidden-wbkh13 hidden-r5chz7 hidden-ncoutt opacity-0 transform -translate-y-[100px]">
            <div
              className="framer-hEVRE framer-PZPbf framer-17q0614 framer-v-17q0614 border-[1px] border-solid border-transparent bg-gradient-radial from-transparent to-transparent rounded-bl-lg rounded-br-lg w-full"
              data-border="true"
              data-framer-name="Phone Navigation"
            >
              <div className="framer-wmhqws" data-framer-name="Menu closed">
                <Logo />
              </div>
            </div>
          </div>
        </div>
        <div
          className="framer-hzeqsp"
          data-framer-name="Main sections"
          data-name="Main sections"
        >
          <Section1 />
        </div>
      </div>
    </div>
  );
};

export default Home;
