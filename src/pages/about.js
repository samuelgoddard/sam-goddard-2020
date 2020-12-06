import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { SmoothScrollProvider } from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"

const AboutPage = ({ location }) => {
  return (
    <>
      <SEO title="About" />
      
      <SmoothScrollProvider options={{ smooth: true }}>
        
        <motion.section
          initial="initial"
          data-scroll-section
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <div className="container container--content">
              <motion.div className="content w-10/12">
                <p className="about-text">I’m a web developer from Nottingham with 10+ years of experience in methodical html, css &amp; javascript. I’m really interested in scaleable front-end development, craft cms &amp; vuejs.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </SmoothScrollProvider>
    </>
  )
}

export default AboutPage