import React from 'react'
import house from '../../assets/house.jpg'
import bedroom from '../../assets/bedroom.jpg'
import apartment from '../../assets/apartment.jpg'
import styles from './filterBar.module.css'

export default function () {
  
  return (
    <div className={styles.filterBar}>
          <button className={styles.filter}>
          <img src={house} alt='house'/>
          <p>House</p>
          <div className={styles.line}/>
          </button>
          <button className={styles.filter}>
          <img src={bedroom} alt='bedroom'></img>
          <p>Bedroom</p>
          <div className={styles.line}/>
          </button>
          <button className={styles.filter}>
          <img src={apartment} alt='apartment'></img>
          <p>Apartment</p>
          <div className={styles.line}/>
          </button>
        
    </div>
  )
}
