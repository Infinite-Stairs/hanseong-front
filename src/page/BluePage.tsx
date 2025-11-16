import { useState } from "react";
import styles from "./BluePage.module.css";
import Healthcare from "../component/BluePageCommponent/Healthcare";
import FootPress from "../component/BluePageCommponent/FootPress";
import Title from "../layout/Title";

const BluePage = () => {
  const [backendData] = useState({
    isScoliosisRisk: true,
    isFootPressureBalanced: true,
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

        {/* 오른쪽: 퍼스널 헬스 케어 데이터 */}
        <div className={styles.rightPanel}>
          <div className={styles.rightTitle}>퍼스널 헬스 케어 데이터</div>
          <div className={styles.card}>
            <Healthcare isRisk={backendData.isScoliosisRisk} />
            <div className={styles.cardButtons}>
              <button className={styles.actionButton}>해결책 보러가기</button>
              <button className={styles.actionButton}>해결책 보러가기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BluePage;