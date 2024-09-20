/* eslint-disable react/prop-types */
import React from "react";

// motion
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariantsfromLeft } from "../core/utils/constants/animationvariants";
import { animationVariantsfromRight } from "../core/utils/constants/animationvariants";
import { animationVariantsfromBott } from "../core/utils/constants/animationvariants";

// components
import Achievements from "../components/Landing/achievements";
import HeroSection from "../components/landing/HeroSection";
import VideoSection from "../components/landing/VideoSection";

const Section = ({ children, animationVariant }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariant}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const Landing = () => {
  return (
    <div>
      <Section animationVariant={animationVariantsfromBott}>
        <HeroSection />
      </Section>
      <Section animationVariant={animationVariantsfromRight}>
        <VideoSection />
      </Section>
      <Section animationVariant={animationVariantsfromLeft}>
        <Achievements />
      </Section>
    </div>
  );
};

export default Landing;
