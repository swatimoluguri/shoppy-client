import FaqAccordion from "./FaqAccordion";
import Heading from "../Partials/Heading";
import {  useEffect } from "react";
const Faq = () => {
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
    <div className="pb-10">
      <div className="flex  flex-col justify-center items-center bg-[url('assets/bg.jpg')] bg-cover	mb-10">
        <Heading text="FAQs" heading="Question?" highlight="Look here." />
      </div>
      <FaqAccordion />
    </div>
  );
};
export default Faq;
