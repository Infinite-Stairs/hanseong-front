import { useEffect, useState } from "react";
import styles from "./FootPress.module.css";
import 오른발 from "../../assets/오른발.png";
import 왼발 from "../../assets/왼발.png";
import { getMetrics } from "../../api/api";

interface Metrics {
  left_pct: number;
  right_pct: number;
}

const FootPress = () => {
  const [data, setData] = useState<Metrics | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Metrics[] = await getMetrics();

        if (res && res.length > 0) {
          const lastMetric = res[res.length - 1]; // 🔥 가장 최근 측정 데이터 1개만 가져오기
          setData(lastMetric);
        }
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchData();
    const timer = setInterval(fetchData, 2000); // 2초마다 갱신

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h2>족저압 센서</h2>

      <div className={styles.pressContainer}>
        <div className={styles.footBox}>
          <img src={왼발} alt="왼발" className={styles.footImg} />
          <p className={styles.valueText}>
            {data ? `${data.left_pct}%` : "Loading..."}
          </p>
        </div>

        <div className={styles.footBox}>
          <img src={오른발} alt="오른발" className={styles.footImg} />
          <p className={styles.valueText}>
            {data ? `${data.right_pct}%` : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FootPress;
