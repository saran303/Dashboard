import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./DeliveredCard.module.css";
const DeliveredCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bag-check-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
          />
        </svg>
      </div>
      <p className={styles.para}>Total Delivered</p>
      <div className={styles.cardBottomWrapper}>
        <div className={styles.count}>70</div>
        <div className={styles.percentageUp}>
          <ArrowDropDownIcon></ArrowDropDownIcon>
          3%
        </div>
      </div>
    </div>
  );
};

export default DeliveredCard;
