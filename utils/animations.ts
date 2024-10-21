export const pageTransitions = {
  fadeOutIn: {
    initial: {
      y: -15,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -15,
      opacity: 0,
    },
    transition: {
      duration: 0.25,
      delay: 0.15,
    },
  },
  slideInLeftFadeOut: {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 100,
      opacity: 0,
    },
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  zoomInFadeOut: {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
    },
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  rotateInOut: {
    initial: {
      rotate: -90,
      opacity: 0,
    },
    animate: {
      rotate: 0,
      opacity: 1,
    },
    exit: {
      rotate: 90,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  flipInTop: {
    initial: {
      rotateX: 90,
      opacity: 0,
    },
    animate: {
      rotateX: 0,
      opacity: 1,
    },
    exit: {
      rotateX: -90,
      opacity: 0,
    },
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  bounceIn: {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: [0, -20, 0],
      opacity: 1,
    },
    exit: {
      y: 50,
      opacity: 0,
    },
    transition: {
      duration: 0.6,
      times: [0, 0.2, 1],
      ease: "easeOut",
    },
  },
};
