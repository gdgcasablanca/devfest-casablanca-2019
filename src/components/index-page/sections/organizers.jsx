import React from "react"

import Section from "../../base-section/base-section"
import "./organizers.css"

const Organizers = () => {
  return (
    <Section classes="organizers" id="Organizers">
      <div className="organizers-content">
        <p className="small-text">GDG & WTM Casablanca</p>
        <h1>Organizers</h1>
        <p className="p">
          DevFest Casablaca is brought to you with love, efforts and endless fun
          from the GDG & WTM Casablanca team.
        </p>
        <a
          className="organizers-link"
          href="https://www.meetup.com/GDGCasablanca/members/?op=leaders"
          target="_blank"
        >
          Full organizers list
        </a>
      </div>
    </Section>
  )
}

export default Organizers
