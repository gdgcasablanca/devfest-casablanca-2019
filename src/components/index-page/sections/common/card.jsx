import React from "react"
import "./card.css"

const Card = ({ img, name, description }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="speaker-info">
        <span className="speaker-name">{name}</span>
        <span className="speaker-description">{description}</span>
      </div>
    </div>
  )
}

export default Card
