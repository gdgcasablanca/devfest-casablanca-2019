import React from "react"

import Section from "../../../base-section/base-section"
import Card from "../common/card"
import "./speakers.css"
import willSmith from "../../../../images/will-smith.jpg"

const speakers = [
  {
    name: "Will Smith",
    description: "Product Designer, Google",
    img: willSmith,
  },
  {
    name: "Will Smith",
    description: "Product Designer, Google",
    img: willSmith,
  },
  {
    name: "Will Smith",
    description: "Product Designer, Google",
    img: willSmith,
  },
  {
    name: "Will Smith",
    description: "Product Designer, Google",
    img: willSmith,
  },
  {
    name: "Will Smith",
    description: "Product Designer, Google",
    img: willSmith,
  },
  {
    name: "Will Smith",
    description: "Product Designer, Google",
    img: willSmith,
  },
]

const Speakers = () => {
  return (
    <Section classes="speakers" id="Speakers">
      <div className="speakers-content">
        <p className="small-text">What is DevFest?</p>
        <h1>Speakers</h1>
        <p className="p">Some word about speakers</p>
        <div className="speakers-cards">
          {speakers.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
        <a className="btn" href="/" target="_blank" rel="noopener noreferrer">
          SEE ALL SPEAKERS
        </a>
      </div>
    </Section>
  )
}

export default Speakers
