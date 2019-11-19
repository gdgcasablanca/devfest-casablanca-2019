import React from 'react'
import PropTypes from 'prop-types'

import GDGCasaLogo from '../../images/logo-gdg.svg'
import Button from '../_ui/button/button'
import Link from '../_ui/link/link'
import styles from './header.module.css'

const headerLinks = [
  {
    label: 'DevFest',
    link: '#DevFest',
  },
  {
    label: 'Organizers',
    link: '#Organizers',
  },
  {
    label: 'Speakers',
    link: '#Speakers',
  },
  {
    label: 'Sponsors',
    link: '#Sponsors',
  },
  {
    label: 'About Us',
    link: '#GDGWTMCasablanca',
  },
]

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className="container">
      <Link to="/" className={styles.imageLink}>
        <img
          className={styles.headerGdgLogo}
          src={GDGCasaLogo}
          alt="GDG Casablanca Logo"
        />
      </Link>
      <nav className={styles.headerNav}>
        {headerLinks.map(({ label, link }, index) => (
          <Button
            As={Link}
            color="link"
            classes={styles.headerLink}
            href={link}
            key={index.toString()}
          >
            {label}
          </Button>
        ))}
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
