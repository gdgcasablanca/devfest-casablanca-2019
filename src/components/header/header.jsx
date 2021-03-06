import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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

const Header = ({ siteTitle }) => {
  const [navShown, setNavShown] = React.useState(false)

  const toggleNavShown = () => setNavShown(!navShown)

  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/" className={styles.imageLink} internal>
          <img
            className={styles.headerGdgLogo}
            src={GDGCasaLogo}
            alt="GDG Casablanca Logo"
          />
        </Link>
        <button className={styles.burgerTrigger} onClick={toggleNavShown}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={cx(styles.headerNav, { [styles.navShown]: navShown })}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
