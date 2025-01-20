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
      className="codeblaze-1o8mlri"
      data-codeblaze-name="Subscriptions"
      id="pricing"
      data-name="Subscriptions"
    >
      <div
        className="codeblaze-1gya8sz"
        data-codeblaze-name="Text"
        data-name="Text"
      >
        <div
          className="codeblaze-13f5txl outline-none flex flex-col justify-start flex-shrink-0 transform-none"
          data-codeblaze-component-type="RichTextContainer"
        >
          <h2
            className="codeblaze-text codeblaze-styles-preset-15mg8bp !text-[35px] sm:!text-[48px] md:!text-[64px] xl:text-[100px]"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="codeblaze-text bg-gradient-to-r from-white to-[#70BEFA] w-full text-center"
            >
              Subscriptions
            </span>
          </h2>
        </div>
        <div
          className="codeblaze-l8ruie outline-none flex flex-col justify-start flex-shrink-0 transform-none"
          data-codeblaze-component-type="RichTextContainer"
        >
          <p
            className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-center"
            data-styles-preset="Z8KnRQzQq"
          >
            Three different subscriptions to match your companies' needs.
          </p>
        </div>
      </div>
      <div className="ssr-variant hidden-5tblbe !contents">
        <div className="codeblaze-1a4uvrj-container">
          <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 hidden-ncoutt !contents">
            <div
              className="codeblaze-ujNZ3 codeblaze-V74Ls codeblaze-l50WH codeblaze-1fpfaar codeblaze-v-1fpfaar !w-full"
              data-codeblaze-name="Desktop 1440 Monthly"
            >
              <div
                className="codeblaze-nk5i5h border border-solid border-[rgb(34,34,34)] bg-[rgb(15,15,15)] rounded-[10px]"
                data-border="true"
                data-codeblaze-name="Subscriptions - Choice"
              >
                <PriceIndicator status={status} />
                <div
                  className="codeblaze-kkh85t rounded-[5px]"
                  data-codeblaze-name="Monthly"
                  onMouseDown={() => {
                    setStatus({ top: 7, left: 7, width: 180 });
                    setIsMonthly(true);
                  }}
                >
                  <div
                    className="codeblaze-c1924z outline-none flex flex-col justify-start flex-shrink-0"
                    data-codeblaze-component-type="RichTextContainer"
                  >
                    <p className="codeblaze-text text-white text-sm leading-normal">
                      <span
                        data-text-fill="true"
                        className={`codeblaze-text ${
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
                  className="codeblaze-1btv2o1 rounded-[5px]"
                  data-codeblaze-name="Annually"
                  data-highlight="true"
                  tabIndex={0}
                  onMouseDown={() => {
                    setStatus({ top: 7, left: 200, width: 90 });
                    setIsMonthly(false);
                  }}
                >
                  <div
                    className="codeblaze-l1hrhw flex flex-col justify-start flex-shrink-0 text-[#9c9c9c]"
                    data-codeblaze-component-type="RichTextContainer"
                  >
                    {isMonthly ? (
                      <p className="codeblaze-text !text-[rgb(156,156,156)] text-[14px]">
                        Annually
                      </p>
                    ) : (
                      <p className="codeblaze-text text-white text-sm leading-normal">
                        <span
                          data-text-fill="true"
                          className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Annually
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="codeblaze-1e3uv2o !flex-col xl:!flex-row"
                data-codeblaze-name="Pricing"
              >
                <InitialAppearance
                  className="codeblaze-10udvia border-[1px] border-solid border-l-[1px] border-r-0 border-t-[1px] border-b-[1px] border-[#222222] bg-[radial-gradient(50%_25%_at_100%_0%,rgba(80,176,250,0.1)_0%,rgba(64,140,199,0.1)_36.5%,rgb(13,13,13)_100%)] rounded-[12px] opacity-100 !flex-none !w-full xl:!flex-1 xl:w-1"
                  data-border="true"
                  data-codeblaze-name="Basic"
                  from={{ top: 0, left: -100 }}
                  to={{ top: 0, left: 0 }}
                  time={1}
                >
                  <div
                    className="codeblaze-1a4tbgs"
                    data-codeblaze-name="Titles"
                  >
                    <div
                      className="codeblaze-1i1nn8k outline-none flex flex-col justify-start flex-shrink-0"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p className="codeblaze-text font-[Switzer] text-[15px] tracking-[-0px] text-[rgb(255,255,255)]">
                        <span
                          data-text-fill="true"
                          className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Pro
                        </span>
                      </p>
                    </div>
                    <div
                      className="codeblaze-1yjgz02"
                      data-codeblaze-name="Price"
                    >
                      <div
                        className="codeblaze-1at4tgf flex flex-col justify-start flex-shrink-0 text-[rgb(255,255,255)]"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <h3 className="codeblaze-text text-[rgb(255,255,255)] !leading-normal">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa] text-[40px] font-medium"
                          >
                            {isMonthly ? "$10" : "$100"}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="codeblaze-7on3oa flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-85tvh7"
                          data-styles-preset="FhU5qX9WL"
                        >
                          {isMonthly ? "/month" : "/year"}
                        </p>
                      </div>
                    </div>
                    <div
                      className="codeblaze-ubdvt4 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Ideal for hobbyists and casual users for light,
                        exploratory use.
                      </p>
                    </div>
                  </div>
                  <div className="codeblaze-15iun8t-container">
                    <a
                      className="codeblaze-Q2WxL codeblaze-1dermg9 codeblaze-v-1dermg9 codeblaze-2yz7lg border border-solid border-[#222222] bg-[rgb(22, 22, 22)] rounded-[7px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] !w-full"
                      data-border="true"
                      data-codeblaze-name="Button Pricing"
                      href="./#contact"
                    >
                      <div
                        className="codeblaze-8p8jqj outline-none flex flex-col justify-start flex-shrink-0"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p className="codeblaze-text text-white text-sm leading-normal">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                          >
                            Choose this plan
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="codeblaze-1dd6pyk bg-[rgb(35,35,35)]"
                    data-codeblaze-name="Line"
                  ></div>
                  <div
                    className="codeblaze-f22bh4 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,_190,_250,_0.75),_rgba(10,_10,_10,_0))]"
                    data-codeblaze-name="Gradient top border"
                  ></div>
                  <div
                    className="codeblaze-1c4a07q"
                    data-codeblaze-name="Including"
                  >
                    <div className="codeblaze-wg6po4">
                      <div className="codeblaze-yq3kwx">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1vpf6lh flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          1 developer
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-16945zm">
                      <div className="codeblaze-rochup">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-960j4y flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Advanced chatbots &amp; LLMs
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-1q8pswf">
                      <div className="codeblaze-1h9k541">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1ybb1df flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Monthly workflow automations
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-1miquj5">
                      <div className="codeblaze-jcbje2">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-e0b0yh flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          5 million coding tokens
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-geyhru">
                      <div className="codeblaze-b10ej">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1ejd2w6 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Cancel &amp; pause anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </InitialAppearance>
                <InitialAppearance
                  className="codeblaze-alcu8 border-b border-t border-l-0 border-r-0 border-[#0f0f0f] rounded-[12px] opacity-100 !flex-none !w-full xl:!flex-1 xl:w-1"
                  style={{
                    transform: "perspective(1200px)",
                    background:
                      "radial-gradient(50% 25% at 50% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.1) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                  }}
                  data-border="true"
                  data-codeblaze-name="Professional"
                  from={{ top: 100, left: 0 }}
                  to={{ top: 0, left: 0 }}
                  time={1}
                >
                  <div
                    className="codeblaze-1i10zd2"
                    data-codeblaze-name="Titles"
                  >
                    <div
                      className="codeblaze-1rzj4uk outline-none flex flex-col justify-start flex-shrink-0"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p className="codeblaze-text font-[Switzer] text-[15px] tracking-[-0px] text-[rgb(255,255,255)]">
                        <span
                          data-text-fill="true"
                          className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Pro 25
                        </span>
                      </p>
                    </div>
                    <div
                      className="codeblaze-9tvo7z"
                      data-codeblaze-name="Price"
                    >
                      <div
                        className="codeblaze-1yi5psh flex flex-col justify-start flex-shrink-0 text-[rgb(255,255,255)]"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <h3 className="codeblaze-text text-[rgb(255,255,255)] !leading-normal">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa] text-[40px] font-medium"
                          >
                            {isMonthly ? "$25" : "$250"}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="codeblaze-1zf1tl flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-85tvh7"
                          data-styles-preset="FhU5qX9WL"
                        >
                          {isMonthly ? "/month" : "/year"}
                        </p>
                      </div>
                    </div>
                    <div
                      className="codeblaze-zo3yfa flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Designed for professionals who need to use Bolt a few
                        times per week.
                      </p>
                    </div>
                  </div>
                  <div className="codeblaze-tpxytm-container">
                    <AnimationButton>
                      <a
                        className="codeblaze-h2PBY codeblaze-1y9luj6 codeblaze-v-1y9luj6 codeblaze-mrhza5 bg-[rgb(34, 34, 34)] rounded-lg w-full"
                        data-codeblaze-name="Button State 1"
                        data-highlight="true"
                        href="./#contact"
                        target="_blank"
                      >
                        {/* <div
                          className="codeblaze-113bi6a bg-[radial-gradient(25%_50%_at_50%_100%,rgb(112,190,250)_0%,rgba(171,171,171,0)_100%)] rounded-lg"
                          data-codeblaze-name="Stroke"
                        ></div> */}
                        <div
                          className="codeblaze-1vk8fb2 bg-[rgb(22,22,22)] rounded-lg"
                          data-codeblaze-name="Fill"
                        ></div>
                        <div
                          className="codeblaze-10dfqn2 flex flex-col justify-start shrink-0 text-white"
                          data-codeblaze-component-type="RichTextContainer"
                        >
                          <h4 className="codeblaze-text text-white text-[14px] tracking-normal font-sans">
                            <span
                              data-text-fill="true"
                              className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                            >
                              Choose this plan
                            </span>
                          </h4>
                        </div>
                      </a>
                    </AnimationButton>
                  </div>
                  <div
                    className="codeblaze-hrvqse bg-[rgb(35,35,35)]"
                    data-codeblaze-name="Line"
                  ></div>
                  <div
                    className="codeblaze-15vchjj bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,_190,_250,_0.75),_rgba(10,_10,_10,_0))]"
                    data-codeblaze-name="Gradient top border"
                  ></div>
                  <div
                    className="codeblaze-1ndgg8z"
                    data-codeblaze-name="Including"
                  >
                    <div className="codeblaze-18zq4rk">
                      <div className="codeblaze-1lp9kga">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-kupfz2 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          1 developer
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-16ihy4m">
                      <div className="codeblaze-q6klna">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1mdghw6 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Advanced chatbots &amp; LLMs
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-1kljgpj">
                      <div className="codeblaze-jv1kid">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1aegylc flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Monthly workflow automations
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-12gmmnz">
                      <div className="codeblaze-1wk6jn9">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1smi4tc flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          12.5 million coding tokens
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-yj06wx">
                      <div className="codeblaze-4a7u7b">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1vgn734 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Cancel &amp; pause anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </InitialAppearance>
                <InitialAppearance
                  className="codeblaze-csu9ng border-b border-l border-r border-t border-solid border-[#0f0f0f] rounded-[12px] opacity-100 !flex-none !w-full xl:!flex-1 xl:w-1"
                  style={{
                    background:
                      "radial-gradient(50% 25% at 0% 0%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.1) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                  }}
                  data-border="true"
                  data-codeblaze-name="Enterprise"
                  from={{ top: 0, left: 100 }}
                  to={{ top: 0, left: 0 }}
                  time={1}
                >
                  <div
                    className="codeblaze-1cc7hax"
                    data-codeblaze-name="Titles"
                  >
                    <div
                      className="codeblaze-1ilbphl outline-none flex flex-col justify-start flex-shrink-0"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p className="codeblaze-text font-[Switzer] text-[15px] tracking-[-0px] text-[rgb(255,255,255)]">
                        <span
                          data-text-fill="true"
                          className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                        >
                          Pro 50
                        </span>
                      </p>
                    </div>
                    <div
                      className="codeblaze-kuvmpk"
                      data-codeblaze-name="Price"
                    >
                      <div
                        className="codeblaze-lxhve4 flex flex-col justify-start flex-shrink-0 text-[rgb(255,255,255)]"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <h3 className="codeblaze-text text-[rgb(255,255,255)] !leading-normal">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa] text-[40px] font-medium"
                          >
                            {isMonthly ? "$50" : "$500"}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="codeblaze-ujfn37 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-85tvh7"
                          data-styles-preset="FhU5qX9WL"
                        >
                          {isMonthly ? "/month" : "/year"}
                        </p>
                      </div>
                    </div>
                    <div
                      className="codeblaze-b02s9y flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                      data-codeblaze-component-type="RichTextContainer"
                    >
                      <p
                        className="codeblaze-text codeblaze-styles-preset-1otixq8"
                        data-styles-preset="Z8KnRQzQq"
                      >
                        Perfect for heavy users looking to enhance daily
                        workflows.
                      </p>
                    </div>
                  </div>
                  <div className="codeblaze-kfb8s8-container">
                    <a
                      className="codeblaze-Q2WxL codeblaze-1dermg9 codeblaze-v-1dermg9 codeblaze-2yz7lg border border-solid border-[#222222] bg-[rgb(22, 22, 22)] rounded-[7px] shadow-[0px_0px_2px_0.5px_rgba(112,190,250,0)] !w-full"
                      data-border="true"
                      data-codeblaze-name="Button Pricing"
                      href="./#contact"
                    >
                      <div
                        className="codeblaze-8p8jqj outline-none flex flex-col justify-start flex-shrink-0"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p className="codeblaze-text text-white text-sm leading-normal">
                          <span
                            data-text-fill="true"
                            className="codeblaze-text bg-gradient-to-r from-white to-[#70bafa]"
                          >
                            Choose this plan
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="codeblaze-1717i9p bg-[rgb(35,35,35)]"
                    data-codeblaze-name="Line"
                  ></div>
                  <div
                    className="codeblaze-udizwk bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(112,_190,_250,_0.75),_rgba(10,_10,_10,_0))]"
                    data-codeblaze-name="Gradient top border"
                  ></div>
                  <div
                    className="codeblaze-1hm3azk"
                    data-codeblaze-name="Including"
                  >
                    <div className="codeblaze-xka4dh">
                      <div className="codeblaze-nqi2x1">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-1wx1tyx flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          1 developer
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-1a2tfby">
                      <div className="codeblaze-wbkr6u">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-obskr1 flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Advanced chatbots &amp; LLMs
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-1fb52rj">
                      <div className="codeblaze-etiml5">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-xz83zw flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          Monthly workflow automations
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-8tlk3e">
                      <div className="codeblaze-11v892r">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-4g53hp flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
                          data-styles-preset="Z8KnRQzQq"
                        >
                          25 million coding tokens
                        </p>
                      </div>
                    </div>
                    <div className="codeblaze-13x0m4w">
                      <div className="codeblaze-1gpdw0p">
                        <div
                          className="absolute inset-0 rounded-none"
                          data-codeblaze-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            src="https://codeblazeusercontent.com/images/Gzt7Mob6QF9jUtvCvNeTeQYboU.png"
                            alt="check"
                            className="block w-full h-full rounded-none object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="codeblaze-3npa9w flex flex-col justify-start shrink-0 text-[rgb(0, 153, 255)] underline"
                        data-codeblaze-component-type="RichTextContainer"
                      >
                        <p
                          className="codeblaze-text codeblaze-styles-preset-1otixq8"
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
