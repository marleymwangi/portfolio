import Typed from 'react-typed';
import { motion } from "framer-motion";

const heroContVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: .1,
      when: "beforeChildren"
    }
  }
}

const heroVariants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      staggerChildren: .1,
      mass: 0.8,
      damping: 12,
    }
  }
}

export default function Hero() {
  return (
    <motion.div className="left"
      variants={heroContVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={heroVariants}
      >Hi, I'm Bob,</motion.h1>
      <motion.h5
        variants={heroVariants}
      >a <span>Full Stack </span>
        <Typed
          strings={['Developer', ' Engineer']}
          typeSpeed={70}
          backSpeed={70}
          loop
        /> in Nairobi.</motion.h5>
      <motion.p
        variants={heroVariants}
      >
        I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
      </motion.p>
      <motion.a
        href="#projects"
        variants={heroVariants}
      >
        Learn More
      </motion.a>
    </motion.div>
  )
}
