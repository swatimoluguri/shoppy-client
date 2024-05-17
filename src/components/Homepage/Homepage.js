import Banner from "./Banner";
import DetailsStrip from "../Partials/DetailsStrip";
import Collections from "../Partials/Collections";
import SaleBanner from "./SaleBanner";
import FaqAccordion from "./FaqAccordion";
import Heading from "../Partials/Heading";
import Newsletter from "./Newsletter";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };

    scrollToTop();
  }, []);
  return (
    <div>
      <Banner />
      <DetailsStrip />
      <Heading
        text="Our Products"
        heading="Our"
        highlight="Products Collections"
      />
      <Collections />
      <SaleBanner />
      <Heading text="FAQs" heading="Question?" highlight="Look here." />
      <FaqAccordion />
      <div className="flex flex-col items-center bg-[url('assets/bg.jpg')] py-24 mt-12 bg-cover	">
        <Heading
          text="Our Newsletter"
          heading="Subscribe to our"
          highlight="Newsletter"
        />
        <Newsletter />
      </div>
    </div>
  );
};
export default Homepage;
