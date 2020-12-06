import React from "react"
import PropTypes from "prop-types"
import {  AnimatePresence } from 'framer-motion'

import Header from "./header"
import Footer from "./footer"

import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 texture-overlay z-0"></div>
      <Header />
      <div className="header--mask"></div>

      <div id="scroll-container" className="content-inner" data-scroll-container>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>

      { location.pathname === '/about' && (
        <Footer />
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
