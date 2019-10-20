import React from 'react'

import Section from '../../../base-section/base-section'
import Button from '../../../_ui/button/button'
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
            color="link"
            As="a"
            href="mailto:contact@gdgcasablanca.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@gdgcasablanca.com
          </Button>
        </p>
      </div>
    </Section>
  )
}

export default Sponsors
