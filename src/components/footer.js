import React from "react"

const Footer = ({ borderColor }) => (
  <footer className="container--footer w-full bg-trasparent">
    <div className={`border-t border-${ borderColor } border-opacity-75 pt-3 md:pt-4`}>
      <nav>
        <ul className="flex flex-wrap items-center">
          <li><a href="https://twitter.com/samuelgoddard?lang=en" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Twitter</a></li>
          <li><a href="https://open.spotify.com/user/sam_goddard" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Spotify</a></li>
          <li><a href="https://github.com/samuelgoddard" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Github</a></li>
          <li><a href="mailto:hello@samgoddard.co.uk" className="footer-item hover:line-through focus:line-through mr-6 md:mr-8 xl:mr-10">Email</a></li>

          <li className="ml-auto"><a href="mailto:hello@samgoddard.co.uk" className="footer-item hover:line-through focus:line-through ml-6 md:ml-8 xl:ml-10">Back to Top</a></li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer