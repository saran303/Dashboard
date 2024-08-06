import React from 'react'
import styles from "./Activity.module.css"

const Activity = () => {
  return (
    <div className={styles.activityWrapper}>
        <h3>Activity</h3>
        <form action="/action_page.php" >
        <select id="cars" name="cars" className={styles.dropdown}>
            <option value="volvo">Weekely</option>
            <option value="saab">Monthly</option>
            <option value="fiat">Yearly</option>
            <option value="audi">Daily</option>
        </select>
        </form>
    </div>
  )
}

export default Activity