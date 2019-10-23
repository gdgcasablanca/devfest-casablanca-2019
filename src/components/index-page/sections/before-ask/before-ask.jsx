import React from 'react'

import styles from './before-ask.module.css'
import Section from '../../../_ui/base-section/base-section'
import Button from '../../../_ui/button/button'
import Link from '../../../_ui/link/link'

const BeforeAsk = () => {
  return (
    <Section>
      <p className="small-text">What is DevFest?</p>
      <h1>Before you ask.</h1>
      <div className={styles.beforeWrapper}>
        <div className={styles.beforeLeft}>
          <p className="p">
            GDG DevFest Casablanca brings together the world class experts in
            Android, Web and Cloud technologies to Casablanca for 1 days of
            sessinons, workshops and showcases.
          </p>
          <p className="p">
            Our team creates DevFest to be the best place for experience sharing
            in a phenomenal atmosphere.
          </p>
          <Button As={Link} href="#!" classes={styles.twiny18Link}>
            See How It Was In 2018
          </Button>
        </div>
        <div className={styles.beforeRight}>
          {beforeStats.map(({ number, label }, index) => (
            <Stat number={number} label={label} />
          ))}
        </div>
      </div>
    </Section>
  )
}

const Stat = ({ number, label }) => (
  <div className={styles.statWrapper}>
    <span className={styles.statNumber}>{number}</span>&nbsp;
    <span className={styles.statLabel}>{label}</span>
  </div>
)

const beforeStats = [
  { number: '+210', label: 'Attendees' },
  { number: '2', label: 'days' },
  { number: '20', label: 'sessions' },
  { number: '2', label: 'tracks' },
]

export default BeforeAsk
