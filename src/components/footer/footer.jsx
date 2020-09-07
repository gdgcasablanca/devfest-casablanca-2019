import React from 'react'
import cx from 'classnames'

import GDGCasaLogo from '../../images/logo-gdg.svg'
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
      {
        label: 'Code of conduct',
        link: '/coc',
        internal: true,
      },
      {
        label: 'Google Developers Group',
        link: 'https://developers.google.com/community/gdg',
      },
      {
        label: 'Women Techmakers',
        link: 'https://www.womentechmakers.com/',
      },
    ],
  },
  {
    title: 'Past DevFests',
    links: [
      {
        label: 'DevFest Casablanca 2017',
        link: 'https://devfest17-casabanlca.web.app/',
      },
      {
        label: 'DevFest Casablanca 2018',
        link: 'https://devfest-casablanca-2018.web.app/',
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
        link: 'https://www.facebook.com/GDGCasa/',
        label: 'Facebook',
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/gdgcasablanca/',
      },
    ],
  },
  {
    title: 'Partner & Sponsor',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        link: 'mailto:contact@gdgcasablanca.com',
      },
    ],
  },
]

const Footer = () => {
  return (
    <Section
      Component="footer"
      baseClass="footer"
      classes={cx('about-gdg-wtm', styles.footer)}
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
                    href={link}
                    uppercase={false}
                    target="_blank"
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <img
          src={GDGCasaLogo}
          alt="GDG Casablanca Logo"
          className={styles.footerLogo}
        />
        <p className={styles.copyRight}>
          By <strong>GDG Casablanca</strong> Team. The code is @&nbsp;
          <Link
            href="https://github.com/GDG-casablanca/devfest-coming-soon"
            target="_blank"
          >
            Github
          </Link>
        </p>
      </div>
    </Section>
  )
}

export default Footer
