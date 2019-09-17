import React from "react"

import About from "./sections/about/about"
import Organizers from "./sections/organizers/organizers"
import Sponsors from "./sections/sponsors/sponsors"
import Speakers from "./sections/speakers/speakers"

const IndexPage = () => {
  return (
    <>
      <About />
      <Organizers />
      <Speakers />
      <Sponsors />
    </>
  )
}

export default IndexPage
