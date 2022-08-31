import { useEffect } from 'react';
import { workExperience } from "../data/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariant, titleChildrenVariant } from '../styles/animations';

const detailsContVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 12,
    }
  }
}

const detailVariant = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 12,
      staggerChildren: .2,
      when: 'beforeChildren'
    }
  }
}

export default function Resume() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="resume" id="resume" ref={ref}>
      <motion.div className="circle-divider"
        variants={titleVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="circle" variants={titleChildrenVariant} custom={'l'} />
        <motion.h1 className="section-title" variants={titleChildrenVariant}>Résumé</motion.h1>
      </motion.div>
      <div className="grid-container"  >
        <motion.div
          className="details"
          variants={detailsContVariant}
          initial="hidden"
          animate={controls}
        >
          <h3>Work Experience</h3>
          {
            workExperience && workExperience.map((work, idx) => (
              <motion.div
                key={idx}
                className="detail"
                variants={detailVariant}
              >
                <motion.h5 variants={detailVariant}>{work.place}</motion.h5>
                <motion.p variants={detailVariant}>{work.title}</motion.p>
                <motion.p variants={detailVariant}>{work.time}</motion.p>
              </motion.div>
            ))
          }
        </motion.div>
        <motion.div className="details"
          variants={detailsContVariant}
          initial="hidden"
          animate={controls}
        >
          <h3>Education</h3>
          <motion.div
            className="detail"
            variants={detailVariant}
          >
            <motion.h5 variants={detailVariant}>United States International University - Africa</motion.h5>
            <motion.p variants={detailVariant}>Bachelor of Science in Applied Computer Technology</motion.p>
            <motion.p variants={detailVariant}>2014 - 2018</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
