import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { fade, revealInOut, revealInOutIn } from "../helpers/transitionHelper"
import Img from "gatsby-image"
import CountUp from "react-countup"

const IndexPage = ({ data: { datoCmsHome, work }, location}) => {
  return (
    <>
      <SEO
        titleOverride={datoCmsHome.metaTags && datoCmsHome.metaTags.title ? datoCmsHome.metaTags.title : datoCmsHome.title }
        descriptionOverride={datoCmsHome.metaTags && datoCmsHome.metaTags.description ? datoCmsHome.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={datoCmsHome.metaTags && datoCmsHome.metaTags.image ? datoCmsHome.metaTags.image.url : null }
      />

      <motion.section
        data-scroll-section
        initial="initial"
        animate="enter"
        exit="exit"
        className="text-white"
      >
        <motion.div variants={fade}>
          <motion.div variants={{
            enter: { transition: { staggerChildren: 0.02 }}
          }}>
            {/* <div className="header-mask" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div> */}
            <div className="container container--content">
              <ul className="work-area" id="work-area">
                {work.edges.map(({ node }, i) => {
                  return (
                    <li key={i} className={`work-item-wrapper block border-opacity-25 border-b border-white`}>
                      <Link className="work-item block relative group" to={ `/${node.slug}` }>
                        <div className="overflow-hidden">
                          <div className="work-item__inner">
                            <motion.div variants={revealInOut} className="flex flex-wrap w-full">
                              <span className="work-item__index self-start">({ i < 9 ? '0' : ''}{ i + 1 })</span>
                              <span className="work-item__title">{ node.title }</span>
                              <span className="work-item__year pr-1">
                                <span>{ node.year }</span>
                              </span>
                            </motion.div>
                          </div>
                        </div>
                        { node.image ? (
                          <div className="work-item__image">
                            <Img fluid={ node.image.fluid } className="w-full mb-0 pb-0" />
                          </div>
                        ) : (<></>)}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
          
          <div className="flex flex-wrap items-center" id="collaborate">
            <div className="flex flex-wrap items-start">
              <div className="container container--content w-full flex flex-wrap">
                <div className="w-full md:w-1/2 mb-3 md:mb-0">
                  <span className="block text-lg mb-3 uppercase">Let's Collaborate</span>
                </div>
                <div className="w-full md:w-1/2 mb-12">
                  <div className="pr-12 md:pr-12 lg:pr-24 xl:pr-32 mb-12 md:mb-16 xl:mb-20">
                    <span className="block collab-text font-light">
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;I’m always open to hearing about new projects and oppurtunities, so please feel free to get in touch via any of the channels below.</p>
                    </span>
                  </div>

                  <div className="mb-3 md:mb-5 xl:mb-8">
                    <span className="block block text-base mb-0 uppercase opacity-100">Email</span>
                    <a href="mailto:hello@samgoddard.co.uk" className="inline-block fake-strike text-2xl md:text-3xl xl:text-4xl">hello@samgoddard.co.uk</a>
                  </div>

                  <div className="mb-3 md:mb-5 xl:mb-8">
                    <span className="block block text-base mb-0 uppercase opacity-100">Type Set With</span>
                    <span className="block text-2xl md:text-3xl xl:text-4xl"><a className="inline-block fake-strike" href="https://pangrampangram.com/products/migra" target="_blank" rel="noopener noreferrer">Migra</a> &amp; <a className="inline-block fake-strike" href="https://pangrampangram.com/products/neue-world" target="_blank" rel="noopener noreferrer">Neue World</a></span>
                  </div>

                  <div className="mb-3 md:mb-5 xl:mb-8">
                    <span className="block block text-base mb-0 uppercase opacity-100">Site Designed By</span>
                    <a className="inline-block fake-strike text-2xl md:text-3xl xl:text-4xl " href="https://ijpowell.co.uk" target="_blank" rel="noopener noreferrer">Isaac Powell</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto self-end w-full container">
                <Footer borderColor="border-white" backToTopButton />
              </div>
            </div> 
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      title
      slug
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
    work: allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          inProgress
          url
          year
          image {
            fluid(
              maxWidth: 1600,
              imgixParams: {w: "1600", h: "1200", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
      }
    }
  }
`