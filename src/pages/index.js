import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { graphql } from "gatsby"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ({ data: { work }}) => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container container--content"
      >
        <motion.nav 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <ul>
            {work.edges.map(({ node }, i) => {
              let length = work.edges.length
              return (
                <li key={i} className={i + 1 === length ? `work-item-wrapper` : `work-item-wrapper border-opacity-25 border-b border-white`}>
                  <a className="work-item" href={ node.url } target="_blank" rel="noopener noreferrer">
                    <span className="work-item__index">(0{ i + 1 })</span>
                    <span className="work-item__title">{ node.title }</span>
                    <span className="work-item__year">{ node.year }</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.nav>
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