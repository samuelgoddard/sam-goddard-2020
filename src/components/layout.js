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
      timing: 5.1,
    }
  }
  
  componentDidMount() {
    var that = this;

    setTimeout(function() {
      that.setState({
        showIntro: false,
        timing: 0
      })
     }, 6500);
  }

  render() {
    const location = this.props.location

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
          childAnimationDelay: this.state.timing,
      }),
    );

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
                  animate={{ y: "-100%" }}
                  transition={{ duration: 0.1, delay: 5.75, ease: [0.76, 0, 0.24, 1] }}
                  className="fixed w-full h-screen z-50"
                >
                  <motion.div
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 4.75, ease: [0.76, 0, 0.24, 1] }}
                    className="h-screen w-full z-40 bg-black flex flex-wrap items-center justify-center"
                  >
                    <motion.div
                      animate={{ height: "100vh" }}
                      transition={{ duration: 1.75, delay: 3.75, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute bottom-0 left-0 right-0 h-0 w-full z-50 bg-black"
                    ></motion.div>

                  <motion.div
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 4.75, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 texture-overlay z-50 opacity-25"
                  ></motion.div>

                    <motion.div
                      className="h-screen w-full z-40 bg-black flex flex-wrap items-center justify-center text-white"
                    >
                      <span className="flex overflow-hidden relative z-40">
                        <motion.span variants={revealInOutIn} className="flex">
                          <span className="header-item--large">
                            <span className="block">Sam Goddard </span>
                          </span>
                          <span className="header-item--large ml-1 md:ml-6 flex items-center">
                            ’<CountUp className="block header-item--countup" duration={4.5} end={89} start={1} delay={0.75} /> —
                          </span>  
                        </motion.span>
                      </span>

                      <div className="absolute top-0 left-0 pl-8 md:pl-12 pt-8 md:pt-12 intro-image-plane intro-image-plane--1 ">
                        <div className="relative w-full h-full overflow-hidden">
                          <motion.div 
                            animate={{ y: "-100%" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [.71,.37,.29,1.02] }}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-black z-30 w-full h-full"
                          ></motion.div>

                          <div className="absolute top-0 left-0 right-0 bottom-0  z-20 intro-image-plane__img-1 bg-black">
                            <Img fluid={ data.work.edges[0].node.image.fluid } className="opacity-25 w-full h-full object-cover object-center image-scaler" />
                          </div>

                          <div div className="absolute top-0 left-0 right-0 bottom-0  z-20 intro-image-plane__img-2 bg-black">
                            <Img fluid={ data.work.edges[8].node.image.fluid } className="opacity-25 w-full h-full object-cover object-center image-scaler" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 pr-8 md:pr-12 pb-8 md:pb-12 intro-image-plane intro-image-plane--2 ">
                        <div className="relative w-full h-full overflow-hidden">
                          <motion.div 
                            animate={{ y: "-100%" }}
                            transition={{ duration: 1.5, delay: 0.75, ease: [.71,.37,.29,1.02] }}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-black z-30 w-full h-full"
                          ></motion.div>

                          <div className="absolute top-0 left-0 right-0 bottom-0  z-20 intro-image-plane__img-1 bg-black transform">
                            <Img fluid={ data.work.edges[9].node.image.fluid } className="opacity-25 w-full h-full object-cover object-center image-scaler" />
                          </div>

                          <div className="absolute top-0 left-0 right-0 bottom-0  z-20 intro-image-plane__img-2 bg-black transform">
                            <Img fluid={ data.work.edges[5].node.image.fluid } className="opacity-25 w-full h-full object-cover object-center image-scaler" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.section>
            )}
            
            <Header path={ location.pathname } theme={ location.pathname === '/about' || location.pathname === '/about/' ? "text-black" : "text-white" } />
            
            <div id="scroll-container" data-scroll-container>
              <AnimatePresence exitBeforeEnter>
                {childrenWithProps}
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
