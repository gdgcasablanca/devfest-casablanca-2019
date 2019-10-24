import React from 'react'

import Section from '../_ui/base-section/base-section'
import Button from '../_ui/button/button'
import Link from '../_ui/link/link'
import styles from './footer.module.css'

const footerLinks = [
  {
    title: 'About',
    links: [
      {
        label: 'GDG Casablanca',
        link: 'https://gdgcasablanca.com/',
      },
      {
        label: 'WTM Casablanca',
        link: 'https://wtm.gdgcasablanca.com/',
      },
    ],
  },
  {
    title: 'Contact us',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        link: 'mailto:contact@gdgcasablanca.com',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        label: 'Meetup',
        link: 'https://www.meetup.com/GDGCasablanca/',
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/gdgcasablanca',
      },
      {
        label: 'Facebook',
        link: 'https://www.facebook.com/GDGCasa/',
      },
    ],
  },
]

const Footer = () => {
  return (
    <Section
      Component="footer"
      baseClass="footer"
      classes={`about-gdg-wtm ${styles.footer}`}
      id="GDGWTMCasablanca"
    >
      <p className="small-text">Developer community</p>
      <h1>GDG & WTM Casablanca</h1>
      <div className={styles.linksBlockWrapper}>
        {footerLinks.map((linksSet, index) => (
          <div className={styles.linksBlock} key={index.toString()}>
            <h5>{linksSet.title}</h5>
            <ul className={styles.linksList}>
              {linksSet.links.map(({ label, link }, index) => (
                <li key={index.toString()}>
                  <Button
                    color="link"
                    As={Link}
                    classes={styles.footerLink}
                    to={link}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Footer