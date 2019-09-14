import React from "react"

import About from "./sections/about"
import Organizers from "./sections/organizers"
import Sponsors from "./sections/sponsors"
import Speakers from "./sections/speakers"

const IndexPage = () => {
  return (
    <div>
      <About />
      <Organizers />
      <Speakers />
      <Sponsors />
    </div>
  )
}

export default IndexPage
