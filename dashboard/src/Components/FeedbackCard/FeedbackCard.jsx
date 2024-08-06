import React from "react";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = () => {
  return (
    <div className={styles.feedbackCard}>
      <h3>Customer's Feedback</h3>
      <div>
        <h3>Jenny Wilson</h3>
        <div>⭐⭐⭐⭐⭐</div>
        <p>
          Great location, beautiful surrounding atmosphere, great staff. Most
          friendly and helpful receptionist and staff ever, lovely and great
          first impression of hotel. Everything about the hotel was exceptional.
          It was clean, stylish, roomy with excellent service in where we had
          dinner. Food was good and great value for money and service was
          attentive and efficient. Room itself was well equipped and
          comfortable. I was very pleased with my stay. I hope to be back for a
          longer visit in the future.
        </p>
        <hr />
        <h3>Stephanie Armojs</h3>
        <div>⭐⭐⭐⭐</div>
        <p>
          Great location, beautiful surrounding atmosphere, great staff. Most
          friendly and helpful receptionist and staff ever, lovely and great
          first impression of hotel. Everything about the hotel was exceptional.
          It was clean, stylish, roomy with excellent service in where we had
          dinner. Food was good and great value for money and service was
          attentive and efficient. Room itself was well equipped and
          comfortable. I was very pleased with my stay. I hope to be back for a
          longer visit in the future.
        </p>
        <hr />
        <h3>John Snow</h3>
        <div>⭐⭐⭐⭐⭐</div>
        <p>
          Great location, beautiful surrounding atmosphere, great staff. Most
          friendly and helpful receptionist and staff ever, lovely and great
          first impression of hotel. Everything about the hotel was exceptional.
          It was clean, stylish, roomy with excellent service in where we had
          dinner. Food was good and great value for money and service was
          attentive and efficient. Room itself was well equipped and
          comfortable. I was very pleased with my stay. I hope to be back for a
          longer visit in the future.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default FeedbackCard;
