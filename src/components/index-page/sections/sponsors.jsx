import React from "react"

import Section from "../../base-section/base-section"
import "./sponsors.css"
import intelLogo from "../../../images/intel-logo.svg"

const sponsors = [
  {
    name: "Accenture",
    img: intelLogo,
  },
  {
    name: "Intel",
    img: intelLogo,
  },
  {
    name: "Atos",
    img: intelLogo,
  },
  {
    name: "SAP",
    img: intelLogo,
  },
]

const Sponsors = () => {
  return (
    <Section classes="sponsors" id="Sponsors">
      <div className="sponsors-content">
        <p className="small-text">---</p>
        <h1>Partners & Sponsors</h1>
        <p className="p">
          Speacial thanks to our sponsors for their partnership and support to
          make the DevFest19 Casablanca experience what it is.
        </p>
        <div className="sponsor-images">
          {sponsors.map((item, index) => (
            <img src={item.img} alt={item.name} key={index} />
          ))}
        </div>
        <a
          className="btn btn-inv"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BECOME A PARTNER
        </a>
      </div>
    </Section>
  )
}

export default Sponsors
