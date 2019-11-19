import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './button.module.css'

const Button = ({ children, As, color, classes, uppercase, ...otherProps }) => {
  return (
    <As
      className={cx(styles.button, styles[btnColors[color]], classes, {
        [styles.uppercase]: uppercase,
      })}
      {...otherProps}
    >
      {children}
    </As>
  )
}

const btnColors = {
  blue: 'btnBlue',
  white: 'btnWhite',
  link: 'btnLink',
}

Button.defaultProps = {
  color: 'blue',
  As: 'button',
  uppercase: true,
}

Button.propTypes = {
  As: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  color: PropTypes.oneOf(Object.keys(btnColors)),
  uppercase: PropTypes.bool,
}

export default Button
