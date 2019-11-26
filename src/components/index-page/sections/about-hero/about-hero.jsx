import React from 'react'
import cx from 'classnames'

import Section from '../../../_ui/base-section/base-section'
import heroImage from '../../../../images/hero-devfest.svg'
import styles from './about-hero.module.css'

const AboutHero = () => {
  return (
    <Section classes={styles.aboutHero} id="DevFest">
      <img
        className={styles.heroImage}
        src={heroImage}
        alt="A colorfull DevFest slogan"
      />
      <h1 className={styles.casa}>GDG Casablanca</h1>
      <p className="small-text">November 30, 2019</p>

      <div className={styles.separator}></div>
      <p className={cx('p', styles.p)}>
        DevFests are community-led developer events hosted by Google Developer
        Groups around the globe. GDGs are focused on community building and
        learning about Google’s technologies.{' '}
      </p>
    </Section>
  )
}

export default AboutHero
