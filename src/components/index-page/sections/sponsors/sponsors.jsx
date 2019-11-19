import React from 'react'

import Section from '../../../_ui/base-section/base-section'
import Button from '../../../_ui/button/button'
import Link from '../../../_ui/link/link'
// import styles from './sponsors.module.css'

const Sponsors = () => {
  return (
    <Section classes="sponsors" id="Sponsors">
      <div className="sponsors-content">
        <p className="small-text">Be part of Devfest 19 Casablanca</p>
        <h1>Want to became our Sponsor or partner?</h1>
        <p className="p">
          For more info, contact us at:&nbsp;
          <Button
            As={Link}
            uppercase={false}
            color="link"
            href="mailto:contact@gdgcasablanca.com"
          >
            contact@gdgcasablanca.com
          </Button>
        </p>
      </div>
    </Section>
  )
}

export default Sponsors
