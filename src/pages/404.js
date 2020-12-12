import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from 'framer-motion'
import { fadeSlow, fade, revealInOut } from "../helpers/transitionHelper"

const NotFoundPage = ({ location }) => (
  <>
    <SEO
      titleOverride={"404 Page Not Found" }
      pathnameOverride={location.pathname}
    />
    
    <motion.section
      initial="initial"
      data-scroll-section
      animate="enter"
      exit="exit"
      className="text-black"
    >
      <div>
        <div className="container container--content-about flex flex-wrap" id="pinned-pane">

          <div className="relative">
            <motion.div
              className="content w-full about-text relative z-10 pb-12"
              variants={{
                enter: { transition: { staggerChildren: 0.03 }}
              }}
            >
              <span className="hidden md:block">
                <span className="block overflow-hidden">
                  <motion.span variants={revealInOut} className="block w-full">Looks like that page doesn't exist.</motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={revealInOut} className="block w-full">Sorry about that...</motion.span>
                </span>
              </span>

              <motion.span variants={fade} className="block md:hidden">
              Looks like that page doesn't exist. Sorry about that...
              </motion.span>
            </motion.div>
          </div>

          <motion.div
            variants={{
              enter: { transition: { delayChildren: 0.45 }}
            }}
            className="mt-auto self-end w-full"
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

export default NotFoundPage
