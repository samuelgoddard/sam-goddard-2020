import React, { useEffect } from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from 'framer-motion'
import { graphql } from "gatsby"
import { fade, revealInOut } from "../helpers/transitionHelper"
import Img from "gatsby-image"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const AboutPage = ({ data: { datoCmsAbout }, location}) => {
  useEffect(() => {
    Splitting({ by: 'lines' }).forEach(s => { 
      Splitting({ target: s.words, by: 'chars', force: true }) 
    });
  }, [])
  return (
    <>
      <SEO
        titleOverride={datoCmsAbout.metaTags && datoCmsAbout.metaTags.title ? datoCmsAbout.metaTags.title : datoCmsAbout.title }
        descriptionOverride={datoCmsAbout.metaTags && datoCmsAbout.metaTags.description ? datoCmsAbout.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={datoCmsAbout.metaTags && datoCmsAbout.metaTags.image ? datoCmsAbout.metaTags.image.url : null }
      />
      
      <motion.section
        initial="initial"
        data-scroll-section
        animate="enter"
        exit="exit"
        className="text-black"
      >
        <motion.div variants={fade}>
          <div className="container container--content-about flex flex-wrap" id="pinned-pane">

            <div className="relative">
              <motion.div
                className="content w-full about-text relative z-10 pb-12"
                variants={{
                  enter: { transition: { staggerChildren: 0.03 }}
                }}
              >
                <span className="block">
                  <span className="block overflow-hidden">
                    <motion.span variants={revealInOut} className="block w-full">I’m a web developer from Nottingham</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span variants={revealInOut} className="block w-full">with 10+ years of experience in</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span variants={revealInOut} className="block w-full">methodical html, css &amp; javascript. I’m </motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span variants={revealInOut} className="block w-full">really interested in scaleable front-end</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span variants={revealInOut} className="block w-full">development, craft cms &amp; vuejs.</motion.span>
                  </span>
                </span>
              </motion.div>

              <div className="w-2/3 md:w-5/12 xl:w-4/12 fixed z-0 bottom-0 right-0 mr-5 md:mr-8 mb-5 md:mb-8 opacity-15">
                <Img fluid={ datoCmsAbout.image.fluid } className="w-full mb-0 pb-0" />
              </div>
            </div>

            <div className="mt-auto self-end w-full">
              <Footer borderColor="border-black" />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
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