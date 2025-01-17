import { useState } from "react";
import {
  AnimationButton,
  InitialAppearance,
  PriceIndicator,
} from "../../components/Animation";

type PriceCursor = {
  top: number;
  left: number;
  width: number;
};

const Price = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [status, setStatus] = useState<PriceCursor>({
    top: 7,
    left: 7,
    width: 180,
  });

  return (
    <section
      className="framer-1o8mlri"
      data-framer-name="Subscriptions"
      id="pricing"
      data-name="Subscriptions"
    >
      <div className="framer-1gya8sz" data-framer-name="Text" data-name="Text">
        <div
          className="framer-13f5txl outline-none flex flex-col justify-start flex-shrink-0 transform-none"
          data-framer-component-type="RichTextContainer"
        >
          <h2
            className="framer-text framer-styles-preset-15mg8bp !text-[35px] sm:!text-[48px] md:!text-[64px] xl:text-[100px]"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="framer-text bg-gradient-to-r from-white to-[#70BEFA] w-full text-center"
            >
              Subscriptions
            </span>
          </h2>
        </div>
        <div
          className="framer-l8ruie outline-none flex flex-col justify-start flex-shrink-0 transform-none"
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-1otixq8 !text-center"
            data-styles-preset="Z8KnRQzQq"
          >
            Three different subscriptions to match your companies' needs.
          </p>
        </div>
      </div>
      <div className="ssr-variant hidden-5tblbe !contents">
        <div className="framer-1a4uvrj-container">
          <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 hidden-ncoutt !contents">
            <div
              className="framer-ujNZ3 framer-V74Ls framer-l50WH framer-1fpfaar framer-v-1fpfaar !w-full"
              data-framer-name="Desktop 1440 Monthly"
            >
              <div
                className="framer-nk5i5h border border-solid border-[rgb(34,34,34)] bg-[rgb(15,15,15)] rounded-[10px]"
                data-border="true"
                data-framer-name="Subscriptions - Choice"
              >
                <PriceIndicator status={status} />
                <div
                  className="framer-kkh85t rounded-[5px]"
                  data-framer-name="Monthly"
                  onMouseDown={() => {
                    setStatus({ top: 7, left: 7, width: 180 });
                    setIsMonthly(true);
                  }}
                >
                  <div
                    className="framer-c1924z outline-none flex flex-col justify-start flex-shrink-0"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p className="framer-text text-white text-sm leading-normal">
                      <span
                        data-text-fill="true"
                        className={`framer-text ${
                          isMonthly
                            ? "bg-gradient-to-r from-white to-[#70bafa]"
                            : "!bg-[#9c9c9c]"
                        }`}
                      >
                        Monthly pay as you use
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="framer-1btv2o1 rounded-[5px]"
                  data-framer-name="Annually"
                  data-highlight="true"
                  tabIndex={0}
                  onMouseDown={() => {
                    setStatus({ top: 7, left: 200, width: 90 });
                    setIsMonthly(false);
                  }}
                >
                  <div
                    className="framer-l1hrhw flex flex-col justify-start flex-shrink-0 text-[#9c9c9c]"
                    data-framer-component-type="RichTextContainer"
                  >
                    {isMonthly ? (
                      <p className="framer-text !text-[rgb(156,156,156)] text-[14px]">
                        Annually
                      </p>
                    ) : (
                      <p className="framer-text text-white text-sm leading-normal">
                        <span
                          data-text-fill="true"
                          className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Annually
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="framer-1e3uv2o !flex-col xl:!flex-row"
                data-framer-name="Pricing"
              >
                <InitialAppearance
                  className="framer-10udvia border-[1px] border-solid border-l-[1px] border-r-0 border-t-[1px] border-b-[1px] border-[#222222] bg-[radial-gradient(50%_25%_at_100%_0%,rgba(80,176,250,0.1)_0%,rgba(64,140,199,0.1)_36.5%,rgb(13,13,13)_100%)] rounded-[12px] opacity-100 !flex-none !w-full xl:!flex-1 xl:w-1"
                  data-border="true"
                  data-framer-name="Basic"
                  from={{ top: 0, left: -100 }}
                  to={{ top: 0, left: 0 }}
                  time={1}
                >
                  <div className="framer-1a4tbgs" data-framer-name="Titles">
                    <div
                      className="framer-1i1nn8k outline-none flex flex-col justify-start flex-shrink-0"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p className="framer-text font-[Switzer] text-[15px] tracking-[-0px] text-[rgb(255,255,255)]">
                        <span
                          data-text-fill="true"
                          className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Pro
                        </span>
                      </p>
                    </div>
                    <div className="framer-1yjgz02" data-framer-name="Price">
                      <div
                        className="framer-1at4tgf flex flex-col justify-start flex-shrink-0 text-[rgb(255,255,255)]"
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3 className="framer-text text-[rgb(255,255,255)] !leading-normal">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-[#70bafa] text-[40px] font-medium"
                          >
                            {isMonthly ? "$10" : "$100"}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="framer-7on3oa flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-85tvh7"
                          data-styles-preset="FhU5qX9WL"
                        >
                          {isMonthly ? "/month" : "/year"}
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-ubdvt4 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Ideal for hobbyists and casual users for light,
                        exploratory use.
                      </p>
                    </div>
                  </div>
                  <div className="framer-15iun8t-container">
                    <a
                      className="framer-Q2WxL framer-1dermg9 framer-v-1dermg9 framer-2yz7lg border border-solid border-[#222222] bg-[rgb(22, 22, 22)] rounded-[7px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] !w-full"
                      data-border="true"
                      data-framer-name="Button Pricing"
                      href="./#contact"
                    >
                      <div
                        className="framer-8p8jqj outline-none flex flex-col justify-start flex-shrink-0"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text text-white text-sm leading-normal">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                          >
                            Choose this plan
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="framer-1dd6pyk bg-[rgb(35,35,35)]"
                    data-framer-name="Line"
                  ></div>
                  <div
                    className="framer-f22bh4 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,_190,_250,_0.75),_rgba(10,_10,_10,_0))]"
                    data-framer-name="Gradient top border"
                  ></div>
                  <div className="framer-1c4a07q" data-framer-name="Including">
                    <div className="framer-wg6po4">
                      <div className="framer-yq3kwx">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1vpf6lh flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          1 developer
                        </p>
                      </div>
                    </div>
                    <div className="framer-16945zm">
                      <div className="framer-rochup">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-960j4y flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Advanced chatbots &amp; LLMs
                        </p>
                      </div>
                    </div>
                    <div className="framer-1q8pswf">
                      <div className="framer-1h9k541">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1ybb1df flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Monthly workflow automations
                        </p>
                      </div>
                    </div>
                    <div className="framer-1miquj5">
                      <div className="framer-jcbje2">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-e0b0yh flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          5 million coding tokens
                        </p>
                      </div>
                    </div>
                    <div className="framer-geyhru">
                      <div className="framer-b10ej">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1ejd2w6 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Cancel &amp; pause anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </InitialAppearance>
                <InitialAppearance
                  className="framer-alcu8 border-b border-t border-l-0 border-r-0 border-[#0f0f0f] rounded-[12px] opacity-100 !flex-none !w-full xl:!flex-1 xl:w-1"
                  style={{
                    transform: "perspective(1200px)",
                    background:
                      "radial-gradient(50% 25% at 50% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.1) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                  }}
                  data-border="true"
                  data-framer-name="Professional"
                  from={{ top: 100, left: 0 }}
                  to={{ top: 0, left: 0 }}
                  time={1}
                >
                  <div className="framer-1i10zd2" data-framer-name="Titles">
                    <div
                      className="framer-1rzj4uk outline-none flex flex-col justify-start flex-shrink-0"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p className="framer-text font-[Switzer] text-[15px] tracking-[-0px] text-[rgb(255,255,255)]">
                        <span
                          data-text-fill="true"
                          className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Pro 25
                        </span>
                      </p>
                    </div>
                    <div className="framer-9tvo7z" data-framer-name="Price">
                      <div
                        className="framer-1yi5psh flex flex-col justify-start flex-shrink-0 text-[rgb(255,255,255)]"
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3 className="framer-text text-[rgb(255,255,255)] !leading-normal">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-[#70bafa] text-[40px] font-medium"
                          >
                            {isMonthly ? "$25" : "$250"}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="framer-1zf1tl flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-85tvh7"
                          data-styles-preset="FhU5qX9WL"
                        >
                          {isMonthly ? "/month" : "/year"}
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-zo3yfa flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Designed for professionals who need to use Bolt a few
                        times per week.
                      </p>
                    </div>
                  </div>
                  <div className="framer-tpxytm-container">
                    <AnimationButton>
                      <a
                        className="framer-h2PBY framer-1y9luj6 framer-v-1y9luj6 framer-mrhza5 bg-[rgb(34, 34, 34)] rounded-lg w-full"
                        data-framer-name="Button State 1"
                        data-highlight="true"
                        href="./#contact"
                        target="_blank"
                      >
                        {/* <div
                          className="framer-113bi6a bg-[radial-gradient(25%_50%_at_50%_100%,rgb(112,190,250)_0%,rgba(171,171,171,0)_100%)] rounded-lg"
                          data-framer-name="Stroke"
                        ></div> */}
                        <div
                          className="framer-1vk8fb2 bg-[rgb(22,22,22)] rounded-lg"
                          data-framer-name="Fill"
                        ></div>
                        <div
                          className="framer-10dfqn2 flex flex-col justify-start shrink-0 text-white"
                          data-framer-component-type="RichTextContainer"
                        >
                          <h4 className="framer-text text-white text-[14px] tracking-normal font-sans">
                            <span
                              data-text-fill="true"
                              className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                            >
                              Choose this plan
                            </span>
                          </h4>
                        </div>
                      </a>
                    </AnimationButton>
                  </div>
                  <div
                    className="framer-hrvqse bg-[rgb(35,35,35)]"
                    data-framer-name="Line"
                  ></div>
                  <div
                    className="framer-15vchjj bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,_190,_250,_0.75),_rgba(10,_10,_10,_0))]"
                    data-framer-name="Gradient top border"
                  ></div>
                  <div className="framer-1ndgg8z" data-framer-name="Including">
                    <div className="framer-18zq4rk">
                      <div className="framer-1lp9kga">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-kupfz2 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          1 developer
                        </p>
                      </div>
                    </div>
                    <div className="framer-16ihy4m">
                      <div className="framer-q6klna">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1mdghw6 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Advanced chatbots &amp; LLMs
                        </p>
                      </div>
                    </div>
                    <div className="framer-1kljgpj">
                      <div className="framer-jv1kid">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1aegylc flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Monthly workflow automations
                        </p>
                      </div>
                    </div>
                    <div className="framer-12gmmnz">
                      <div className="framer-1wk6jn9">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1smi4tc flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          12.5 million coding tokens
                        </p>
                      </div>
                    </div>
                    <div className="framer-yj06wx">
                      <div className="framer-4a7u7b">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1vgn734 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Cancel &amp; pause anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </InitialAppearance>
                <InitialAppearance
                  className="framer-csu9ng border-b border-l border-r border-t border-solid border-[#0f0f0f] rounded-[12px] opacity-100 !flex-none !w-full xl:!flex-1 xl:w-1"
                  style={{
                    background:
                      "radial-gradient(50% 25% at 0% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.1) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                  }}
                  data-border="true"
                  data-framer-name="Enterprise"
                  from={{ top: 0, left: 100 }}
                  to={{ top: 0, left: 0 }}
                  time={1}
                >
                  <div className="framer-1cc7hax" data-framer-name="Titles">
                    <div
                      className="framer-1ilbphl outline-none flex flex-col justify-start flex-shrink-0"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p className="framer-text font-[Switzer] text-[15px] tracking-[-0px] text-[rgb(255,255,255)]">
                        <span
                          data-text-fill="true"
                          className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Pro 50
                        </span>
                      </p>
                    </div>
                    <div className="framer-kuvmpk" data-framer-name="Price">
                      <div
                        className="framer-lxhve4 flex flex-col justify-start flex-shrink-0 text-[rgb(255,255,255)]"
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3 className="framer-text text-[rgb(255,255,255)] !leading-normal">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-[#70bafa] text-[40px] font-medium"
                          >
                            {isMonthly ? "$50" : "$500"}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="framer-ujfn37 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-85tvh7"
                          data-styles-preset="FhU5qX9WL"
                        >
                          {isMonthly ? "/month" : "/year"}
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-b02s9y flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Perfect for heavy users looking to enhance daily
                        workflows.
                      </p>
                    </div>
                  </div>
                  <div className="framer-kfb8s8-container">
                    <a
                      className="framer-Q2WxL framer-1dermg9 framer-v-1dermg9 framer-2yz7lg border border-solid border-[#222222] bg-[rgb(22, 22, 22)] rounded-[7px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] !w-full"
                      data-border="true"
                      data-framer-name="Button Pricing"
                      href="./#contact"
                    >
                      <div
                        className="framer-8p8jqj outline-none flex flex-col justify-start flex-shrink-0"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text text-white text-sm leading-normal">
                          <span
                            data-text-fill="true"
                            className="framer-text bg-gradient-to-r from-white to-[#70bafa]"
                          >
                            Choose this plan
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="framer-1717i9p bg-[rgb(35,35,35)]"
                    data-framer-name="Line"
                  ></div>
                  <div
                    className="framer-udizwk bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,_190,_250,_0.75),_rgba(10,_10,_10,_0))]"
                    data-framer-name="Gradient top border"
                  ></div>
                  <div className="framer-1hm3azk" data-framer-name="Including">
                    <div className="framer-xka4dh">
                      <div className="framer-nqi2x1">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1wx1tyx flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          1 developer
                        </p>
                      </div>
                    </div>
                    <div className="framer-1a2tfby">
                      <div className="framer-wbkr6u">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-obskr1 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Advanced chatbots &amp; LLMs
                        </p>
                      </div>
                    </div>
                    <div className="framer-1fb52rj">
                      <div className="framer-etiml5">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-xz83zw flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Monthly workflow automations
                        </p>
                      </div>
                    </div>
                    <div className="framer-8tlk3e">
                      <div className="framer-11v892r">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-4g53hp flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          25 million coding tokens
                        </p>
                      </div>
                    </div>
                    <div className="framer-13x0m4w">
                      <div className="framer-1gpdw0p">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://framerusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3npa9w flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Cancel anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </InitialAppearance>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
