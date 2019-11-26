import React from 'react'

import styles from './speakers.module.css'
import Section from '../../../_ui/base-section/base-section'
import Card from '../../../_ui/card/card'
// import Button from '../../../_ui/button/button'
import azizi from '../../../../images/speakers/azizi.jpg'
import rahiche from '../../../../images/speakers/rahiche.jpg'
import baha from '../../../../images/speakers/baha.jpg'
import ezouhri from '../../../../images/speakers/ezouhri.jpg'
import abdo from '../../../../images/speakers/abdo.jpg'

const Speakers = () => {
  return (
    <Section classes={styles.speakers} id="Speakers">
      <div className={styles.speakersContent}>
        <p className="small-text">Meet our</p>
        <h1>Speakers</h1>
        {speakers.length > 0 && (
          <div className={styles.speakersCards}>
            {speakers.map((item, index) => (
              <Card {...item} key={index.toString()} />
            ))}
          </div>
        )}
        {/* <Button>SEE ALL SPEAKERS</Button> */}
      </div>
    </Section>
  )
}

const speakers = [
  {
    name: 'Abdelfettah Sghiouar',
    description: 'Cloud Engineer, Google',
    img: abdo,
    talkTitle: 'Intro to container orchestration with kubernetes',
  },
  {
    name: 'Youssouf EL Azizi',
    description: 'Software engineer, Obytes',
    img: azizi,
    talkTitle: 'Javascript: The best parts',
  },
  {
    name: 'Raouf Rahiche',
    description: 'Senior software developer, Abweb',
    img: rahiche,
    talkTitle: 'Why flutter is successful',
  },
  {
    name: 'Anas ait baha',
    description: 'Software Engineer, SQLI',
    img: baha,
    talkTitle: 'Becoming a Software Engineer',
  },
  {
    name: 'Ezouhri Maroua',
    description: 'UX & Product designer Lead, Braintest',
    img: ezouhri,
    talkTitle: 'HCI: Designing for better user experience',
  },
]

export default Speakers
