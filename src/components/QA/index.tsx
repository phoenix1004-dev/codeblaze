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
      className="codeblaze-dgUsn codeblaze-V74Ls codeblaze-l50WH codeblaze-slbiny codeblaze-v-slbiny border border-solid border-gray-800 bg-gray-900 rounded-[10px] shadow-md !w-full !bg-[#0c0c0c]"
      data-border="true"
      data-codeblaze-name="Question closed"
      onMouseDown={() => setIsHover((prev) => !prev)}
    >
      <div
        className="codeblaze-1lup9zr"
        data-codeblaze-name="Question"
        data-highlight="true"
        tabIndex={0}
      >
        <div
          className="codeblaze-1kse8k3 flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline space-y-0"
          style={{ maxWidth: "90%" }}
          data-codeblaze-component-type="RichTextContainer"
        >
          <p
            className="codeblaze-text codeblaze-styles-preset-85tvh7 !whitespace-normal"
            data-styles-preset="FhU5qX9WL"
          >
            {item.qu}
          </p>
        </div>
        <div
          className="codeblaze-1npyh8s border border-solid border-gray-800 bg-gray-900 rounded-sm shadow-sm shadow-blue-400"
          data-border="true"
          data-codeblaze-name="Plus"
        >
          <RotateButton isActive={isHover} />
        </div>
      </div>
      <ToggleAnswerText isActive={isHover}>{item.an}</ToggleAnswerText>
    </div>
  );
};

export default QABox;
