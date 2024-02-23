import React from "react";
import { motion } from "framer-motion";

const FadeInFromDownAnim = ({delay, children}) => {
  //console.log(delay);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
      >
      {children}
    </motion.div>
  );
};

export default FadeInFromDownAnim;
