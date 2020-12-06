import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"

const IndexPage = ({ data: { work }, location}) => {
  return (
    <>
      <SEO title="Home" />
      
      <Scroll callback={location} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="container container--content"
      >
        <ul className="work-area">
          {work.edges.map(({ node }, i) => {
            let length = work.edges.length
            return (
              <motion.li variants={fade} key={i} className={i + 1 === length ? `work-item-wrapper` : `work-item-wrapper border-opacity-25 border-b border-white`}>
                <a className="work-item" href={ node.url } target="_blank" rel="noopener noreferrer">
                  <span className="work-item__index">(0{ i + 1 })</span>
                  <span className="work-item__title">{ node.title }</span>
                  <span className="work-item__year">{ node.year }</span>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    work: allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          url
          year
        }
      }
    }
  }
`