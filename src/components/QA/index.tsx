import { FC, useState } from "react";
import { QA } from "../../type";
import { RotateButton, ToggleAnswerText } from "../Animation";

type Props = {
  className: string;
  item: QA;
};

const QABox: FC<Props> = ({ className, item }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="framer-dgUsn framer-V74Ls framer-l50WH framer-slbiny framer-v-slbiny border border-solid border-gray-800 bg-gray-900 rounded-[10px] shadow-md !w-full !bg-[#0c0c0c]"
      data-border="true"
      data-framer-name="Question closed"
      onMouseDown={() => setIsHover((prev) => !prev)}
    >
      <div
        className="framer-1lup9zr"
        data-framer-name="Question"
        data-highlight="true"
        tabIndex={0}
      >
        <div
          className="framer-1kse8k3 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline space-y-0"
          style={{ maxWidth: "90%" }}
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-85tvh7 !whitespace-normal"
            data-styles-preset="FhU5qX9WL"
          >
            {item.qu}
          </p>
        </div>
        <div
          className="framer-1npyh8s border border-solid border-gray-800 bg-gray-900 rounded-sm shadow-sm shadow-blue-400"
          data-border="true"
          data-framer-name="Plus"
        >
          <RotateButton isActive={isHover} />
        </div>
      </div>
      <ToggleAnswerText isActive={isHover}>{item.an}</ToggleAnswerText>
    </div>
  );
};

export default QABox;
