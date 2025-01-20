import { Slider } from "../../components/Animation";
import { Reviews } from "../../constants/Review";
import { REVIEW } from "../../type";

const ReviewContainer = () => {
  return (
    <section
      className="codeblaze-6g7y9c"
      data-codeblaze-name="Reviews"
      id="reviews"
      data-name="Reviews"
    >
      <div
        className="codeblaze-euktyg"
        data-codeblaze-name="Title"
        data-name="Title"
      >
        <div
          className="codeblaze-1pfagbp flex flex-col justify-start flex-shrink-0 transform-none"
          data-codeblaze-component-type="RichTextContainer"
        >
          <h2
            className="codeblaze-text codeblaze-styles-preset-15mg8bp !text-[35px] sm:!text-[48px] md:!text-[64px] xl:text-[100px]"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="codeblaze-text bg-gradient-to-r from-white to-[#70bffa]"
            >
              Reviews
            </span>
          </h2>
        </div>
      </div>
      <div className="ssr-variant hidden-5tblbe !contents">
        <div className="codeblaze-ylbj83-container">
          <div className="ssr-variant hidden-r5chz7 !contents">
            <div
              className="codeblaze-14vzB codeblaze-1q3x6i0 codeblaze-v-1q3x6i0 !w-full"
              data-codeblaze-name="Desktop 1440 &amp; 1200"
            >
              <div className="codeblaze-u376h1-container">
                <section
                  className="flex w-full h-full max-w-full max-h-full justify-center items-center m-0 p-0 list-none text-indent-none opacity-100"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                    maskImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  <ul className="flex w-full h-full max-w-full max-h-full justify-center items-center m-0 p-0 list-none text-indent-none gap-5 relative flex-row will-change-transform transform-none">
                    <Slider dir="left" time={80}>
                      {Reviews.map((review: REVIEW, index: number) => (
                        <li key={index} className="w-[390px]">
                          <div className="codeblaze-akowz5-container w-[390px] flex-shrink-0">
                            <div
                              className="codeblaze-EvkPp codeblaze-l50WH codeblaze-r6ye4o codeblaze-v-r6ye4o w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px]"
                              style={{
                                background:
                                  "radial-gradient(50% 50% at -8.200000000000001% -24.4%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                              }}
                              data-border="true"
                              data-codeblaze-name="Review David Williams"
                            >
                              <div
                                className="codeblaze-14uifsb w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Review"
                              >
                                <div
                                  className="codeblaze-c00j38 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                                  data-codeblaze-component-type="RichTextContainer"
                                >
                                  <p
                                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                                    data-styles-preset="Z8KnRQzQq"
                                  >
                                    {review.comment}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="codeblaze-ojz4y5 w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Person"
                              >
                                <div
                                  className="codeblaze-cjmbid border-1 border-solid border-gray-700 rounded-full"
                                  data-border="true"
                                  data-codeblaze-name="Photo"
                                >
                                  <div
                                    className="absolute inset-0 rounded-none"
                                    data-codeblaze-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      sizes="(min-width: 1440px) 50px, (min-width: 1200px) and (max-width: 1439px) 50px, (min-width: 810px) and (max-width: 998px) 50px, (min-width: 999px) and (max-width: 1199px) 50px, (max-width: 809px) 50px"
                                      // srcSet="
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png?scale-down-to=512  512w,
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png                   1024w
                                      //     "
                                      src={review.person.avatar}
                                      alt={review.person.name}
                                      className="block w-full h-full rounded-none object-left-center object-cover"
                                      data-codeblaze-original-sizes="50px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="codeblaze-1v7fzgl"
                                  data-codeblaze-name="Name &amp; Position"
                                >
                                  <div
                                    className="codeblaze-9esi3q flex flex-col justify-start flex-shrink-0 text-white"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <p className="codeblaze-text text-white font-sans text-sm leading-[1.4em] tracking-normal">
                                      <span
                                        data-text-fill="true"
                                        className="codeblaze-text bg-gradient-to-r from-white to-[#70bdfa]"
                                      >
                                        {review.person.name}
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    className="codeblaze-1f9uiki flex flex-col justify-start shrink-0 text-[#9c9c9c]"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <h4 className="codeblaze-text !text-[#ffffff] text-sm font-sans !text-[13px]">
                                      {review.person.pos}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                      {Reviews.map((review: REVIEW, index: number) => (
                        <li key={index} className="w-[390px]">
                          <div className="codeblaze-akowz5-container w-[390px] flex-shrink-0">
                            <div
                              className="codeblaze-EvkPp codeblaze-l50WH codeblaze-r6ye4o codeblaze-v-r6ye4o w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px]"
                              style={{
                                background:
                                  "radial-gradient(50% 50% at -8.200000000000001% -24.4%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                              }}
                              data-border="true"
                              data-codeblaze-name="Review David Williams"
                            >
                              <div
                                className="codeblaze-14uifsb w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Review"
                              >
                                <div
                                  className="codeblaze-c00j38 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                                  data-codeblaze-component-type="RichTextContainer"
                                >
                                  <p
                                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                                    data-styles-preset="Z8KnRQzQq"
                                  >
                                    {review.comment}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="codeblaze-ojz4y5 w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Person"
                              >
                                <div
                                  className="codeblaze-cjmbid border-1 border-solid border-gray-700 rounded-full"
                                  data-border="true"
                                  data-codeblaze-name="Photo"
                                >
                                  <div
                                    className="absolute inset-0 rounded-none"
                                    data-codeblaze-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      sizes="(min-width: 1440px) 50px, (min-width: 1200px) and (max-width: 1439px) 50px, (min-width: 810px) and (max-width: 998px) 50px, (min-width: 999px) and (max-width: 1199px) 50px, (max-width: 809px) 50px"
                                      // srcSet="
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png?scale-down-to=512  512w,
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png                   1024w
                                      //     "
                                      src={review.person.avatar}
                                      alt={review.person.name}
                                      className="block w-full h-full rounded-none object-left-center object-cover"
                                      data-codeblaze-original-sizes="50px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="codeblaze-1v7fzgl"
                                  data-codeblaze-name="Name &amp; Position"
                                >
                                  <div
                                    className="codeblaze-9esi3q flex flex-col justify-start flex-shrink-0 text-white"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <p className="codeblaze-text text-white font-sans text-sm leading-[1.4em] tracking-normal">
                                      <span
                                        data-text-fill="true"
                                        className="codeblaze-text bg-gradient-to-r from-white to-[#70bdfa]"
                                      >
                                        {review.person.name}
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    className="codeblaze-1f9uiki flex flex-col justify-start shrink-0 text-[#9c9c9c]"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <h4 className="codeblaze-text !text-[#ffffff] text-sm font-sans !text-[13px]">
                                      {review.person.pos}
                                    </h4>
                                  </div>
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
              <div className="codeblaze-otev7y-container">
                <section
                  className="flex w-full h-full max-w-full max-h-full justify-center items-center m-0 p-0 list-none text-indent-none opacity-100"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                    maskImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  <ul className="flex w-full h-full max-w-full max-h-full items-center gap-5 p-0 m-0 list-none text-indent-none relative flex-row transform translate-x-0">
                    <Slider dir="right" time={80}>
                      {Reviews.map((review: REVIEW, index: number) => (
                        <li key={index} className="w-[390px]">
                          <div className="codeblaze-akowz5-container w-[390px] flex-shrink-0">
                            <div
                              className="codeblaze-EvkPp codeblaze-l50WH codeblaze-r6ye4o codeblaze-v-r6ye4o w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px]"
                              style={{
                                background:
                                  "radial-gradient(50% 50% at -8.200000000000001% -24.4%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                              }}
                              data-border="true"
                              data-codeblaze-name="Review David Williams"
                            >
                              <div
                                className="codeblaze-14uifsb w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Review"
                              >
                                <div
                                  className="codeblaze-c00j38 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                                  data-codeblaze-component-type="RichTextContainer"
                                >
                                  <p
                                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                                    data-styles-preset="Z8KnRQzQq"
                                  >
                                    {review.comment}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="codeblaze-ojz4y5 w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Person"
                              >
                                <div
                                  className="codeblaze-cjmbid border-1 border-solid border-gray-700 rounded-full"
                                  data-border="true"
                                  data-codeblaze-name="Photo"
                                >
                                  <div
                                    className="absolute inset-0 rounded-none"
                                    data-codeblaze-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      sizes="(min-width: 1440px) 50px, (min-width: 1200px) and (max-width: 1439px) 50px, (min-width: 810px) and (max-width: 998px) 50px, (min-width: 999px) and (max-width: 1199px) 50px, (max-width: 809px) 50px"
                                      // srcSet="
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png?scale-down-to=512  512w,
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png                   1024w
                                      //     "
                                      src={review.person.avatar}
                                      alt={review.person.name}
                                      className="block w-full h-full rounded-none object-left-center object-cover"
                                      data-codeblaze-original-sizes="50px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="codeblaze-1v7fzgl"
                                  data-codeblaze-name="Name &amp; Position"
                                >
                                  <div
                                    className="codeblaze-9esi3q flex flex-col justify-start flex-shrink-0 text-white"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <p className="codeblaze-text text-white font-sans text-sm leading-[1.4em] tracking-normal">
                                      <span
                                        data-text-fill="true"
                                        className="codeblaze-text bg-gradient-to-r from-white to-[#70bdfa]"
                                      >
                                        {review.person.name}
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    className="codeblaze-1f9uiki flex flex-col justify-start shrink-0 text-[#9c9c9c]"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <h4 className="codeblaze-text !text-[#ffffff] text-sm font-sans !text-[13px]">
                                      {review.person.pos}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                      {Reviews.map((review: REVIEW, index: number) => (
                        <li key={index} className="w-[390px]">
                          <div className="codeblaze-akowz5-container w-[390px] flex-shrink-0">
                            <div
                              className="codeblaze-EvkPp codeblaze-l50WH codeblaze-r6ye4o codeblaze-v-r6ye4o w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px]"
                              style={{
                                background:
                                  "radial-gradient(50% 50% at -8.200000000000001% -24.4%, rgba(80, 176, 250, 0.1) 0%, rgba(64, 140, 199, 0.05) 36.486486486486484%, var(--token-dfa0f935-df64-49a6-bd04-21d89df786a9, rgb(13, 13, 13)) 100%)",
                              }}
                              data-border="true"
                              data-codeblaze-name="Review David Williams"
                            >
                              <div
                                className="codeblaze-14uifsb w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Review"
                              >
                                <div
                                  className="codeblaze-c00j38 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
                                  data-codeblaze-component-type="RichTextContainer"
                                >
                                  <p
                                    className="codeblaze-text codeblaze-styles-preset-1otixq8"
                                    data-styles-preset="Z8KnRQzQq"
                                  >
                                    {review.comment}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="codeblaze-ojz4y5 w-full border border-solid border-t-1 border-b-1 border-l-1 border-r-1 border-[#222222] rounded-[10px] bg-[rgba(10,10,10,0)]"
                                data-border="true"
                                data-codeblaze-name="Person"
                              >
                                <div
                                  className="codeblaze-cjmbid border-1 border-solid border-gray-700 rounded-full"
                                  data-border="true"
                                  data-codeblaze-name="Photo"
                                >
                                  <div
                                    className="absolute inset-0 rounded-none"
                                    data-codeblaze-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      sizes="(min-width: 1440px) 50px, (min-width: 1200px) and (max-width: 1439px) 50px, (min-width: 810px) and (max-width: 998px) 50px, (min-width: 999px) and (max-width: 1199px) 50px, (max-width: 809px) 50px"
                                      // srcSet="
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png?scale-down-to=512  512w,
                                      //       https://codeblazeusercontent.com/images/6ldalHHlwmGzZ83idHKI8vfwac.png                   1024w
                                      //     "
                                      src={review.person.avatar}
                                      alt={review.person.name}
                                      className="block w-full h-full rounded-none object-left-center object-cover"
                                      data-codeblaze-original-sizes="50px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="codeblaze-1v7fzgl"
                                  data-codeblaze-name="Name &amp; Position"
                                >
                                  <div
                                    className="codeblaze-9esi3q flex flex-col justify-start flex-shrink-0 text-white"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <p className="codeblaze-text text-white font-sans text-sm leading-[1.4em] tracking-normal">
                                      <span
                                        data-text-fill="true"
                                        className="codeblaze-text bg-gradient-to-r from-white to-[#70bdfa]"
                                      >
                                        {review.person.name}
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    className="codeblaze-1f9uiki flex flex-col justify-start shrink-0 text-[#9c9c9c]"
                                    data-codeblaze-component-type="RichTextContainer"
                                  >
                                    <h4 className="codeblaze-text !text-[#ffffff] text-sm font-sans !text-[13px]">
                                      {review.person.pos}
                                    </h4>
                                  </div>
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
      </div>
    </section>
  );
};

export default ReviewContainer;
