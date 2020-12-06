import React, { createContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
  scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null)

  useEffect(() => {
    if (!scroll) {
      ;(async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]') ?? undefined,
              ...options,
            })
          )
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'











// import { useEffect } from "react"

// // We are excluding this from loading at build time in gatsby-node.js
// import LocomotiveScroll from "locomotive-scroll"

// import { scroll } from "../theme"

// const Scroll = callbacks => {
//   useEffect(() => {
//     let locomotiveScroll
//     locomotiveScroll = new LocomotiveScroll({
//       el: document.querySelector(scroll.container),
//       ...scroll.options,
//     })
//     locomotiveScroll.update();

//     // Exposing to the global scope for ease of use.
//     window.scroll = locomotiveScroll

//     locomotiveScroll.on("scroll", func => {
//       // Update `data-direction` with scroll direction.
//       document.documentElement.setAttribute("data-direction", func.direction)
//     })

//     return () => {
//       if (locomotiveScroll) 
//         locomotiveScroll.destroy()
//       }
//   }, [callbacks])

//   return null
// }

// export default Scroll