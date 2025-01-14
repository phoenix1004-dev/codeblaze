import { FC } from "react";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={className} data-framer-name="Logo">
      <LogoImage />
      <LogoText />
    </div>
  );
};

export default Logo;
