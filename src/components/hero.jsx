import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const data = [{
    words : ["INTELLECT .", " ELECTRONICS .", " ADVANCEMENT"],
    des : "Harnessing Intellect and Electronic Advancements"
  },{
    words : ["Intelligence .", " Innovation .", " Impact"],
    des : "We craft smart tech solutions that boost efficiency and fuel business growth"
  },{
    words : ["INTELLECT .", " AI .", " INSIGHT"],
    des : "Driven by AI and Defined by Intellect"
  }]
  const [ indexData, setIndexData ] = useState(0)
  useEffect(()=>{
    const idInterval = setInterval(()=>{
      setIndexData((prev)=>{
        if(prev == 2){
          return 0
        }else {
          return prev + 1
        }
      })
    },6000)
    return()=> clearInterval(idInterval)
  },[])
  return (
    <div className="hero gap-3 px-5 sm:px-16 md:px-32">
      <motion.h2
        key={indexData} 
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 justify-center"
      >
        {data[indexData].words.map((word, index) => (
          <motion.span key={index} variants={wordAnim}>
            {word}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p
        key={`desc-${indexData}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {data[indexData].des}
      </motion.p>

      <Link to={"/about"}><motion.button
        key={`button-${indexData}`}
        className="mt-5"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        LEARN MORE
      </motion.button></Link>
    </div>
  );
};

export default Hero;