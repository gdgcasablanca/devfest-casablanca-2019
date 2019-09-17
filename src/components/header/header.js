import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import GDGCasaLogo from "../../images/logo-gdg.svg"
import "./header.css"

const headerLinks = [
  {
    label: "DevFest",
    link: "#DevFest",
  },
  {
    label: "Organizers",
    link: "#Organizers",
  },
  {
    label: "Sponsors & Partners",
    link: "#Sponsors",
  },
  {
    label: "About Us",
    link: "#GDGWTMCasablanca",
  },
]

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <Link to="/" className="image-link">
        <img
          className="header-gdg-logo"
          src={GDGCasaLogo}
          alt="GDG Casablanca Logo"
        />
      </Link>
      <nav className="header-nav">
        {headerLinks.map(({ label, link }, index) => (
          <a href={link} key={index.toString()}>{label}</a>
        ))}
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
