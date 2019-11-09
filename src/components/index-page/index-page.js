import React from 'react'

import About from './sections/about/about'
import Organizers from './sections/organizers/organizers'
import Sponsors from './sections/sponsors/sponsors'
import BeforeAsk from './sections/before-ask/before-ask'

const IndexPage = () => {
  return (
    <>
      <About />
      <BeforeAsk />
      <Organizers />
      <Speakers />
      <Sponsors />
    </>
  )
}

export default IndexPage
