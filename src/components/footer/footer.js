import React from "react"

import Link from "../link/link"
import "./footer.css"

const footerLinks = [
  {
    title: "About",
    links: [
      {
        label: "GDG Casablanca",
        link: "https://gdgcasablanca.com/",
      },
      {
        label: "WTM Casablanca",
        link: "https://wtm.gdgcasablanca.com/",
      },
    ],
  },
  {
    title: "Contact us",
    links: [
      {
        label: "contact@gdgcasablanca.com",
        link: "mailto:contact@gdgcasablanca.com",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Meetup",
        link: "https://www.meetup.com/GDGCasablanca/",
      },
      {
        label: "Twitter",
        link: "https://twitter.com/gdgcasablanca",
      },
      {
        label: "Facebook",
        link: "https://www.facebook.com/GDGCasa/",
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer class="footer about-gdg-wtm" id="GDGWTMCasablanca">
      <div class="container">
        <p class="small-text">Developer community</p>
        <h1>GDG & WTM Casablanca</h1>
        <div class="links-block-wrapper">
          {footerLinks.map(linksSet => (
            <div class="links-block">
              <h5>{linksSet.title}</h5>
              <ul class="links-list">
                {linksSet.links.map(({ label, link }) => (
                  <li>
                    <Link to={link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
