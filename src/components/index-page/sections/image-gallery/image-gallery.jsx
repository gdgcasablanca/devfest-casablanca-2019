import React from 'react'
import cx from 'classnames'

import Section from '../../../_ui/base-section/base-section'
import styles from './image-gallery.module.css'
import Button from '../../../_ui/button/button'
import Link from '../../../_ui/link/link'

import image01 from '../../../../images/gallery/001.jpg'
import image02 from '../../../../images/gallery/002.jpg'
import image03 from '../../../../images/gallery/003.jpg'
import image04 from '../../../../images/gallery/004.jpg'
import image05 from '../../../../images/gallery/005.jpg'
import image06 from '../../../../images/gallery/006.jpg'

const ImageGallery = () => {
  return (
    <Section>
      <div className={styles.imageGrid}>
        <div className={cx(styles.gridItem, styles.imageItem)}>
          <img src={image01} alt="DevFest 18 Casablanca 01" />
        </div>
        <div className={cx(styles.gridItem, styles.imageItem)}>
          <img src={image02} alt="DevFest 18 Casablanca 02" />
        </div>
        <div className={cx(styles.gridItem, styles.imageItem)}>
          <img src={image03} alt="DevFest 18 Casablanca 03" />
        </div>
        <div className={cx(styles.gridItem, styles.hightlights)}>
          <h3>#DevFest18 highlights</h3>
          <p>
            Such a great experience in DevFest Casablanca 18, check these
            photos.
          </p>
          <Button
            As={Link}
            href="https://www.facebook.com/pg/GDGCasa/photos/?tab=album&album_id=1783325218446576"
            target="_blank"
            color="white"
          >
            SEE ALL PHOTOS
          </Button>
        </div>
        <div className={cx(styles.gridItem, styles.imageItem)}>
          <img src={image04} alt="DevFest 18 Casablanca 04" />
        </div>
        <div className={cx(styles.gridItem, styles.imageItem)}>
          <img src={image05} alt="DevFest 18 Casablanca 05" />
        </div>
        <div className={cx(styles.gridItem, styles.imageItem)}>
          <img src={image06} alt="DevFest 18 Casablanca 06" />
        </div>
      </div>
    </Section>
  )
}

export default ImageGallery
