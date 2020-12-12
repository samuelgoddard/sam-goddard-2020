import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"

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
          {/* <div className="header-mask" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div> */}
          <div className="container container--content">
            <ul className="work-area" id="work-area">
              {work.edges.map(({ node }, i) => {
                return (
                  <li key={i} className={`work-item-wrapper block border-opacity-25 border-b border-white`}>
                    { node.inProgress ? (
                      <span className="work-item block relative group cursor-not-allowed">
                        <span className="work-item__inner">
                          <span className="work-item__index">(<span>{ i < 9 ? '0' : ''}{ i + 1 }</span>)</span>
                          <span className="work-item__title">{ node.title }</span>
                          <span className="work-item__year">
                            <span>Soon</span>
                          </span>
                          { node.image ? (
                          <div className="work-item__image">
                              <Img fluid={ node.image.fluid } className="w-full mb-0 pb-0" />
                            </div>
                          ) : (<></>)}
                        </span>
                      </span>
                    ) : (
                      <a className="work-item block relative group" href={ node.url } target="_blank" rel="noopener noreferrer">
                        <span className="work-item__inner">
                          <span className="work-item__index">(<span>{ i < 9 ? '0' : ''}{ i + 1 }</span>)</span>
                          <span className="work-item__title">{ node.title }</span>
                          <span className="work-item__year">
                            <span>{ node.year }</span>
                          </span>
                          { node.image ? (
                          <div className="work-item__image">
                              <Img fluid={ node.image.fluid } className="w-full mb-0 pb-0" />
                            </div>
                          ) : (<></>)}
                        </span>
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
          
          <div className="flex flex-wrap items-center">
            <div className="flex flex-wrap items-start">
              <div className="container container--content w-full flex flex-wrap">
                <div className="w-full md:w-1/2 mb-3 md:mb-0">
                  <span className="block text-2xl">Let's Collaborate</span>
                </div>
                <div className="w-full md:w-1/2 mb-12">
                  <div className="pr-12 md:pr-12 lg:pr-24 xl:pr-32 mb-12 md:mb-16 xl:mb-20">
                    <span className="block collab-text">&nbsp;&nbsp;&nbsp;&nbsp;Have a project in mind that you’d like to work with me on? I’m always open to hearing about new stuff, so give me a message through any of the channels below and I’ll be in touch.</span>
                  </div>

                  <div className="mb-3 md:mb-5 xl:mb-8">
                    <span className="block font-display leading-none tracking-tight text-xl uppercase opacity-20">Email</span>
                    <a href="mailto:hello@samgoddard.co.uk" className="block hover:line-through focus:line-through text-2xl md:text-3xl xl:text-4xl ">hello@samgoddard.co.uk</a>
                  </div>

                  <div className="mb-3 md:mb-5 xl:mb-8">
                    <span className="block font-display leading-none tracking-tight text-xl uppercase opacity-20">Type Set With</span>
                    <span className="block text-2xl md:text-3xl xl:text-4xl"><a className="inline-block hover:line-through focus:line-through" href="https://pangrampangram.com/products/migra" target="_blank" rel="noopener noreferrer">Migra</a> &amp; <a className="inline-block hover:line-through focus:line-through" href="https://pangrampangram.com/products/neue-world" target="_blank" rel="noopener noreferrer">Neue World</a></span>
                  </div>

                  <div className="mb-3 md:mb-5 xl:mb-8">
                    <span className="block font-display leading-none tracking-tight text-xl uppercase opacity-20">Site Designed By</span>
                    <a className="block hover:line-through focus:line-through text-2xl md:text-3xl xl:text-4xl " href="https://ijpowell.co.uk" target="_blank" rel="noopener noreferrer">Isaac Powell</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto self-end w-full container">
                <Footer borderColor="white" backToTopButton />
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