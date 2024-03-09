import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loading = () => {
  return (
    <div className="md:absolute md:inset-1/2">
      <motion.div
        className="w-8 h-8 flex justify-around"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="block w-2 h-2 bg-black rounded-sm"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="block w-2 h-2 bg-black rounded-sm"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="block w-2 h-2 bg-black rounded-sm"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
