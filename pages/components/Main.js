import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Main(props) {
    return (
        <a
            href={props.link}
            className={styles.card}
          >
            <h2>{props.heading} &rarr;</h2>
            <p>
              {props.description}
            </p>
          </a>
    )
}
