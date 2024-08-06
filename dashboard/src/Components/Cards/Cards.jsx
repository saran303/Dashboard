import React from 'react'
// import TotalOrdersCard from '../TotalOrdersCard/TotalOrdersCard'
import DeliveredCard from '../DeliveredCard/DeliveredCard'
import CancelledCard from '../CancalCard/CancelledCard'
import RevenueCard from '../RevenueCard/RevenueCard'
import styles from "./Cards.module.css"
import TotalOrders from '../TotalOrders/TotalOrders'
const Cards = () => {
  return (
    <div className={styles.cardsWrapper} >
      <div className={styles.fristWrapper } >
        <TotalOrders></TotalOrders>
        <DeliveredCard></DeliveredCard>
      </div>
      <div className={styles.secWrapper}>
        <CancelledCard></CancelledCard>
        <RevenueCard></RevenueCard>
      </div>
    </div>
  )
}

export default Cards