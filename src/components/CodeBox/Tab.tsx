import { FC, useRef } from "react";
import { CURSOR_POSITION, TAB } from "../../type";

type Props = {
  item: TAB;
  selected: number;
  setPosition: (pos: CURSOR_POSITION) => void;
  setSelected: (value: number) => void;
};

const Tab: FC<Props> = ({ item, selected, setPosition, setSelected }) => {
  const ref = useRef<HTMLDivElement>(null);

  const setPos = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft + 3,
      width: width - 6,
      opacity: 1,
    });
    setSelected(item.key);
  };

  return (
    <div
      className="codeblaze-10qotjz rounded-[5px]"
      data-codeblaze-name={item.title}
      data-highlight="true"
      tabIndex={item.key}
      ref={ref}
      onMouseDown={setPos}
    >
      <div
        className="codeblaze-1w3thlh outline-none flex flex-col justify-start flex-shrink-0 text-blue-500 no-underline"
        data-codeblaze-component-type="RichTextContainer"
      >
        {selected === item.key ? (
          <p className="codeblaze-text font-sans !text-[14px] tracking-normal text-white">
            <span
              data-text-fill="true"
              className="codeblaze-text bg-gradient-to-r from-white to-blue-400"
            >
              {item.title}
            </span>
          </p>
        ) : (
          <h4
            className="codeblaze-text codeblaze-styles-preset-1nt88v3 !text-[14px]"
            data-styles-preset="e67rss72C"
          >
            {item.title}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Tab;
