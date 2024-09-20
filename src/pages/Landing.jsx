/* eslint-disable react/prop-types */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// components
import Achievements from "../components/Landing/achievements";
import HeroSection from "../components/landing/HeroSection";
import VideoSection from "../components/landing/VideoSection";

const Section = ({ children, animationVariant }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Landing = () => {
  return (
    <div>
      <Section animationVariant={animationVariants}>
        <HeroSection />
      </Section>
      <Section animationVariant={animationVariants}>
        <VideoSection />
      </Section>
      <Section animationVariant={animationVariants}>
        <Achievements />
      </Section>
    </div>
  );
};

export default Landing;
