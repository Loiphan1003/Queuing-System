import React from 'react';
import styles from './dashboard.module.css';
import { Dropdown, StreamChart } from '../../components';


export const Dashboard = () => {

  return (
    <div className={styles.container} >
      <div>
        <div className={styles.top} >
          <div>
            <p>Bảng thống kê theo ngày</p>
            <p>Tháng 11/2021</p>
          </div>

          <div>
            <p>Xem theo</p>
            <Dropdown
              data={["Ngày", "Tuần", "Tháng"]}
              setWidth={'106'}
              value={''}
              onClick={(value) => console.log(value)}
            />
          </div>
        </div>

        <div
          className={styles.chart}
        >
          <StreamChart />
        </div>
      </div>
    </div>
  )
}
