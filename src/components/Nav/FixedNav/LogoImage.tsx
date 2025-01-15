import { logo } from "../../../assets/image";

const LogoImage = () => {
  return (
    <div className="framer-1hv1geq" data-framer-name="Logo">
      <div className="framer-1rc6u42" data-framer-name="Logo">
        <div
          className="absolute inset-0 rounded-inherit"
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
    </div>
  );
};

export default LogoImage;
