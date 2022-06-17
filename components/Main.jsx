import React from "react"
import LiveChannels from "./LiveChannels"
import Hero from "./Hero"
import IconBar from "./IconBar"
import Categories from "./Categories"

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[240px] bg-[#0e0e10]">
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  )
}

export default Main
