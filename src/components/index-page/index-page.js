import React from 'react'

import About from './sections/about/about'
import BeforeAsk from './sections/before-ask/before-ask'
import Organizers from './sections/organizers/organizers'
import Speakers from './sections/speakers/speakers'
import Sponsors from './sections/sponsors/sponsors'

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
