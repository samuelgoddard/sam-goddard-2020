import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { fade, revealInOut, revealInOutIn } from "../helpers/transitionHelper"
import Img from "gatsby-image"
import CountUp from "react-countup"
import Header from "./header"

import "../styles/main.css"

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      showIntro: true,
    }
  }

  toggleShowMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  componentDidMount() {
    var that = this;

    setTimeout(function() {
      that.setState({
        showIntro: false
      })
     }, 4500);
  }

  render() {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 0.5,
        }
      }
    }
    
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    const children = this.props.children
    const location = this.props.location

    return (
      <StaticQuery
        query={graphql`
          query {
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
        `}
        render={data => (
          <div id="top" className={ location.pathname === '/about' || location.pathname === '/about/' ? "bg-white text-black transition-colors ease-in-out duration-700 delay-75 min-h-screen" : "bg-black text-white transition-color ease-in-out duration-700 delay-150 min-h-screen"}>

            <a className="skip-link sr-only" href="#scroll-container">Skip to main</a>

            <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 texture-overlay z-0 opacity-25"></div>

              { this.state.showIntro && (
              <motion.section
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <motion.div
                  animate={{ x: "-100%" }}
                  transition={{ duration: 0.05, delay: 4.5, ease: [0.76, 0, 0.24, 1] }}
                  className="fixed w-full h-screen z-50"
                >
                  <motion.div
                    animate={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.65, delay: 3.85, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full h-full relative flex flex-wrap items-center justify-center z-50 bg-black text-white"
                  >
                    <span className="flex overflow-hidden">
                      <motion.span variants={revealInOutIn} className="flex">
                        <span className="header-item--large">
                          <span className="block">Sam Goddard</span>
                        </span>
                        <span className="header-item--large ml-1 md:ml-6 flex items-center">
                          ’<CountUp className="block header-item--countup" duration={5} end={89} start={1} delay={0.75} /> —
                        </span>  
                      </motion.span>
                    </span>

                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.div variants={item} className="absolute bottom-0 right-0 pr-8 md:pr-12 pb-8 md:pb-12 w-8/12 md:w-1/2">
                        <motion.div animate={{ height: 0 }} transition={{ duration: 0.05, delay: 4.5, ease: [0.76, 0, 0.24, 1] }} className="relative">
                          <Img fluid={ data.work.edges[0].node.image.fluid } className="opacity-25" />
                        </motion.div>
                      </motion.div>

                      <motion.div variants={item} className="absolute top-0 left-0 pl-8 md:pl-12 pt-16 md:pt-12 w-1/2 md:w-1/3">
                        <motion.div animate={{ height: 0 }} transition={{ duration: 0.05, delay: 4.5, ease: [0.76, 0, 0.24, 1] }} className="relative">
                          <Img fluid={ data.work.edges[1].node.image.fluid } className="opacity-25" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.div variants={item} className="absolute top-0 right-0 pr-8 md:pr-24 pt-8 md:pt-12 w-2/3 md:w-4/12">
                        <motion.div animate={{ height: 0 }} transition={{ duration: 0.05, delay: 4.5, ease: [0.76, 0, 0.24, 1] }} className="relative">
                          <Img fluid={ data.work.edges[2].node.image.fluid } className="opacity-25" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.div variants={item} className="absolute bottom-0 left-0 pl-8 md:pl-24 pb-16 md:pb-12 w-5/12">
                        <motion.div animate={{ height: 0 }} transition={{ duration: 0.05, delay: 4.5, ease: [0.76, 0, 0.24, 1] }} className="relative">
                          <Img fluid={ data.work.edges[3].node.image.fluid } className="opacity-25" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.section>
              )}
            
            <Header path={ location.pathname } theme={ location.pathname === '/about' || location.pathname === '/about/' ? "text-black" : "text-white" } />
            
            {/* { !location.pathname === '/about' && (
              <div className="header--mask"></div>
            )} */}

            <div id="scroll-container" data-scroll-container>
              <AnimatePresence exitBeforeEnter>
                {children}
              </AnimatePresence>
            </div>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
