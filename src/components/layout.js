import React from "react"
import PropTypes from "prop-types"
import {  AnimatePresence } from 'framer-motion'

import Header from "./header"

import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div id="top" className={ location.pathname === '/about' || location.pathname === '/about/' ? "bg-white text-black transition-colors ease-in-out duration-700 delay-75 min-h-screen" : "bg-black text-white transition-color ease-in-out duration-700 delay-150 min-h-screen"}>

      <a className="skip-link sr-only" href="#scroll-container">Skip to main</a>

      <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 texture-overlay z-0 opacity-25"></div>
      
      <Header theme={ location.pathname === '/about' || location.pathname === '/about/' ? "text-black" : "text-white" } />
      
      {/* { !location.pathname === '/about' && (
        <div className="header--mask"></div>
      )} */}

      <div id="scroll-container" className="relative z-10" data-scroll-container>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
