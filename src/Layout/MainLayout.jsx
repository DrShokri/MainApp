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

function MainLayout() {
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

  return (
    <>
      <Section animationVariant={animationVariants}>
        <Header />
      </Section>

      <main className="">
        <Outlet />
      </main>

      <footer className="flex flex-col">
        <Section animationVariant={animationVariants}>
          <FooterSvg />
          <TopFooter />
        </Section>

        <BottomFooter />
      </footer>
    </>
  );
}

export default MainLayout;
