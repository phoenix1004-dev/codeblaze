import { FC } from "react";
import { ChangeColorText } from "../Animation";

type Props = {
  isHover: boolean;
  selected: number;
};

const Codes: FC<Props> = ({ isHover, selected }) => {
  return (
    <div
      className="framer-aylbmo flex flex-col justify-start shrink-0 transform translate-x-[-50%] text-blue-500 no-underline text-opacity-50 !bottom-[-155px]"
      data-framer-component-type="RichTextContainer"
    >
      <ChangeColorText
        className="framer-text text-left text-[15px] font-mono leading-[1.4em]"
        isActive={isHover}
        from="#9b9b9b"
        to="#ffffff"
      >
        {`1  <html  lang="en">`}
      </ChangeColorText>
      <p className="framer-text text-left !text-[#9b9b9b] text-[15px] font-mono leading-[1.4em]">
        {`2  <head>`}
      </p>
      <ChangeColorText
        className="framer-text text-left !text-[15px] font-mono leading-[1.4em]]"
        isActive={isHover}
        from="#ffffff"
        to="#9b9b9b"
      >
        <span className="framer-text !text-[#9b9b9b]">{`3      <meta`} </span>
        {` charset="UTF-8">`}
      </ChangeColorText>
      <p className="framer-text font-['Source_Code_Pro'] !text-[#9b9b9b] text-[15px] tracking-[0px] leading-[1.4em] text-left text-[rgba(156,156,156,0.5)]">
        {`4      <meta  name="viewport"`}
      </p>
      <p className="framer-text font-['Source_Code_Pro'] !text-[#9b9b9b] text-[15px] tracking-[0px] leading-[1.4em] text-left text-[rgba(156,156,156,0.5)]">
        {`5        content="width=device`}
      </p>
      <p className="framer-text font-['Source_Code_Pro'] !text-[#9b9b9b] text-[15px] tracking-[0px] leading-[1.4em] text-left text-[rgba(156,156,156,0.5)]">
        {`6        width, initial-`}
      </p>
      <p className="framer-text font-['Source_Code_Pro'] !text-[#9b9b9b] text-[15px] tracking-[0px] leading-[1.4em] text-left text-[rgba(156,156,156,0.5)]">
        {`7        scale=1.0">`}
      </p>
      <p className="framer-text font-['Source_Code_Pro'] !text-[#9b9b9b] text-[15px] tracking-[0px] leading-[1.4em] text-left text-[rgba(156,156,156,0.5)]">
        {`8      <title>Halo</title>`}
      </p>
      <p className="framer-text font-mono !text-[#9b9b9b] text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`9      <style>`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`10       body {`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`11       font-family: Arial, 12 sans-serif;`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`13       background-color:`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`14       #f4f4f9;`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`15       color: #333;`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`16       margin: 0;`}
      </p>
      <p className="framer-text font-mono text-[15px] tracking-normal leading-[1.4em] text-left text-gray-500/50">
        {`17       padding: 0;`}
      </p>
    </div>
  );
};

export default Codes;
