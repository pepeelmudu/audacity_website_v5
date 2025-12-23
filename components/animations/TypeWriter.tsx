"use client";

import { motion } from "framer-motion";

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TypeWriter({ 
  text, 
  className = "", 
  delay = 0,
  as: Component = "span" 
}: TypeWriterProps) {
  const words = text.split(" ");

  return (
    <Component className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "inline" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={{ marginRight: "0.25em" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

