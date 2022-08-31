import { motion, AnimatePresence } from "framer-motion";

const scrollVariant = {
  hidden: {
    opacity: 0,
    y: 80
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 6,
    }
  }
}

export default function ScrollElement({ isVisible, scrollToTop }) {
  return (
    <AnimatePresence>
      <motion.div
        onClick={scrollToTop}
        className="scrollContainer"
        variants={scrollVariant}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.div>
    </AnimatePresence>
  )
}
