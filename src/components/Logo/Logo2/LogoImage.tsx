import { logo } from "../../../assets/image";

const LogoImage = () => {
  return (
    <div className="framer-kom92n !w-[250px]" data-framer-name="Logo Image">
      <div
        className="absolute rounded-inherit top-0 right-0 bottom-0 left-0 flex"
        data-framer-background-image-wrapper="true"
      >
        <img
          className="block w-full h-full rounded-inherit object-center object-contain"
          decoding="async"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default LogoImage;
