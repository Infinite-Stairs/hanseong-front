import { useState } from "react";
import styles from "./BluePage.module.css";
import Healthcare from "../commponent/BluePageCommponent/Healthcare";
import FootPress from "../commponent/BluePageCommponent/FootPress";
import Title from "../layout/Title";
import BuildingGrid from "../commponent/RedPageCommponent/BuildingGrid";

const BluePage = () => {
  const [backendData] = useState({
    isScoliosisRisk: true,
    isFootPressureBalanced: false,
  });

  return (
    <section className={styles.wrapper}>
<Title />

      <div className={styles.contentWrapper}>
        {/* 왼쪽: 족저압 정보 */}
        <div className={styles.leftPanel}>
          <div className={styles.leftTitle}>족저압 정보</div>
          <FootPress isBalanced={backendData.isFootPressureBalanced} />
        </div>

        {/* 오른쪽: 헬스 케어 정보 */}
        <div className={styles.rightPanel}>
          <div className={styles.rightTitle}>퍼스널 헬스 케어 데이터</div>
          <div className={styles.card}>
            <Healthcare isRisk={backendData.isScoliosisRisk} />
          </div>
        </div>
        <div className={styles.blue_building}>
            <BuildingGrid/>
        </div>
      </div>
    </section>
  );
};

export default BluePage;