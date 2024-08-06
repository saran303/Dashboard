import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./RevenueCard.module.css";
import RevenueImg from "../../assets/Revenue.svg"
const RevenueCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img src={RevenueImg} alt="Img" />
      </div>
      <p className={styles.para}>Total Revenue</p>
      <div className={styles.cardBottomWrapper}>
        <div className={styles.count}>$2k</div>
        <div className={styles.percentageUp}>
          <ArrowDropDownIcon></ArrowDropDownIcon>
          3%
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
