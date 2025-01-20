import { InitialAppearance } from "../../components/Animation";
import QABox from "../../components/QA";
import { QAs } from "../../constants/QAs";
import { QA } from "../../type";

const FAQ = () => {
  const className: string[] = [
    "codeblaze-1hsafb6-container",
    "codeblaze-12nl61y-container",
    "codeblaze-1nrz16v-container",
    "codeblaze-k82vdj-container",
    "codeblaze-19k61sf-container",
    "codeblaze-zateej-container",
  ];

  return (
    <section
      className="codeblaze-2r13k6"
      data-codeblaze-name="FAQ"
      id="faq"
      data-name="FAQ"
    >
      <div
        className="codeblaze-1fh8ttl"
        data-codeblaze-name="Text"
        data-name="Text"
      >
        <div
          className="codeblaze-1prizk5 flex flex-col justify-start flex-shrink-0 transform-none"
          data-codeblaze-component-type="RichTextContainer"
        >
          <h2
            className="codeblaze-text codeblaze-styles-preset-15mg8bp !text-[35px] sm:!text-[48px] md:!text-[64px] xl:text-[100px]"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="codeblaze-text bg-gradient-to-r from-white to-blue-300 w-full text-center"
            >
              FAQs
            </span>
          </h2>
        </div>
        <div
          className="codeblaze-1of5b6k flex flex-col justify-start flex-shrink-0 transform-none"
          data-codeblaze-component-type="RichTextContainer"
        >
          <p
            className="codeblaze-text codeblaze-styles-preset-1otixq8 !text-center"
            data-styles-preset="Z8KnRQzQq"
          >
            We've gone ahead and answered some of the questions you might have.
          </p>
        </div>
      </div>
      <div className="ssr-variant hidden-5tblbe !contents">
        <InitialAppearance
          className="codeblaze-1uaresl-container opacity-100 transform perspective-[1200px]"
          from={{ top: 0, left: 0 }}
          to={{ top: 0, left: 0 }}
          delay={0.3}
          time={5}
        >
          <div className="ssr-variant hidden-r5chz7 hidden-ncoutt !contents">
            <div
              className="codeblaze-pngwa codeblaze-1dtgz92 codeblaze-v-1dtgz92 rounded-[20px] !w-full"
              data-codeblaze-name="Desktop 1440 &amp; 1200"
            >
              <div className="codeblaze-93fu28" data-codeblaze-name="Left row">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                  {QAs.map((item: QA, index: number) => (
                    <QABox
                      key={index}
                      className={className[index]}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </InitialAppearance>
      </div>
    </section>
  );
};

export default FAQ;
