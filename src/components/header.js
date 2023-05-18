import React from "react"
import { Link } from "gatsby"
import Marquee from "react-smooth-marquee"

const Header = ({ theme, path }) => {
  return (
    <header className={ `container container--header fixed top-0 left-0 right-0 w-full z-40` }>
      <div className="flex flex-wrap items-center pb-2 relative overflow-hidden">
        
        <div className={`bg-current bg-opacity-75 w-full h-px transition-colors ease-in-out duration-500 delay-75 ${theme} absolute bottom-0 left-0 right-0 w-full`}></div>

        <Link className={`header-item fake-strike transition-colors ease-in-out duration-500 delay-75 ${theme}`} to="/"><span className="hidden md:block">Sam Goddard</span><span className="block md:hidden">SG</span></Link>
        
        <span className={`header-item ml-1 md:ml-8 transition-colors ease-in-out duration-500 delay-75 ${theme}`}>’89 —</span>

        <span className={`header-item ml-auto hidden lg:flex items-center transition-colors ease-in-out duration-500 delay-75 ${theme}`}>
          <div className={ theme === 'text-black' ? `ticker-wrapper ticker-wrapper--light` : `ticker-wrapper ticker-wrapper--dark` }>
            <Marquee velocity={0.04}>
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
              Creative Developer
              &nbsp;<em>—</em>&nbsp;
              Available June ’23
              &nbsp;<em>—</em>&nbsp;
            </Marquee>
          </div>
        </span>

        <div className="ml-auto flex flex-wrap">
          <nav>
            <div className="flex flex-wrap">
              <Link activeClassName="is--active" className={`header-item fake-strike ml-6 md:ml-8 xl:ml-12 transition-colors ease-in-out duration-500 delay-75 ${theme}`} to="/" partiallyActive={path === '/about' | path === '/about/' ? false : true }><span className="block">Works</span></Link>
              <Link activeClassName="is--active" className={`header-item fake-strike ml-6 md:ml-8 xl:ml-12 transition-colors ease-in-out duration-500 delay-75 ${theme}`} to="/about"><span className="block">About</span></Link>
            </div>
          </nav>

          <a href="mailto:hello@shiftwalk.studio"
            className={`header-item fake-strike ml-5 md:ml-24 transition-colors ease-in-out duration-500 delay-75 ${theme}`}><span className="hidden md:inline">Let's </span>Collab<span className="hidden sm:inline">orate</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
