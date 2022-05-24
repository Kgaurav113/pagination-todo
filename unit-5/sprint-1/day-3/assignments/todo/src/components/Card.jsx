import React from "react";
import styles from "./Card.module.css"
export const Card = (props) => {
  console.log(props)
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <p>{props.data}</p>
        <div style={{backgroundColor:"black" ,height:"40px",  color:"white"}}><p>{props.heading}</p></div>
        
        <h1>{props.subheading}</h1>
        <p>{props.devices}</p>
      </div>

      <div className={styles.right}>
        <div className={styles.fir}>
          <img src={props.logo} alt="" />
        </div>

        <div className={styles.sec}>
          <img src={props.arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
