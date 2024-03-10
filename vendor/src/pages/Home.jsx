import Banner from "../components/Banner";
import Feature from "../components/FeatureBlock"
import WhoHost from "../components/WhoHost"
import Steps from "../components/steps";
import Testimonials from "../components/Testimonials";
import TandC from "../components/TandC";
const Home = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <WhoHost/>
      <Steps/>
      <Testimonials />
      <TandC/>
    </div>
  );
};

export default Home;
