import React from "react"

import Section from "../base-section/base-section"
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
    <Section
      Component="footer"
      baseClass="footer"
      classes="about-gdg-wtm"
      id="GDGWTMCasablanca"
    >
      <p className="small-text">Developer community</p>
      <h1>GDG & WTM Casablanca</h1>
      <div className="links-block-wrapper">
        {footerLinks.map((linksSet, index) => (
          <div className="links-block" key={index.toString()}>
            <h5>{linksSet.title}</h5>
            <ul className="links-list">
              {linksSet.links.map(({ label, link }, index) => (
                <li key={index.toString()}>
                  <Link to={link}>{label}</Link>
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
