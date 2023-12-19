import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

export default function App() {
  const [isMaximized, setIsMaximized] = useState(false);
  const transition = {
    type: "spring",
    stiffness: 2000,
    damping: 100,
  };

  return (
    <>
      <motion.div
        initial={false}
        layout
        transition={transition}
        className={`wrapper ${isMaximized ? "maximized" : ""}`}
      >
        <motion.p transition={transition} layout="position">
          Hello world
        </motion.p>
      </motion.div>

      <button onClick={() => setIsMaximized(!isMaximized)}>Toggle</button>
    </>
  );
}
