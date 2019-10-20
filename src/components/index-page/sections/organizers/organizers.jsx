import React from 'react'

import Section from '../../../base-section/base-section'
import Button from '../../../_ui/button/button'
import styles from './organizers.module.css'

const Organizers = () => {
  return (
    <Section classes="organizers" id="Organizers">
      <p className="small-text">GDG & WTM Casablanca</p>
      <h1>Organizers</h1>
      <p className="p">
        DevFest Casablaca is brought to you with love, efforts and endless fun
        from the GDG & WTM Casablanca team.
      </p>
      <Button
        color="link"
        href="https://www.meetup.com/GDGCasablanca/members/?op=leaders"
        target="_blank"
        rel="noopener noreferrer"
        As="a"
        classes={styles.organizersLink}
      >
        Full organizers list
      </Button>
    </Section>
  )
}

export default Organizers
