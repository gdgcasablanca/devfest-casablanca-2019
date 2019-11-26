import React from 'react'

import styles from './sponsors.module.css'
import Section from '../../../_ui/base-section/base-section'
import Button from '../../../_ui/button/button'
import Link from '../../../_ui/link/link'
import emsi from '../../../../images/partners/emsi.png'
import gdg from '../../../../images/logo-gdg.svg'
import wtm from '../../../../images/logo-wtm.svg'

const sponsors = [
  {
    name: 'Emsi',
    img: emsi,
  },
  {
    name: 'GDG',
    img: gdg,
  },
  {
    name: 'WTM',
    img: wtm,
  },
]

const Sponsors = () => (
  <Section classes={styles.sponsors} id="Sponsors">
    <div className={styles.sponsorsContent}>
      <h1>Partners & Sponsors</h1>
      <p className="p">
        Speacial thanks to our sponsors for their partnership and support to
        make the DevFest19 Casablanca experience what it is.
      </p>
      <div className={styles.sponsorImages}>
        {sponsors.length > 0 && (
          <div className={styles.sponsorImagesInner}>
            {sponsors.map(({ img, name }, index) =>
              img ? (
                <img src={img} alt={name} key={index.toString()} />
              ) : (
                <h3>{name}</h3>
              ),
            )}
          </div>
        )}
      </div>
      <Button
        As={Link}
        href="mailto:contact@gdgcasablanca.com"
        color="white"
        target="_blank"
      >
        BECOME A PARTNER
      </Button>
    </div>
  </Section>
)

export default Sponsors
