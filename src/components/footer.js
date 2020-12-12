import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = ({ backToTopButton, borderColor }) => (
  <footer className="container--footer w-full bg-trasparent">
    <div className={`border-t ${ borderColor } border-opacity-75 pt-3 md:pt-4`}>
      <nav>
        <ul className="flex flex-wrap items-center">
          <li><a href="https://twitter.com/samuelgoddard?lang=en" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Twitter</a></li>
          <li><a href="https://open.spotify.com/user/sam_goddard" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Spotify</a></li>
          <li><a href="https://github.com/samuelgoddard" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Github</a></li>
          <li><a href="mailto:hello@samgoddard.co.uk" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Email</a></li>

          { backToTopButton && (
            <li className="ml-auto">
              <AnchorLink
                to="#top"
                className="footer-item hover:line-through focus:line-through ml-6 md:ml-8 xl:ml-10"
                title="Scroll back to the top of the page"
              >
                <span className="hidden md:inline">Back to&nbsp;</span>Top
              </AnchorLink></li>
          )}
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer