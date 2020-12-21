export const fade = {
initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
	}
}

export const fadeSlow = {
initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1],  }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  }
}

export const revealInOut = {
	initial: { y: "130%" },
	enter: { 
    y: "0%",
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  }
}

export const revealInOutIn = {
	initial: { y: "130%" },
	enter: { 
    y: "0%",
    transition: { 
      repeat: 1,
      repeatType: "reverse",
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  }
}


export const revealOutIn = {
	initial: { y: "-100%"},
	enter: { 
    y: "0%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: "-100%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  }
}