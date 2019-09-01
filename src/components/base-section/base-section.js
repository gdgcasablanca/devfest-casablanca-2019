import React from "react"

import "./base-section.css"

const BaseSection = ({
  baseClass = "section",
  children,
  classes,
  Component = "section",
  id,
}) => {
  return (
    <Component className={`${baseClass} ${classes}`} id={id}>
      <div className="container">{children}</div>
    </Component>
  )
}

export default BaseSection
