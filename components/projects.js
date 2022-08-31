import { useState, useEffect } from 'react';
import { projects } from "../data/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariant, titleChildrenVariant } from '../styles/animations';

const gridVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .3,
      staggerChildren: .1,
      when: 'beforeChildren'
    }
  }
}

const projectVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 10,
    }
  }
}

export default function Projects() {
  const [hovered, setHovered] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const openInNewTab = (url) => {
    if(url.length > 0){
      var win = window.open(url, '_blank');
      win.focus();
    }
  }

  return (
    <div className="projects" id="projects" ref={ref}>
      <motion.div
        variants={titleVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-divider" variants={titleChildrenVariant} custom={'l'} />
        <motion.h1 className="section-title" variants={titleChildrenVariant}>Projects</motion.h1>
      </motion.div>

      <motion.div
        className="grid-container"
        variants={gridVariant}
        initial="hidden"
        animate={controls}
      >
        {
          projects && projects.map((p, idx) => (
            <motion.div
              key={idx}
              className="card"
              variants={projectVariant}
            >
              <div className={`image ${hovered === idx && 'selected'}`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => openInNewTab(p.visit)}
              >
                <img src={p.image} alt="project image" />
                <h5>Visit</h5>
              </div>
              <div className="title">
                <h3>{p.title}</h3>
                <div className="divider" />
              </div>
              <p>{p.description}</p>
              <h4>Stack</h4>
              <div className="stack-list">
                {
                  p.tags.map((tag, idx) => (
                    <li key={idx}>
                      {tag}
                    </li>
                  ))
                }
              </div>
              <a className="social" target="_blank" href={p.source} rel="noopener noreferrer">
                <button>
                  Source<img src="assets/github-blue.svg" alt="Github" />
                </button>
              </a>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}
