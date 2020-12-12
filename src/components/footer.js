import React from "react"

const Footer = () => (
  <footer className="container container--footer w-full bg-trasparent z-20 fixed bottom-0 left-0 right-0">
    <div className=" border-t border-black border-opacity-75 pt-3 md:pt-4">
      <nav>
        <ul className="flex flex-wrap items-center">
          <li><a href="mailto:hello@samgoddard.co.uk" className="footer-item mr-6 md:mr-8 xl:mr-10">Twitter</a></li>
          <li><a href="mailto:hello@samgoddard.co.uk" className="footer-item mr-6 md:mr-8 xl:mr-10">Instagram</a></li>
          <li><a href="mailto:hello@samgoddard.co.uk" className="footer-item mr-6 md:mr-8 xl:mr-10">Github</a></li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer