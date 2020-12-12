import React from "react"
import { Link } from "gatsby"
import Marquee from "react-smooth-marquee"

const Header = ({ theme }) => {
  return (
    <header className={ `container container--header fixed top-0 left-0 right-0 w-full z-40 transition-colors ease-in-out duration-500 delay-75 ` + theme }>
      <div className="flex flex-wrap items-center border-b border-current border-opacity-75 pb-2">
        <Link className="header-item hover:line-through focus:line-through" to="/"><span className="hidden md:block">Sam Goddard</span><span className="block md:hidden">SG</span></Link>
        <span className="header-item ml-3 md:ml-8 ">’89 —</span>

        <span className="header-item ml-auto hidden lg:block ">
          <div className={ theme === 'text-black' ? `ticker-wrapper ticker-wrapper--light` : `ticker-wrapper ticker-wrapper--dark` }>
            <Marquee velocity={0.04}>
              Creative Developer &nbsp;<em>&amp;</em>&nbsp; Sage One Trick &nbsp;<em>&amp;</em>&nbsp; Motion Developer &nbsp;<em>&amp;</em>&nbsp; Tailwind Fan &nbsp;<em>&amp;</em>&nbsp; Creative Developer &nbsp;<em>&amp;</em>&nbsp; Sage One Trick &nbsp;<em>&amp;</em>&nbsp; Motion Developer &nbsp;<em>&amp;</em>&nbsp; Tailwind Fan &nbsp;<em>&amp;</em>&nbsp; Creative Developer &nbsp;<em>&amp;</em>&nbsp; Sage One Trick &nbsp;<em>&amp;</em>&nbsp; Motion Developer &nbsp;<em>&amp;</em>&nbsp; Tailwind Fan &nbsp;<em>&amp;</em>&nbsp; Creative Developer &nbsp;<em>&amp;</em>&nbsp; Sage One Trick &nbsp;<em>&amp;</em>&nbsp; Motion Developer &nbsp;<em>&amp;</em>&nbsp; Tailwind Fan
            </Marquee>
          </div>
          {/* <Ticker>
            {({ index }) => (
                <>
                  Creative Developer Sage One Trick Motion Developer Tailwind Advocate
                </>
            )}
          </Ticker> */}
          {/* <ReactRotatingText
            items={["Creative Developer", "Sage One Trick", "Motion Developer", "Tailwind Advocate"]}
            pause={4000}
            emptyPause={250}
            cursor={false}
            typingInterval={40}
            deletingInterval={40}
          /> */}
        </span>

        <div className="ml-auto flex flex-wrap">
          <nav>
            <ul className="flex flex-wrap">
              <li><Link activeClassName="is--active" className="header-item hover:line-through focus:line-through  ml-6 md:ml-8 xl:ml-12" to="/">Works</Link></li>
              <li><Link activeClassName="is--active" className="header-item hover:line-through focus:line-through  ml-6 md:ml-8 xl:ml-12" to="/about">About</Link></li>
            </ul>
          </nav>

          <a href="mailto:hello@samgoddard.co.uk" className="header-item hover:line-through focus:line-through ml-5 md:ml-24"><span className="hidden md:inline">Let's </span>Collaborate</a>
        </div>
      </div>
    </header>
  )
}

export default Header