import React from 'react'

import Section from '../../../_ui/base-section/base-section'
import Button from '../../../_ui/button/button'
import styles from './about.module.css'
import Link from '../../../_ui/link/link'

const About = () => {
  return (
    <Section classes={styles.about} id="DevFest">
      <div className={styles.aboutImage}>
        <img
          className="image"
          alt="Devfest 19 Casablanca"
          src="https://devfest.withgoogle.com/api/assets?path=/gs/gweb-gc-gather-production.appspot.com/files/L2FwcGhvc3RpbmdfZ2xvYmFsL2Jsb2JzL0FFbkIyVW8ySk5adlQ4bEpqTjVIUV9uaEFONTFmLXJtV2h3LUQzYWhTclVYSmI0RzZSRjBxM0tfbVprNzZJTlR3QzRNWFlFRXFxTnJXc1VIRU5WeU5USWxqQmxIdjMzeXpYcUJHSGRPdHhwV2U2T0djMXRZUGJrLlBMcUlDa2hyTnhiSjEtVnQ"
        />
      </div>
      <div className={styles.aboutContent}>
        <p className="small-text">October 19, 2019</p>
        <h1>Welcome to DevFest 19</h1>
        <p className="p">
          DevFests are community-led, developer events hosted by GDG chapters
          around the globe focused on community building and learning about
          Google’s technologies. Each DevFest is inspired by and uniquely
          tailored to the needs of the developer community and region that hosts
          it.
        </p>
        <p className="p">
          While no two DevFests will be exactly alike, each at its core is
          powered by a shared belief that when developers come together to
          exchange ideas, amazing things can happen.
        </p>

        <Button
          As={Link}
          href="https://www.meetup.com/GDGCasablanca/"
          classes={styles.meetupLink}
        >
          Check the meetup page
        </Button>
      </div>
    </Section>
  )
}

export default About
