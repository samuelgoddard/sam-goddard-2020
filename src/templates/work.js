import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { fade, revealInOut } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const WorkPage = ({ data: { work }, location}) => {
  return (
    <>
      <SEO
        titleOverride={work.metaTags && work.metaTags.title ? work.metaTags.title : work.title }
        descriptionOverride={work.metaTags && work.metaTags.description ? work.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={work.metaTags && work.metaTags.image ? work.metaTags.image.url : null }
      />
    
      <motion.section
        data-scroll-section
        initial="initial"
        animate="enter"
        exit="exit"
        className="text-white"
      >
        <motion.div variants={fade}>
          <div className="container container--content-about flex flex-wrap min-h-screen">
            <div className="w-full">
              <Link to="/" className="text-xl md:text-2xl flex mb-1 items-center group transition ease-in-out duration-300 hover:opacity-50 focus:opacity-50"><span className="block -mt-1 mr-1">←</span> <span className="block group-hover:ml-1 transition-all ease-in-out duration-300">All Projects</span></Link>
              <div className="overflow-hidden">
                <motion.h1 variants={revealInOut} className="work-title mb-0 pb-0 uppercase">{ work.title } Lorem ipsum dolor sit amet</motion.h1>
              </div>
            </div>

            <div className="mt-auto self-end w-full">
              <Footer borderColor="border-white" backToTopButton />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default WorkPage

export const query = graphql`
  query WorkQuery($slug: String!) {
    work: datoCmsWork(slug: { eq: $slug }) {
      title
      slug
    }
  }
`