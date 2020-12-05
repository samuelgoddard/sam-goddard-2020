import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container container--content"
      >
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="about-text w-10/12">I’m a web developer from Nottingham with 10+ years of experience in methodical html, css &amp; javascript. I’m really interested in scaleable front-end development, craft cms &amp; vuejs.</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage