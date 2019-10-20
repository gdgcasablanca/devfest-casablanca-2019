import React from 'react'
import PropTypes from 'prop-types'

import Button from '../_ui/button/button'

const Link = ({ to, children, ...otherProps }) => {
  const anchorProps = {
    href: to,
    target: '_blank',
    rel: 'noopener noreferrer',
    ...otherProps,
  }
  return (
    <a className="link" {...anchorProps}>
      {children}
    </a>
  )
}

Link.defaultProps = {
  to: '#!',
  children: null,
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

export default Link
