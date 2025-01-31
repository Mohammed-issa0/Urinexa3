import Hero from './components/2-Hero';
import Statistics from './components/3-Statistics';
import Problems from './components/4-Problems';
import Benefits from './components/5-Benefits';
import HowItWorks from './components/6-HowItWorks';
import SuccessStory from './components/7-SuccessStory';
import Testimonials from './components/8-Testimonials';
import Pricing from './components/9-Pricing';
import FAQ from './components/10-FAQ';
import TrustIndicators from './components/11-TrustIndicators';
import Footer from './components/12Footer';
import Navbar from './components/1-Navbar';
import "./index.css"
function App() {
  return (
    <div className="bg-secondary ">
      <Navbar/>
      <Hero />
      <Statistics />
      <Problems />
      <Benefits />
      <SuccessStory />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      {/* <TrustIndicators /> */}
      <Footer />
    </div>
  );
}

export default App;