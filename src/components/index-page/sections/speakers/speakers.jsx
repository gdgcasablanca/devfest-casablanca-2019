import React from 'react'

import styles from './speakers.module.css'
import Section from '../../../_ui/base-section/base-section'
import Card from '../../../_ui/card/card'
// import Button from '../../../_ui/button/button'
import willSmith from '../../../../images/will-smith.jpg'

const Speakers = () => {
  return (
    <Section classes={styles.speakers} id="Speakers">
      <div className={styles.speakersContent}>
        <p className="small-text">What is DevFest?</p>
        <h1>Speakers</h1>
        <p className="p">Some word about speakers</p>
        <div className={styles.speakersCards}>
          {speakers.map((item, index) => (
            <Card {...item} key={index.toString()} />
          ))}
        </div>
        {/* <Button>SEE ALL SPEAKERS</Button> */}
      </div>
    </Section>
  )
}

const speakers = [
  {
    name: 'Will Smith',
    description: 'Product Designer, Google',
    // img: willSmith,
    talkTitle: 'Introductions to hulu',
    talkDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates, earum autem nemo minima debitis, numquam labore, cum quis enim laborum nesciunt recusandae quidem? Distinctio doloremque similique recusandae nihil eum.',
  },
  {
    name: 'Will Smith',
    description: 'Product Designer, Google',
    img: willSmith,
    talkTitle: 'Introductions to hulu',
    talkDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates, earum autem nemo minima debitis, numquam labore, cum quis enim laborum nesciunt recusandae quidem? Distinctio doloremque similique recusandae nihil eum.',
  },
  {
    name: 'Will Smith',
    description: 'Product Designer, Google',
    img: willSmith,
    talkTitle: 'Introductions to hulu',
    talkDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates, earum autem nemo minima debitis, numquam labore, cum quis enim laborum nesciunt recusandae quidem? Distinctio doloremque similique recusandae nihil eum.',
  },
  {
    name: 'Will Smith',
    description: 'Product Designer, Google',
    img: willSmith,
    talkTitle: 'Introductions to hulu',
    talkDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates, earum autem nemo minima debitis, numquam labore, cum quis enim laborum nesciunt recusandae quidem? Distinctio doloremque similique recusandae nihil eum.',
  },
  {
    name: 'Will Smith',
    description: 'Product Designer, Google',
    img: willSmith,
    talkTitle: 'Introductions to hulu',
    talkDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates, earum autem nemo minima debitis, numquam labore, cum quis enim laborum nesciunt recusandae quidem? Distinctio doloremque similique recusandae nihil eum.',
  },
  {
    name: 'Will Smith',
    description: 'Product Designer, Google',
    img: willSmith,
    talkTitle: 'Introductions to hulu',
    talkDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates, earum autem nemo minima debitis, numquam labore, cum quis enim laborum nesciunt recusandae quidem? Distinctio doloremque similique recusandae nihil eum.',
  },
]

export default Speakers
