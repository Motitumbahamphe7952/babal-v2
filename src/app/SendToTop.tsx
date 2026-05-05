"use client";

import gsap from "gsap";
import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { ScrollToPlugin } from "gsap/all";
import { AnimatePresence } from "framer-motion";

const SendToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (Math.round(window?.scrollY) > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-white fixed bottom-24 right-[24px] z-[9999999]`}
        >
          <div
            className="bg-[#FDD700] text-white w-[60px] h-[60px] rounded-[50%] flex items-center justify-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
            onClick={() => gsap.to(window, { scrollTo: 0 })}
          >
            <ChevronUp />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SendToTop;
