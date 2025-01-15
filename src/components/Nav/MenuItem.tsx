import { FC, useRef } from "react";
import { CursorPosition, MenuLink } from "../../type";
import { NormalButton } from "../Button";

type MenuItemProps = {
  item: MenuLink;
  currentPos: CursorPosition;
  setPosition: (pos: CursorPosition) => void;
};

const MenuItem: FC<MenuItemProps> = ({ item, currentPos, setPosition }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const setInitialPos = () => {
    setPosition({ ...currentPos, opacity: 0 });
  };

  const setCurrentPos = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width: width, opacity: 1 });
  };

  return (
    <a
      className="framer-65wbii framer-11p22wi rounded-[5px]"
      data-framer-name="Services"
      data-highlight="true"
      href={item.link}
      ref={ref}
      onMouseEnter={setCurrentPos}
      onMouseLeave={setInitialPos}
    >
      <div
        className="framer-q0svcg outline-none flex flex-col justify-start flex-shrink-0 [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline] transform-none"
        data-framer-component-type="RichTextContainer"
      >
        <NormalButton>{item.title}</NormalButton>
      </div>
    </a>
  );
};

export default MenuItem;
