import React from "react";
import Card from "@mui/material/Card";
import styles from "./ProfitCard.module.css"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import chart from "../../assets/Chart.png"
const ProfitCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profitWrapper}>
        <div >
          <p className={styles.para}>Net Profit</p>
          <div className={styles.count}>$6759.25</div>
          <div className={styles.percentageUp}>
            <ArrowDropUpIcon></ArrowDropUpIcon>
            3%
          </div>
        </div>
        <div className={styles.profitChartWrapper}>
          <img src={chart} alt="Chart" className={styles.imgChart} />
          <p className={styles.para}>*The value had been rounded off.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;
