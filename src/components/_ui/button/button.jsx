import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './button.module.css'

const Button = ({
  children,
  As = 'button',
  color = 'blue',
  classes,
  ...otherProps
}) => {
  return (
    <As
      className={cx(styles.button, styles[btnColors[color]], classes)}
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

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(btnColors)),
}

export default Button
