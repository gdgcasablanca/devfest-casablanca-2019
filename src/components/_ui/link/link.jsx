import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import cx from 'classnames'

import styles from './link.module.css'

const Link = ({
  href,
  target,
  children,
  internal,
  className,
  ...otherProps
}) => {
  const anchorProps = {
    className: cx(styles.link, className),
    href,
    children,
    ...otherProps,
  }

  let Comp = 'a'

  if (target === '_blank') {
    anchorProps.target = '_blank'
    anchorProps.rel = 'noopener noreferrer'
  }

  if (internal) {
    Comp = GatsbyLink
    anchorProps.to = href
  }

  return <Comp {...anchorProps}>{children}</Comp>
}

Link.defaultProps = {
  href: '#!',
  target: null,
  children: null,
  internal: false,
  className: '',
  variant: 'default',
  inline: false,
  btnStyle: false,
}

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
  internal: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'dark']),
  inline: PropTypes.bool,
  btnStyle: PropTypes.bool,
}

export default Link
