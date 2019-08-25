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
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>

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
        {headerLinks.map(({ label, link }) => (
          <a href={link}>{label}</a>
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
