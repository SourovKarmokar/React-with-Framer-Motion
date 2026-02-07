import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 2 });
    return () => controls.stop();
  }, [count]);

  return (
    <motion.span>
      {roundedValue}
    </motion.span>
  );
};

export default Counter;
