import React from 'react'
import cx from 'classnames'

import './base-section.css'

const BaseSection = ({
  baseClass = 'section',
  children,
  classes,
  Component = 'section',
  id,
}) => {
  return (
    <Component className={cx(baseClass, classes)} id={id}>
      <div className="container">{children}</div>
    </Component>
  )
}

export default BaseSection
