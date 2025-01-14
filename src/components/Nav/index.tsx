import { NAV_MENU } from "../../constants/Link";
import { MenuLink } from "../../type";
import { NormalButton } from "../Button";
import Logo from "../Logo/Logo2";

const Nav = () => {
  return (
    <div className="framer-83vgnn-container opacity-100 will-change-transform">
      <nav
        className="framer-xM5rw framer-uKIIJ framer-1gv67ej framer-v-1gv67ej !h-full !w-full"
        data-framer-name="Home"
      >
        <Logo />
        <div
          className="framer-bhlto9 border border-solid border-[#222222] backdrop-blur-[0px] bg-[#0f0f0f] rounded-[10px]"
          data-border="true"
          data-framer-name="Menu"
        >
          {NAV_MENU.map((item: MenuLink, index: number) => (
            <a
              key={index}
              className="framer-65wbii framer-11p22wi rounded-[5px]"
              data-framer-name="Services"
              data-highlight="true"
              href={item.link}
            >
              <div
                className="framer-q0svcg outline-none flex flex-col justify-start flex-shrink-0 [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <NormalButton>{item.title}</NormalButton>
              </div>
            </a>
          ))}
        </div>
        <div className="framer-s59e38" data-framer-name="Get this template">
          <div className="framer-1u65l8y" data-framer-name="Filler" />
          <div className="framer-1g2rjbk-container">
            <a
              className="framer-hhOXC framer-1qihf93 framer-v-1qihf93 framer-9ti88g bg-[var(--token-dfd29766-9b54-40dd-9398-e62b74c1aefb,rgb(34,34,34))] rounded-[8px]"
              data-framer-name="Button State 1"
              data-highlight="true"
              href="https://tiborbregman.lemonsqueezy.com/buy/7ba08e30-c822-47b8-8af9-9909fc8aeb50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="framer-11purux bg-gradient-radial from-[#70befa] to-transparent rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"
                data-framer-name="Stroke"
              />
              <div
                className="framer-1qkh0sq bg-[#161616] rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md"
                data-framer-name="Fill"
              />
              <div
                className="framer-1mkf86x outline-none flex flex-col justify-start flex-shrink-0 text-white link text-blue-500 underline"
                data-framer-component-type="RichTextContainer"
              >
                <h4 className="framer-text font-[Switzer, sans-serif] text-white tracking-normal">
                  <span
                    data-text-fill="true"
                    className="framer-text text-[14px] bg-gradient-to-r from-white to-[#70befa]"
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
  );
};

export default Nav;
