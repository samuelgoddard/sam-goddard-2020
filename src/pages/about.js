import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { graphql } from "gatsby"
import { SmoothScrollProvider } from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const AboutPage = ({ data: { datoCmsAbout }, location}) => {
  return (
    <>
      <SEO title={ datoCmsAbout.title } />
    
      <SmoothScrollProvider options={{ smooth: true }}>
        
        <motion.section
          initial="initial"
          data-scroll-section
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <div className="container container--content-about" id="pinned-pane">
              <div className="relative">
                <div className="content w-10/12 about-text relative z-10" dangerouslySetInnerHTML={{ __html: datoCmsAbout.heading }}>
                </div>

                <div className="w-2/3 md:w-5/12 xl:w-4/12 fixed z-0 bottom-0 right-0 mr-5 md:mr-8 mb-5 md:mb-8 opacity-15">
                  <Img fluid={ datoCmsAbout.image.fluid } className="w-full mb-0 pb-0" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </SmoothScrollProvider>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      title
      heading
      image {
        fluid(
          imgixParams: {w: "2000", h: "2000", fit: "crop", sat: -100 }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      slug
    }
  }
`