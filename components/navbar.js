import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const middleContVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: .1,
      when: 'beforeChildren'
    }
  }
}

const dropVariant = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.2,
      damping: 8,
    }
  }
}

const Links = [
  {
    name: 'Projects',
    ref: '#projects'
  },
  {
    name: 'Résumé',
    ref: '#resume'
  },
  {
    name: 'Skills',
    ref: '#skills'
  },
  {
    name: 'About',
    ref: '#about'
  },
  {
    name: 'Contact',
    ref: '#contact'
  }
]

export default function Navbar() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full" ref={ref}>
      <div className="navbar">
        <div className="left">
          <Link href="/">
            <motion.a
              className="brand"
              variants={dropVariant}
              initial="hidden"
              animate={controls}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
              </svg>
              <span>Portfolio</span>
            </motion.a>
          </Link>
        </div>
        <motion.div
          className="middle"
          variants={middleContVariant}
          initial="hidden"
          animate={controls}
        >
          {
            Links.map((l, idx) => (
              <motion.li variants={dropVariant} key={idx}>
                <Link href={l.ref}>
                  <span className="navlink">{l.name}</span>
                </Link>
              </motion.li>
            ))
          }
        </motion.div>
        <div className="right">
          <motion.a
            className="social"
            target="_blank"
            href="https://bitbucket.org/marleymwangi/"
            rel="noopener noreferrer"
            variants={dropVariant}
            initial="hidden"
            animate={controls}
          >
            <img src="assets/github.svg" className="icon" alt="Github" />
          </motion.a>
          <motion.a
            className="social"
            target="_blank"
            href="https://www.linkedin.com/in/bob-mwangi"
            rel="noopener noreferrer"
            variants={dropVariant}
            initial="hidden"
            animate={controls}
          >
            <img src="assets/linkedin.png" className="icon" alt="Github" />
          </motion.a>
        </div>
      </div>
    </div>

  )
}
