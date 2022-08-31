export const titleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: .2,
    }
  }
}

export const titleChildrenVariant = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction == 'l' ? -50 : 50
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 6,
    }
  }
}