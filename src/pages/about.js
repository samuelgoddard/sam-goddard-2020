import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from 'framer-motion'
import { graphql } from "gatsby"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const AboutPage = ({ data: { datoCmsAbout }, location}) => {
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
              <div className="content w-10/12 about-text relative z-10 pb-12" dangerouslySetInnerHTML={{ __html: `&nbsp;&nbsp;&nbsp;&nbsp;` + datoCmsAbout.heading }}>
              </div>

              <div className="w-2/3 md:w-5/12 xl:w-4/12 fixed z-0 bottom-0 right-0 mr-5 md:mr-8 mb-5 md:mb-8 opacity-15">
                <Img fluid={ datoCmsAbout.image.fluid } className="w-full mb-0 pb-0" />
              </div>
            </div>

            <div className="mt-auto self-end w-full">
              <Footer borderColor="black" />
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