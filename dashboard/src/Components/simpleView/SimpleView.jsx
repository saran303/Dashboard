import React from "react";
import Card from "@mui/material/Card";
import styles from "./SimpleView.module.css";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LightIcon from '@mui/icons-material/Light';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const ProfitCard = () => {
  return (
    <Card
      className={styles.wrapper}
      sx={{
        // maxWidth: 500,
        backgroundColor: "#21253d",
        color: "white",
        m: 2,
        mr:3,
        p: 2,
        // pt:0,
      }}
    >
      <div className={styles.simpleWrapper}>
        <div className={styles.symbolTextWrapper}>
          <div className={styles.symbolWrapper}>
            <MyLocationIcon sx={{ color: "rgb(227, 13, 13)" }}></MyLocationIcon>
          </div>
          <h3 className={styles.nameStyle}>Goal</h3>
        </div>
        <div className={styles.arrowWrapper}> 
          <NavigateNextIcon></NavigateNextIcon>
        </div>
      </div>
      <div className={styles.simpleWrapper}>
        <div className={styles.symbolTextWrapper}>
          <div className={styles.foodWrapper}>
            <LunchDiningIcon sx={{ color: "rgb(36, 16, 216)" }}></LunchDiningIcon>
          </div>
          <h3 className={styles.nameStyle}>Popular Dishes</h3>
        </div>
        <div className={styles.arrowWrapper}> 
          <NavigateNextIcon></NavigateNextIcon>
        </div>
      </div>
      <div className={styles.simpleWrapper}>
        <div className={styles.symbolTextWrapper}>
          <div className={styles.menusWrapper}>
            <LightIcon sx={{ color: "rgb(13, 234, 164)" }}></LightIcon>
          </div>
          <h3 className={styles.nameStyle}>Menus</h3>
        </div>
        <div className={styles.arrowWrapper}> 
          <NavigateNextIcon></NavigateNextIcon>
        </div>
      </div>
    </Card>
  );
};

export default ProfitCard;
