import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariant, titleChildrenVariant } from '../styles/animations';

const aboutSecVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .3,
      staggerChildren: .05,
      when:'beforeChildren'
    }
  }
}

const pVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    }
  }
}

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="about" id="about" ref={ref}>
      <motion.div className="circle-divider"
        variants={titleVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="circle" variants={titleChildrenVariant} custom={'l'} />
        <motion.h1 className="section-title" variants={titleChildrenVariant}>Résumé</motion.h1>
      </motion.div>
      <motion.section 
        variants={aboutSecVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.h5 variants={pVariant}>Who am I?</motion.h5>
        <motion.p variants={pVariant}>
          I dont like to define myself with the work I've done. I define myself
          by the work I want to do. Skills can be taught and personality is inherent.
          I prefer to keep learning, continue challenging myself, and do interesting
          things that matter.
        </motion.p>
        <motion.p variants={pVariant}>
          Fueled by high energy levels and boundless enthusiasm, I'm easily inspired
          and more than willing to follow my fascinations wherever they take me. I'm
          passionate, expressive, multi-talented spirit. I'm never satisfied to just
          come up with ideas. Instead I have an almost impulsive need to act on them.
        </motion.p>
        <motion.p variants={pVariant}>
          My abundant energy fuels me in pursuit of many interests, hobbies, areas of
          study and artistic endeavors. I'm a fast learner, able to pick up new skills
          and juggle different projects and roles with relative ease.
        </motion.p>
      </motion.section>
    </div>
  )
}
