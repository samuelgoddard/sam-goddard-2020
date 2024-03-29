import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from 'framer-motion'
import { graphql } from "gatsby"
import { fadeSlow, revealInOut } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const AboutPage = ({ data: { datoCmsAbout }, location, childAnimationDelay}) => {
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
        className="text-black dark-select"
      >
        <div>
          <div className="flex flex-wrap" id="pinned-pane">
            <div className="relative w-full container container--content-about">
              <div className="relative w-full">
                <motion.div
                  className="content w-full about-text relative z-10 pb-32 md:pb-32 xl:pb-48"
                  variants={{
                    enter: { transition: { staggerChildren: 0.02, delayChildren: childAnimationDelay }}
                  }}
                >
                  <span className="hidden md:block">
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a creative developer &amp;</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                    <motion.span variants={revealInOut} className="block w-full">co-founder of <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="relative group"><span className="line opacity-0 group-hover:opacity-100 group-focus:opacity-100"></span>Shiftwalk Studio</a>.</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">With a focus on methodical</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">code, I enjoy making websites</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">that are innovative, user-focussed,</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">accessible &amp; performant.</motion.span>
                    </span>
                  </span>

                  <span className="block md:hidden">
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a creative</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">developer &amp; co-</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">-founder of Shiftwalk</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">Studio. With a focus</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">on methodical code</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">I enjoy making</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">websites that are</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">innovative, user-</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">focussed, accessible</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">&amp; performant.</motion.span>
                    </span>
                  </span>
                </motion.div>

                <motion.div
                  variants={{
                    enter: { transition: { delayChildren: 0.3 }}
                  }}
                > 
                  <motion.div variants={fadeSlow}>
                    <div className="w-full md:w-7/12 xl:w-1/2 absolute z-0 bottom-0 right-0 pl-8 opacity-75">
                      <div className="relative overflow-hidden">
                        <Img fluid={ datoCmsAbout.image.fluid } className="w-full mb-0 pb-0  h-full object-cover object-center z-10 block image-scaler--fast" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="w-full"
              variants={{
                enter: { transition: { staggerChildren: 0.02 }}
              }}
            >
              <motion.div variants={fadeSlow} className="container container--content relative z-30">

                <span className="block text-base mb-3 uppercase">Features &amp; Awards</span>

                <ul className="border-t border-black border-opacity-75">
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">CSSDA</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Developer Of The Year (Special Kudos)</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2021</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">CSSDA</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Site Of The Day</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">(3 Times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2021</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">CSSDA</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Public UI Award</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                          (4 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2019 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">CSSDA</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Public UX Award</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                          (4 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2019 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">CSSDA</span>

                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Public Innovation Award</span>
                        
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                          (4 times)
                        </span>

                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2019 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Awwwards</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Site Of The Day</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2021</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Awwwards</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Ecommerce Of The Year (Nominee)</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2021</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Awwwards</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Developer Award</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">(2 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2021</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Awwwards</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Honors</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">(2 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2020 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Awwwards</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Mobile Excellence</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">(2 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2020 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Awwwards</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Mobile Of The Week</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2020 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Admire The Web</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Featured Website</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                          (6 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2019 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Mindsparkle</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Website Feature</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                          (3 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2019 — 20</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Typewolf</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Site Of The Day</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2020</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Siteinspire</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Feature</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2020</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Codrops</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Inspirational Website Of The Week</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">(2 times)
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2020 — 21</span>
                      </motion.div>
                    </div>
                  </li>
                  <li className="block border-b border-black border-opacity-75 w-full pt-4 pb-3">
                    <div className="overflow-hidden w-full">
                      <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                        <span className="block font-display font-light leading-none tracking-mini header-item header-item--title w-full md:w-1/4 mb-1 md:mb-0">Heritage In Motion</span>
                        <span className="block text-left md:ml-auto header-item header-item--small w-1/2 md:w-4/12">Website Of The Year</span>
                        <span className="block text-right md:text-left ml-auto header-item header-item--small w-1/2 md:w-2/12">
                        </span>
                        <span className="hidden md:block text-right ml-auto header-item header-item--small w-1/2 md:w-1/4">2019</span>
                      </motion.div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={{
                enter: { transition: { delayChildren: childAnimationDelay }}
              }}
            >
              <motion.div variants={fadeSlow} className="flex flex-wrap items-center relative z-30">
              <div className="flex flex-wrap items-start">
                <div className="container container--content w-full flex flex-wrap">
                  <div className="w-full md:w-4/12 mb-3 md:mb-0">
                    <span className="block text-lg mb-3 uppercase">About Me</span>
                  </div>
                  <div className="w-full md:w-8/12 mb-12">
                    <div className="w-10/12 md:w-8/12 xl:w-7/12 2xl:w-6/12 collab-text xl:pr-8 font-light collab-text" dangerouslySetInnerHTML={{ __html: datoCmsAbout.bio }}>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
            
            <motion.div
              variants={{
                enter: { transition: { delayChildren: 0.45 }}
              }}
              className="mt-auto container self-end w-full"
            >
              <motion.div variants={fadeSlow} className="">
                <Footer borderColor="border-black" />
              </motion.div>
            </motion.div>
          </div>
        </div>
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
      bio
      title
      heading
      image {
        fluid(
          maxWidth: 2000,
          imgixParams: {w: "2000", h: "1300", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      slug
    }
  }
`