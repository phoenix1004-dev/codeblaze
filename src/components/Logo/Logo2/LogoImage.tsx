import { codeblaze2 } from "../../../assets/image";

const LogoImage = () => {
  return (
    <div
      className="codeblaze-kom92n !w-[220px]"
      data-codeblaze-name="Logo Image"
    >
      <div
        className="absolute rounded-inherit top-0 right-0 bottom-0 left-10 flex"
        data-codeblaze-background-image-wrapper="true"
      >
        <img
          className="block w-full h-full rounded-inherit object-center object-contain"
          decoding="async"
          src={codeblaze2}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default LogoImage;
