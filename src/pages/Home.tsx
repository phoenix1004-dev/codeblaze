import Logo from "../components/Logo/Logo1";
import About from "../containers/Home/About";
import Header from "../containers/Home/Header";
import Services from "../containers/Home/Services";
import Process from "../containers/Home/Process";
import Satistics from "../containers/Home/Statistics";
import Team from "../containers/Home/Team";
import Price from "../containers/Home/Price";
import FAQ from "../containers/Home/FAQ";
import Contact from "../containers/Home/Contact";
import Footer from "../components/Footer";
import ReviewContainer from "../containers/Home/Reviews";
import { RealCursorPointer } from "../components/Animation";
import FixedNav from "../components/Nav/FixedNav";
import { useState } from "react";
import { MobileToggleMenuButton } from "../components/Button";

const Home: React.FC = () => {
  const [isHoverTeam, setIsHoverTeam] = useState<boolean>(false);

  return (
    <div
      data-codeblaze-ssr-released-at="2024-11-18T17:03:50.809Z"
      data-codeblaze-page-optimized-at="2024-11-21T07:30:55.702Z"
    >
      <div className="codeblaze-IqNBt codeblaze-vrYYp codeblaze-NrkXy codeblaze-l50WH codeblaze-V74Ls codeblaze-uKIIJ codeblaze-Fw2Wf codeblaze-72rtr7 min-h-screen !w-auto">
        <div className="codeblaze-k2s3e6-container" />
        <FixedNav />
        <div className="ssr-variant hidden-5tblbe">
          <div className="codeblaze-c341if-container hidden-72rtr7 hidden-wbkh13 hidden-r5chz7 hidden-ncoutt opacity-0 transform -translate-y-[100px]">
            <div
              className="codeblaze-hEVRE codeblaze-PZPbf codeblaze-17q0614 codeblaze-v-17q0614 border-[1px] border-solid border-transparent bg-gradient-radial from-transparent to-transparent rounded-bl-lg rounded-br-lg w-full"
              data-border="true"
              data-codeblaze-name="Phone Navigation"
            >
              <div
                className="codeblaze-wmhqws"
                data-codeblaze-name="Menu closed"
              >
                <Logo />
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 hidden-72rtr7 hidden-ncoutt hidden">
          <div className="codeblaze-c341if-container hidden-72rtr7 hidden-wbkh13 hidden-r5chz7 hidden-ncoutt opacity-100">
            <div
              className="codeblaze-hEVRE codeblaze-PZPbf codeblaze-17q0614 codeblaze-v-17q0614 border-[1px] border-solid border-transparent bg-gradient-radial from-transparent to-transparent rounded-bl-lg rounded-br-lg !w-full"
              data-border="true"
              data-codeblaze-name="Phone Navigation"
            >
              <div
                className="codeblaze-wmhqws"
                data-codeblaze-name="Menu closed"
              >
                <Logo />
                <MobileToggleMenuButton />
              </div>
            </div>
          </div>
        </div>
        <div
          className="codeblaze-hzeqsp"
          data-codeblaze-name="Main sections"
          data-name="Main sections"
        >
          <Header />
          <About />
          <Services />
          <Process />
          <Satistics />
          <Team setIsHoverTeam={setIsHoverTeam} />
          <Price />
          <ReviewContainer />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </div>
      <RealCursorPointer isActive={!isHoverTeam} />
    </div>
  );
};

export default Home;
