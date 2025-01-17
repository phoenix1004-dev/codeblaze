import { codeblaze2 } from "../assets/image";
import GradientEffect from "../components/GradientBg";

const Signup = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-2 gap-2">
      <div className="h-full content-center relative">
        <img
          className="absolute top-5 left-5 w-[150px] sm:w-[300px]"
          src={codeblaze2}
          alt="logo"
        />
        <div className="w-full px-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div>
              <p className="text-[#c0c0c0] text-[15px] sm:text-[20px] pb-[10px] font-outfit">
                FIRST NAME<span className="text-red-600">*</span>
              </p>
              <input className="w-full bg-[#9c9c9c] text-[15px] sm:text-[20px] h-[30px] sm:h-[50px] px-[15px] mb-[10px] font-outfit" />
            </div>
            <div>
              <p className="text-[#c0c0c0] text-[15px] sm:text-[20px] pb-[10px] font-outfit">
                SECOND NAME<span className="text-red-600">*</span>
              </p>
              <input className="w-full bg-[#9c9c9c] text-[15px] sm:text-[20px] h-[30px] sm:h-[50px] px-[15px] mb-[10px] font-outfit" />
            </div>
          </div>
          <p className="text-[#c0c0c0] text-[15px] sm:text-[20px] pb-[10px] font-outfit">
            EMAIL<span className="text-red-600">*</span>
          </p>
          <input className="w-full bg-[#9c9c9c] text-[15px] sm:text-[20px] h-[30px] sm:h-[50px] px-[15px] mb-[10px] font-outfit" />
          <p className="text-[#c0c0c0] text-[15px] sm:text-[20px] pb-[10px] font-outfit">
            ORGANIZATION
          </p>
          <input className="w-full bg-[#9c9c9c] text-[15px] sm:text-[20px] h-[30px] sm:h-[50px] px-[15px] mb-[10px] font-outfit" />
          <button className="bg-blue-200 w-full text-white text-[20px] sm:text-[30px] py-1 sm:py-3 mt-10 rounded-md font-outfit">
            Sign Up
          </button>
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

export default Signup;
