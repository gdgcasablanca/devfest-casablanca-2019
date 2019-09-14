import React from "react"

import Section from "../../base-section/base-section"
import "./speakers.css"

const Speakers = () => {
  return (
    <Section classes="speakers" id="Speakers">
      <div className="speakers-content">
        <p className="small-text">What is DevFest?</p>
        <h1>Speakers</h1>
        <p className="p">Some word about speakers</p>
        <a className="btn" href="/" target="_blank" rel="noopener noreferrer">
          SEE ALL SPEAKERS
        </a>
      </div>
    </Section>
  )
}

export default Speakers
