import React from 'react'
import PropTypes from 'prop-types'

import styles from './link.module.css'

const Link = ({ to, children, ...otherProps }) => {
  const anchorProps = {
    href: to,
    target: '_blank',
    rel: 'noopener noreferrer',
    ...otherProps,
  }

  return (
    <a className={styles.link} {...anchorProps}>
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
