/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import React from "react";

// components:
import BottomFooter from "../components/common/Footer/BottomFooter";
import FooterSvg from "../components/common/Footer/FooterSvg";
import TopFooter from "../components/common/Footer/TopFooter";
import Header from "../components/common/Header";

// motion:
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariantsfromLeft } from "../core/utils/constants/animationvariants";
import { animationVariantsfromBott } from "../core/utils/constants/animationvariants";

function MainLayout() {
  const Section = ({ children, animationVariant }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

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

  return (
    <>
      <div
        className="w-full bg-[#f8f9fa] fixed 
        top-0 shadow-md z-50"
      >
        <Section animationVariant={animationVariantsfromLeft}>
          <Header />
        </Section>
      </div>

      <main className="">
        <Outlet />
      </main>

      <footer className="flex flex-col">
        <Section animationVariant={animationVariantsfromBott}>
          <FooterSvg />
          <TopFooter />
        </Section>

        <BottomFooter />
      </footer>
    </>
  );
}

export default MainLayout;
