import { useState } from "react";

import "./index.css";
import { facebook, googleplus, linkedin1 } from "../../assets/image";

const SignInSignUp = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className="root">
      <div
        className={`container ${
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
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
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
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="./#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left !px-[10px] sm:!px-[40px]">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick} id="signIn">
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right !px-[10px] sm:!px-[40px]">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and build the website with us</p>
              <button className="ghost" onClick={handleSignUpClick} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
