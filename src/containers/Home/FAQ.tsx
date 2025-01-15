import QABox from "../../components/QA";
import { QAs } from "../../constants/QAs";
import { QA } from "../../type";

const FAQ = () => {
  const className: string[] = [
    "framer-1hsafb6-container",
    "framer-12nl61y-container",
    "framer-1nrz16v-container",
    "framer-k82vdj-container",
    "framer-19k61sf-container",
    "framer-zateej-container",
  ];

  return (
    <section
      className="framer-2r13k6"
      data-framer-name="FAQ"
      id="faq"
      data-name="FAQ"
    >
      <div className="framer-1fh8ttl" data-framer-name="Text" data-name="Text">
        <div
          className="framer-1prizk5 flex flex-col justify-start flex-shrink-0 transform-none"
          data-framer-component-type="RichTextContainer"
        >
          <h2
            className="framer-text framer-styles-preset-15mg8bp"
            data-styles-preset="IXKxaceG9"
          >
            <span
              data-text-fill="true"
              className="framer-text bg-gradient-to-r from-white to-blue-300 w-full text-center"
            >
              Answers
            </span>
          </h2>
        </div>
        <div
          className="framer-1of5b6k flex flex-col justify-start flex-shrink-0 transform-none"
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-1otixq8 !text-center"
            data-styles-preset="Z8KnRQzQq"
          >
            We've gone ahead and answered some of the questions you might have.
          </p>
        </div>
      </div>
      <div className="ssr-variant hidden-5tblbe">
        <div className="framer-1uaresl-container opacity-100 transform perspective-[1200px]">
          <div className="ssr-variant hidden-r5chz7 hidden-ncoutt">
            <div
              className="framer-pngwa framer-1dtgz92 framer-v-1dtgz92 rounded-[20px] !w-full"
              data-framer-name="Desktop 1440 &amp; 1200"
            >
              <div className="framer-93fu28" data-framer-name="Left row">
                <div className="grid grid-cols-2 gap-4 w-full">
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;
