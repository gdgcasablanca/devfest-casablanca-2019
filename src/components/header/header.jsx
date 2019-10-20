import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import GDGCasaLogo from '../../images/logo-gdg.svg'
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
    label: 'Sponsors & Partners',
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
          <a className="link" href={link} key={index.toString()}>
            {label}
          </a>
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
