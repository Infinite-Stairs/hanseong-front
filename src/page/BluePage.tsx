import { useState, useEffect } from "react";
import styles from "./BluePage.module.css";
import Healthcare from "../commponent/BluePageCommponent/Healthcare";
import FootPress from "../commponent/BluePageCommponent/FootPress";
import Title from "../layout/Title";
import BuildingGrid from "../commponent/RedPageCommponent/BuildingGrid";
import { getMetrics } from "../api/api";

const BluePage = () => {
  const [backendData, setBackendData] = useState({
    isScoliosisRisk: false,
    isFootPressureBalanced: false,
  });

  const [leftPct, setLeftPct] = useState<number | null>(null);
  const [rightPct, setRightPct] = useState<number | null>(null);

  // 최신 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const metrics = await getMetrics(1); // 최신 1개
        const latest = metrics[0];

        if (!latest) return;

        setLeftPct(latest.left_pct);
        setRightPct(latest.right_pct);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchData();
    const timer = setInterval(fetchData, 2000); // 2초마다 갱신

    return () => clearInterval(timer);
  }, []);

  // 퍼센트 값 변경될 때 Boolean 자동 계산
  useEffect(() => {
    if (leftPct === null || rightPct === null) return;

    const total = leftPct + rightPct;
    const leftRatio = leftPct / total;
    const rightRatio = rightPct / total;

    // 60% : 40% 이상이면 true
    const scoliosisRisk = leftRatio >= 0.6 || rightRatio >= 0.6;

    // 오른쪽 퍼센트가 더 크면 true
    const footBalanced = rightPct > leftPct;

    setBackendData({
      isScoliosisRisk: scoliosisRisk,
      isFootPressureBalanced: footBalanced,
    });
  }, [leftPct, rightPct]);

  return (
    <section className={styles.wrapper}>
      <Title />

      <div className={styles.contentWrapper}>
        <div className={styles.leftPanel}>
          <div className={styles.leftTitle}>족저압 정보</div>
          <FootPress leftPct={leftPct} rightPct={rightPct} />
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightTitle}>퍼스널 헬스 케어 데이터</div>
          <div className={styles.card}>
            <Healthcare isRisk={backendData.isScoliosisRisk} />
          </div>
        </div>

        <div className={styles.blue_building}>
          <BuildingGrid disableHover />
        </div>
      </div>
    </section>
  );
};

export default BluePage;
