import { codeblaze2 } from "../assets/image";
import GradientEffect from "../components/GradientBg";

const Login = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-2 gap-2">
      <div className="h-full content-center relative">
        <img
          className="absolute top-5 left-5 w-[150px] sm:w-[300px]"
          src={codeblaze2}
          alt="logo"
        />
        <div className="px-3 sm:px-10">
          <h1 className="text-[30px] sm:text-[50px] text-white pb-[30px] font-outfit">
            Login
          </h1>
          <p className="text-[#c0c0c0] text-[15px] sm:text-[20px] pb-[10px] font-outfit">
            EMAIL
          </p>
          <input className="w-full bg-[#9c9c9c] text-[15px] sm:text-[20px] h-[30px] sm:h-[50px] px-[15px] mb-[10px] font-outfit" />
          <p className="text-[#c0c0c0] text-[20px] pb-[10px] font-outfit">
            PASSWORD
          </p>
          <input
            className="w-full bg-[#9c9c9c] text-[15px] sm:text-[20px] h-[30px] sm:h-[50px] px-[15px] mb-[10px] font-outfit"
            type="password"
          />
          <p className="text-end text-[#222222] text-[10px] sm:text-[15px]">
            Show password
          </p>
          <button className="bg-blue-200 w-full text-white text-[20px] sm:text-[30px] py-1 sm:py-3 mt-10 rounded-md font-outfit">
            Login
          </button>
          <p className="text-center mt-7">
            <a href="./#" className="text-[#c0c0c0] text-[15px] sm:text-[20px]">
              forgot password?
            </a>
          </p>
          <p className="text-center mt-7">
            <a
              href="./signup"
              className="text-[#c0c0c0] text-[15px] sm:text-[20px]"
            >
              create an accout?
            </a>
          </p>
        </div>
      </div>
      <div className="h-full relative content-center">
        <h1 className="text-white text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[120px] text-center">
          Welcome to{" "}
          <span className="font-playfair">
            <b>codeblaze</b>
          </span>
        </h1>
        <div className="absolute w-full h-full top-0 right-0 z-[-10]">
          <GradientEffect />
        </div>
      </div>
    </div>
  );
};

export default Login;
