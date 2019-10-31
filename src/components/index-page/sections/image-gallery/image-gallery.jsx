import React from 'react'
import cx from 'classnames'

import Section from '../../../_ui/base-section/base-section'
import styles from './image-gallery.module.css'
import Button from '../../../_ui/button/button'

const ImageGallery = () => {
  return (
    <Section>
      <div className={styles.imageGrid}>
        <div className={styles.imageItem}></div>
        <div className={styles.imageItem}></div>
        <div className={styles.imageItem}></div>
        <div className={cx(styles.imageItem, styles.hightlights)}>
          <h3>#DevFest18 highlights</h3>
          <p>
            Such a great experience in DevFest Casablanca 18, check these
            photos.
          </p>
          <Button color="white">SEE ALL PHOTOS</Button>
        </div>
        <div className={styles.imageItem}></div>
        <div className={styles.imageItem}></div>
        <div className={styles.imageItem}></div>
      </div>
    </Section>
  )
}

export default ImageGallery
