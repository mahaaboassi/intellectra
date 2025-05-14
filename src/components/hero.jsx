import { motion } from "framer-motion";

const words = ["Intelligence.", "Innovation.", "Impact"];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="hero gap-3 px-5 sm:px-16 md:px-32">
      <motion.h2
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 justify-center"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordAnim}>
            {word}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        We craft smart tech solutions that boost efficiency and fuel business growth.
      </motion.p>

      <motion.button
        className="mt-5"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        LEARN MORE
      </motion.button>
    </div>
  );
};

export default Hero;