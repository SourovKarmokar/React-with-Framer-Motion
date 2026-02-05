import { motion } from "motion/react";

const Simple = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#00d1ff",
        }}
      />
    </div>
  );
};

export default Simple;