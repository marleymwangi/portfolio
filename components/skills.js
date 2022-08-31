import { useEffect } from 'react';
import { skills } from '../data/constants';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariant, titleChildrenVariant } from '../styles/animations';

const pVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: .3,
      mass: 0.4,
      damping: 8,
    }
  }
}

const skillsContVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .6,
      type: 'spring',
      mass: 0.4,
      damping: 8,
    }
  }
}

const skillsListVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .6,
      staggerChildren: .05,
      when:'beforeChildren'
    }
  }
}

const skillVariant = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 10,
    }
  }
}

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="skills" id="skills" ref={ref}>
      <motion.div
        variants={titleVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-divider" variants={titleChildrenVariant} custom={'l'} />
        <motion.h1 className="section-title" variants={titleChildrenVariant}>Skills</motion.h1>
      </motion.div>
      <motion.p
        variants={pVariant}
        initial="hidden"
        animate={controls}
      >
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </motion.p>
      <motion.div className="skills-list"
        variants={skillsContVariant}
        initial="hidden"
        animate={controls}
      >
        <div className="list">
          <h5>Technologies</h5>
          <motion.ul
            variants={skillsListVariant}
            initial="hidden"
            animate={controls}
          >
            {
              skills && skills?.technologies.map((s, idx)=>(
                <motion.li variants={skillVariant} key={idx}>{s}</motion.li>
              ))
            }
          </motion.ul>
        </div>
        <div className="list">
          <h5>Frameworks</h5>
          <motion.ul
            variants={skillsListVariant}
            initial="hidden"
            animate={controls}
          >
            {
              skills && skills?.frameworks.map((s, idx)=>(
                <motion.li variants={skillVariant} key={idx}>{s}</motion.li>
              ))
            }
          </motion.ul>
        </div>
        <div className="list">
          <h5>Databases</h5>
          <motion.ul
            variants={skillsListVariant}
            initial="hidden"
            animate={controls}
          >
            {
              skills && skills?.databases.map((s, idx)=>(
                <motion.li variants={skillVariant} key={idx}>{s}</motion.li>
              ))
            }
          </motion.ul>
        </div>
        <div className="list">
          <h5>Tools</h5>
          <motion.ul
            variants={skillsListVariant}
            initial="hidden"
            animate={controls}
          >
            {
              skills && skills?.tools.map((s, idx)=>(
                <motion.li variants={skillVariant} key={idx}>{s}</motion.li>
              ))
            }
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}
