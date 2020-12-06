import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"

const AboutPage = ({ location }) => {
  return (
    <>
      <SEO title="About" />
      
      <Scroll callback={location} />
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="container container--content flex flex-wrap min-h-screen"
      >
        <motion.div className="content w-10/12" variants={fade}>
          <p className="about-text">I’m a web developer from Nottingham with 10+ years of experience in methodical html, css &amp; javascript.</p>
          
          <p className="about-text--mini">I’m really interested in scaleable front-end development, craft cms &amp; vuejs.</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage