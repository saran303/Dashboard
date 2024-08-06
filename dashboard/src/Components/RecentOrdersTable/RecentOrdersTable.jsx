import React from "react";
import styles from "./RecentOrdersTable.module.css"
const RecentOrdersTable = () => {
  return (
    <div className={styles.tableWrapper}>
        <h3>Recent Orders</h3>
      <table>
        <tr>
          <th>Customer</th>
          <th>Order No</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Maria Anders</td>
          <td>4567</td>
          <td>$125.00</td>
          <td><button className={styles.btnGreen}>Delivered</button></td>
        </tr>
        <tr>
          <td>Christina Berglund</td>
          <td>1587</td>
          <td>$148.88</td>
          <td><button className={styles.btnRed}>Cancelled</button></td>
        </tr>
        <tr>
          <td>Francisco Chang</td>
          <td>1757</td>
          <td>$324.56</td>
          <td><button className={styles.btnGreen}>Delivered</button></td>
        </tr>
        <tr>
          <td>Roland Mendel</td>
          <td>1538</td>
          <td>$425.23</td>
          <td><button className={styles.btnRed}>Cancelled</button></td>
        </tr>
        <tr>
          <td>Helen Bennett</td>
          <td>4562</td>
          <td>$156.87</td>
          <td><button className={styles.btnGreen}>Delivered</button></td>
        </tr>
        <tr>
          <td>Philip Cramer</td>
          <td>1586</td>
          <td>$214.35</td>
          <td><button className={styles.btnGreen}>Delivered</button></td>
        </tr>
      </table>
    </div>
  );
};

export default RecentOrdersTable;
