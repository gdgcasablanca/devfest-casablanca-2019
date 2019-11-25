import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './card.module.css'

const Card = ({ img, name, description, talkTitle }) => {
  return (
    <div className={styles.card}>
      {talkTitle && <h4 className={styles.talkTitle}>{talkTitle}</h4>}

      <div className={styles.cardTop}>
        {img ? (
          <img className={styles.speakerImage} src={img} alt={name} />
        ) : (
          <div className={cx(styles.speakerImage, styles.defaultImage)}></div>
        )}
        <div className={styles.speakerInfo}>
          <h3 className={styles.speakerName}>{name}</h3>
          <p className={styles.speakerDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  talkTitle: PropTypes.string,
  talkDesc: PropTypes.string,
}

Card.defaultProps = {
  img: null,
  name: null,
  description: null,
  talkTitle: null,
  talkDesc: null,
}

export default Card
