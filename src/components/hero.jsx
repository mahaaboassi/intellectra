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



const Hero = ({data, label, link}) => {
  const [ indexData, setIndexData ] = useState(0)
  useEffect(()=>{
    const idInterval = setInterval(()=>{
      if(data.length > 1 ){
       setIndexData((prev)=>{
          if(prev == 2){
            return 0
          }else {
            return prev + 1
          }
        }) 
      }else{
        setIndexData[0]
      }
        
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
          {data[indexData].words}

      </motion.h2>

      <motion.p
        key={`desc-${indexData}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data[indexData].des}
      </motion.p>

      {link && <Link aria-label={`See more details about ${label =="LEARN MORE"? "INTELLECTRA":label}`}  to={link}><motion.button
        key={`button-${indexData}`}
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="sr-only">See more details about {label =="LEARN MORE"? "INTELLECTRA":label}</span>
        {label}
      </motion.button></Link>}
    </div>
  );
};

export default Hero;