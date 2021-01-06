import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { fade, revealInOut, fadeSlow } from "../helpers/transitionHelper"
import Img from "gatsby-image"
import Div100vh from "react-div-100vh"

const WorkPage = ({ data: { work }, location, childAnimationDelay}) => {
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
        className="text-white relative z-30"
      >
        <motion.div
          variants={{
            enter: { transition: { delayChildren: childAnimationDelay }}
          }}
        >
          <motion.div variants={fade}>
            <Div100vh className="container container--content-about flex flex-wrap pb-2 md:pb-4 relative">
              { !work.inProgress && work.url ? (
                <a href={ work.url } target="_blank" rel="noopener noreferrer" className="hidden md:block md:fixed bottom-0 right-0 mr-8 md:mb-8 site-link z-40 fake-strike overflow-hidden pl-1">
                  <motion.div variants={revealInOut} className="hidden md:flex items-center">
                    <span className="flex h-3 w-3 relative -mt-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <span className="pl-3">
                      Visit live site
                    </span>
                  </motion.div>
                </a>
              ) : (
                <span className="md:fixed bottom-0 right-0 mr-8 md:mb-5 site-link hidden md:block">
                  <motion.span variants={revealInOut} className="block">
                    Launching Soon
                  </motion.span>
                </span>
              )}
              
              <div className="w-full flex flex-wrap items-center">
                <div className="w-full md:w-2/3 relative h-full flex">
                  <div className="absolute top-0 left-0 right-0 bottom-0 work-image overflow-hidden">
                  
                    <motion.div variants={fadeSlow} className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                      <Img fluid={work.desktopImage ? work.desktopImage.fluid : work.image.fluid } className="w-full h-full object-cover object-center opacity-35 z-0 hidden md:block image-scaler--fast" />
                      <Img fluid={work.mobileImage ? work.mobileImage.fluid : work.image.fluid } className="w-full h-full object-cover object-center opacity-35 z-0 block md:hidden image-scaler--fast" />
                    </motion.div>
                  </div>

                  <div className="mt-auto self-end relative z-10">
                    <div className="overflow-hidden">
                      <motion.div variants={revealInOut}>
                        <Link to="/" className="header-item flex mb-0 md:mb-1 items-center group transition ease-in-out duration-300 hover:opacity-50 focus:opacity-50"><span className="block -mt-1 mr-1">←</span> <span className="block group-hover:ml-1 transition-all ease-in-out duration-300">(All Projects)</span></Link>

                        <h1 className="work-title mb-0 pb-0 uppercase">{ work.title }</h1>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <motion.div variants={{
                      enter: { transition: { 
                        staggerChildren: 0.03,
                        delayChildren: childAnimationDelay
                      }}
                    }} className="w-full md:w-1/3 md:pl-8 xl:pl-10 relativ hidden md:block work-image">
                  <span className="block text-base mb-2 uppercase">Tech Stack</span>

                  <ul className="border-t border-white border-opacity-25 mb-8 xl:mb-10">
                    { work.stack.map((block) => (
                      <li key={block.id} className="block border-b border-white border-opacity-25 w-full pt-3 pb-1">
                        {
                          block.model.apiKey === 'text' &&
                            <div className="overflow-hidden w-full">
                              <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                                <span className="block font-display font-light leading-none tracking-mini header-item">{ block.text }</span>
                                <span className="hidden md:block text-right ml-auto text-lg">{ block.metaText }</span>
                              </motion.div>
                            </div>
                        }
                      </li>
                    ))}
                  </ul>

                  <motion.span variants={fade} className="block text-base mb-2 uppercase">With Thanks To</motion.span>
                  
                  <ul
                    className="border-t border-white border-opacity-25"
                  >
                    { work.thanksTo.map((block) => (
                      <li key={block.id} className="block border-b border-white border-opacity-25 w-full pt-3 pb-1">
                        {
                          block.model.apiKey === 'text' &&
                            <div className="overflow-hidden w-full">
                              <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                                <span className="block font-display font-light leading-none tracking-mini header-item">{ block.text }</span>
                                { block.url ? (
                                  <a href={ block.url } target="_blank" rel="noreferrer noopener" className="hidden md:block text-right ml-auto text-lg fake-strike">{ block.metaText }</a>
                                ) : (
                                  <span className="hidden md:block text-right ml-auto text-lg">{ block.metaText }</span>
                                )}
                              </motion.div>
                            </div>
                        }
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </Div100vh>

            <div className="w-full relative block md:hidden container mt-2">
              { !work.inProgress && work.url ? (
                <a href={ work.url } target="_blank" rel="noopener noreferrer" className="site-link flex items-center mb-12">
                  <span className="flex h-3 w-3 relative -mt-1 fake-strike">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="pl-3">
                    Visit live site
                  </span>
                </a>
              ) : (
                <span className="mr-8 md:mb-5 site-link block mb-12">
                  Launching Soon
                </span>
              )}

              <span className="block text-base mb-2 uppercase">Tech Stack</span>
              <ul className="border-t border-white border-opacity-25 mb-8 xl:mb-10">
                { work.stack.map((block) => (
                  <li key={block.id} className="block border-b border-white border-opacity-25 w-full pt-3 pb-2">
                    {
                      block.model.apiKey === 'text' &&
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <span className="block font-display font-light leading-none tracking-mini header-item header-item--title">{ block.text }</span>
                            <span className="block text-right ml-auto header-item header-item--small">{ block.metaText }</span>
                          </motion.div>
                        </div>
                    }
                  </li>
                ))}
              </ul>

              <motion.span variants={fade} className="block text-base mb-2 uppercase">With Thanks To</motion.span>
              <ul className="border-t border-white border-opacity-25">
                { work.thanksTo.map((block) => (
                  <li key={block.id} className="block border-b border-white border-opacity-25 w-full pt-3 pb-2">
                    {
                      block.model.apiKey === 'text' &&
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <span className="block font-display font-light leading-none tracking-mini header-item--title">{ block.text }</span>

                            { block.url ? (
                              <a href={ block.url } target="_blank" rel="noreferrer noopener" className="block text-right ml-auto header-item header-item--small fake-strike">{ block.metaText }</a>
                            ) : (
                              <span className="block text-right ml-auto header-item header-item--small">{ block.metaText }</span>
                            )}
                            
                          </motion.div>
                        </div>
                    }
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center z-30 relative">
              <div className="flex flex-wrap items-start">
                <div className="container container--content w-full flex flex-wrap">
                  <div className="w-full md:w-4/12 mb-3 md:mb-0">
                    <span className="block text-lg mb-3 uppercase md:mb-8">About The Project</span>
                    
                    <div className="hidden md:block">
                      {/* <motion.span variants={fade} className="block text-base mb-2 uppercase">Meta</motion.span>
                      <ul className="border-t border-white border-opacity-25 md:w-9/12 lg:w-9/12 xl:w-8/12 mb-8">
                        <li className="block border-b border-white border-opacity-25 w-full pt-3 pb-1">
                          <div className="overflow-hidden w-full">
                            <motion.div variants={revealInOut} className="lg:flex lg:flex-wrap w-full items-center">
                              <span className="block font-display font-light leading-none tracking-mini header-item">Date</span>
                              <span className="block lg:text-right lg:ml-auto text-lg">{ work.year }</span>
                            </motion.div>
                          </div>
                        </li>
                      </ul> */}
                      
                      { work.awards.length > 0 && (
                        <div>
                          <motion.span variants={fade} className="block text-base mb-2 uppercase">Awards</motion.span>
                          <ul className="border-t border-white border-opacity-25 md:w-9/12 lg:w-9/12 xl:w-8/12">
                            { work.awards.map((block) => (
                              <li key={block.id} className="block border-b border-white border-opacity-25 w-full pt-3 pb-1">
                                {
                                  block.model.apiKey === 'text' &&
                                    <div className="overflow-hidden w-full">
                                      <motion.div variants={revealInOut} className="lg:flex lg:flex-wrap w-full items-center">
                                        <span className="block font-display font-light leading-none tracking-mini header-item">{ block.text }</span>
                                        <span className="block lg:text-right lg:ml-auto text-lg">{ block.metaText }</span>
                                      </motion.div>
                                    </div>
                                }
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-8/12 mb-12">
                    <div className="w-10/12 md:w-8/12 xl:w-1/2 2xl:w-6/12 collab-text font-light 2xl:pr-12" dangerouslySetInnerHTML={{ __html: work.overview }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full container">
              <Footer borderColor="border-white" backToTopButton />
            </div>
          </motion.div>
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
      url
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      year
      inProgress
      image {
        fluid(
          maxWidth: 900,
          imgixParams: {w: "900", h: "600", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      desktopImage {
        fluid(
          maxWidth: 900,
          imgixParams: {w: "900", h: "730", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      mobileImage {
        fluid(
          maxWidth: 600,
          imgixParams: {w: "600", h: "1000", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      stack {
        ... on DatoCmsText {
          id
          model { apiKey }
          text
          metaText
        }
      }
      awards {
        ... on DatoCmsText {
          id
          model { apiKey }
          text
          metaText
        }
      }
      thanksTo {
        ... on DatoCmsText {
          id
          model { apiKey }
          text
          metaText
          url
        }
      }
      overview
      slug
    }
  }
`