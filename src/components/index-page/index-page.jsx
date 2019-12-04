import React from 'react'

import AboutHero from './sections/about-hero/about-hero'
import BeforeAsk from './sections/before-ask/before-ask'
import ImageGallery from './sections/image-gallery/image-gallery'
import Organizers from './sections/organizers/organizers'
import Speakers from './sections/speakers/speakers'
import Sponsors from './sections/sponsors/sponsors'

const IndexPage = () => {
  return (
    <>
      <AboutHero />
      <BeforeAsk />
      <ImageGallery />
      <Organizers />
      <Speakers />
      <Sponsors />
    </>
  )
}

export default IndexPage
