import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Footer = ({ borderColor }) => (
  <footer className="container--footer w-full bg-trasparent">
    <div className={`border-t ${ borderColor } border-opacity-75 pt-3 md:pt-4`}>
      <nav>
        <ul className="flex flex-wrap items-center">
          <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/samuelgoddard?lang=en" className="footer-item fake-strike mr-6 md:mr-8 xl:mr-10">Twitter</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/sam_goddard" className="footer-item fake-strike mr-6 md:mr-8 xl:mr-10">Spotify</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelgoddard" className="footer-item fake-strike mr-6 md:mr-8 xl:mr-10">Github</a></li>
          <li><a href="mailto:hello@shiftwalk.studio" className="footer-item fake-strike mr-6 md:mr-8 xl:mr-10">Email</a></li>

          <li className="ml-auto">
            <button onClick={() => scrollTo('#top')} className="footer-item fake-strike ml-6 md:ml-8 xl:ml-10" title="Scroll back to the top of the page">
              <span className="hidden md:inline">Back to&nbsp;</span>Top
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer