import { useState } from "react";

import "./index.css";
import {
  codeblaze2,
  facebook,
  googleplus,
  linkedin1,
} from "../../assets/image";
import { AnimationButton } from "../Animation";

const SignInSignUp = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className="w-screen h-screen">
      <div className="absolute top-5 sm:top-7 md:top-16 left-0 right-0 bottom-0 h-[80px] content-center">
        <img
          className="block w-[100px] sm:w-[200px] md:w-[400px] h-[80px] rounded-inherit object-center object-contain"
          decoding="async"
          src={codeblaze2}
          alt="logo"
        />
      </div>
      <div className="root">
        <div
          className={`container md:!min-h-[600px] ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form className="px-[10px] sm:px-[50px]" action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="./#" className="social">
                  <img
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
                <a href="./#" className="social">
                  <img
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                    src={googleplus}
                    alt="google-plus"
                  />
                </a>
                <a href="./#" className="social">
                  <img
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                    src={linkedin1}
                    alt="linkedin1"
                  />
                </a>
              </div>
              <span className="text-[#c0c0c0]">
                or use your email for registration
              </span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <AnimationButton>
                <button>Sign Up</button>
              </AnimationButton>
            </form>
          </div>

          <div className="form-container sign-in-container">
            <form className="px-[10px] sm:px-[50px]" action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="./#" className="social">
                  <img
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
                <a href="./#" className="social">
                  <img
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                    src={googleplus}
                    alt="google-plus"
                  />
                </a>
                <a href="./#" className="social">
                  <img
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                    src={linkedin1}
                    alt="linkedin1"
                  />
                </a>
              </div>
              <span className="text-[#c0c0c0]">or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="./#">Forgot your password?</a>
              <AnimationButton>
                <button>Sign In</button>
              </AnimationButton>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left !px-[10px] sm:!px-[40px]">
                <h1 className="!text-[#f0f0f0] md:!text-[28px]">
                  Welcome Back!
                </h1>
                <p className="!text-[#e0e0e0] md:!text-[18px]">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost md:!text-[20px]"
                  onClick={handleSignInClick}
                  id="signIn"
                >
                  Sign In
                </button>
              </div>

              <div className="overlay-panel overlay-right !px-[10px] sm:!px-[40px]">
                <h1 className="!text-[#e0e0e0] md:!text-[28px]">
                  Hello, Friend!
                </h1>
                <p className="!text-[#e0e0e0] md:!text-[18px]">
                  Enter your personal details and build the website with us
                </p>
                <button
                  className="ghost md:!text-[20px]"
                  onClick={handleSignUpClick}
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-[#0c0c0c] text-[#c0c0c0] text-[16px] h-[40px] content-center px-[10px]">
        © 2025, Codeblaze Inc - All rights reserved.
      </footer>
    </div>
  );
};

export default SignInSignUp;
