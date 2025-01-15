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

const Home = () => {
  return (
    <div
      data-framer-ssr-released-at="2024-11-18T17:03:50.809Z"
      data-framer-page-optimized-at="2024-11-21T07:30:55.702Z"
    >
      <div className="framer-IqNBt framer-vrYYp framer-NrkXy framer-l50WH framer-V74Ls framer-uKIIJ framer-Fw2Wf framer-72rtr7 min-h-screen !w-auto">
        <div className="framer-k2s3e6-container" />
        <FixedNav />
        <div className="ssr-variant hidden-5tblbe">
          <div className="framer-c341if-container hidden-72rtr7 hidden-wbkh13 hidden-r5chz7 hidden-ncoutt opacity-0 transform -translate-y-[100px]">
            <div
              className="framer-hEVRE framer-PZPbf framer-17q0614 framer-v-17q0614 border-[1px] border-solid border-transparent bg-gradient-radial from-transparent to-transparent rounded-bl-lg rounded-br-lg w-full"
              data-border="true"
              data-framer-name="Phone Navigation"
            >
              <div className="framer-wmhqws" data-framer-name="Menu closed">
                <Logo />
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant hidden-r5chz7 hidden-wbkh13 hidden-72rtr7 hidden-ncoutt">
          <div className="framer-c341if-container hidden-72rtr7 hidden-wbkh13 hidden-r5chz7 hidden-ncoutt opacity-0 transform -translate-y-[100px]">
            <div
              className="framer-hEVRE framer-PZPbf framer-17q0614 framer-v-17q0614 border-[1px] border-solid border-transparent bg-gradient-radial from-transparent to-transparent rounded-bl-lg rounded-br-lg w-full"
              data-border="true"
              data-framer-name="Phone Navigation"
            >
              <div className="framer-wmhqws" data-framer-name="Menu closed">
                <Logo />
              </div>
            </div>
          </div>
        </div>
        <div
          className="framer-hzeqsp"
          data-framer-name="Main sections"
          data-name="Main sections"
        >
          <Header />
          <About />
          <Services />
          <Process />
          <Satistics />
          <Team />
          <Price />
          <ReviewContainer />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </div>
      <RealCursorPointer />
    </div>
  );
};

export default Home;
