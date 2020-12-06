import React from "react"
import PropTypes from "prop-types"
import {  AnimatePresence } from 'framer-motion'

import Header from "./header"
import Footer from "./footer"

import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div className={ location.pathname === '/about' ? "bg-white text-black transition-colors ease-in-out duration-700 delay-75 min-h-screen" : "bg-black text-white transition-color ease-in-out duration-700 delay-75 min-h-screen"}>
      <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 texture-overlay z-0 opacity-25"></div>
      <Header />
      { !location.pathname === '/about' && (
        <div className="header--mask"></div>
      )}

      <div id="scroll-container" data-scroll-container>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>

      {/* { location.pathname === '/about' && (
        <Footer />
      )} */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
