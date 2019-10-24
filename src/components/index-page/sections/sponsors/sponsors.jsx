import React from 'react'

import './sponsors.css'
import Section from '../../../_ui/base-section/base-section'
import intelLogo from '../../../../images/intel-logo.svg'
import Button from '../../../_ui/button/button'
import Link from '../../../_ui/link/link'

const sponsors = [
  {
    name: 'Accenture',
    img: intelLogo,
  },
  {
    name: 'Intel',
    img: intelLogo,
  },
  {
    name: 'Atos',
    img: intelLogo,
  },
  {
    name: 'SAP',
    img: intelLogo,
  },
]

const Sponsors = () => {
  return (
    <Section classes="sponsors" id="Sponsors">
      <div className="sponsors-content">
        <p className="small-text">---</p>
        <h1>Partners & Sponsors</h1>
        <p className="p">
          Speacial thanks to our sponsors for their partnership and support to
          make the DevFest19 Casablanca experience what it is.
        </p>
        <div className="sponsor-images">
          {sponsors.map((item, index) => (
            <img src={item.img} alt={item.name} key={index} />
          ))}
        </div>
        <Button As={Link} color="white" href="#!">
          BECOME A PARTNER
        </Button>
      </div>
    </Section>
  )
}

export default Sponsors
