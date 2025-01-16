import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const style: React.CSSProperties = {
  position: "absolute",
  background:
    "radial-gradient(circle at center, rgba(238, 98, 224, 0.8) 0, rgba(140, 100, 255, 0) 50%) no-repeat ",
  mixBlendMode: "hard-light",

  width: "100%",
  height: "100%",
  top: "-50%",
  left: "-50%",
  zIndex: "1",
  opacity: "0.7",
};

const STEP_SIZE = 200;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const movementY = e.clientY;
      const movementX = e.clientX;
      const stepsX = Math.ceil(Math.abs(movementX) / STEP_SIZE);
      const stepsY = Math.ceil(Math.abs(movementY) / STEP_SIZE);
      setMousePosition({
        x: stepsX * STEP_SIZE,
        y: stepsY * STEP_SIZE,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <motion.div
      style={style}
      variants={variants}
      animate="default"
      transition={{
        x: {
          duration: 0.3,
          ease: "easeIn",
          repeat: 0,
          type: "spring",
          stiffness: 10,
        },
        y: {
          duration: 0.3,
          ease: "easeIn",
          repeat: 0,
          type: "spring",
          stiffness: 10,
        },
        default: {
          duration: 0.3,
          repeat: Infinity,
        },
      }}
    ></motion.div>
  );
};

export default CustomCursor;
