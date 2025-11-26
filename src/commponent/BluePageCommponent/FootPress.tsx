import { useEffect, useState } from "react";
import styles from "./FootPress.module.css";
import 오른발 from "../../assets/오른발.png";
import 왼발 from "../../assets/왼발.png";
import { getMetrics } from "../../api/api";

const FootPress = () => {
  const [leftPct, setLeftPct] = useState<number | null>(null);
  const [rightPct, setRightPct] = useState<number | null>(null);
  const [copX, setCopX] = useState<number | null>(null);
  const [copY, setCopY] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getMetrics(1); // GET /metrics?n=1
        const data = res[0];

        console.log(
          "족저압 데이터 받아오기 성공!",
          `왼발: ${data.left_pct}%, 오른발: ${data.right_pct}%`
        );

        console.log(
          "cop값 확인 용 로그임다",
          `cop_y: ${data.cop_y_pct}%, cop_x: ${data.cop_x_pct}%, cop_ok: ${data.cop_ok}`
        );

        setLeftPct(data.left_pct);
        setRightPct(data.right_pct);
        setCopX(data.cop_x_pct);
        setCopY(data.cop_y_pct);

      } catch (err) {
        console.error("족저압 데이터를 불러오지 못했습니다.", err);
      }
    }

    fetchData();
  }, []);

  if (leftPct === null || rightPct === null) {
    return <div>Loading...</div>;
  }

  const isRightDominant = rightPct > leftPct;

  return (
    <>
      {isRightDominant ? (
        <div className={styles.right}>
          <img src={오른발} alt="오른발" />
          <p>{rightPct}%</p>
        </div>
      ) : (
        <div className={styles.left}>
          <img src={왼발} alt="왼발" />
          <p>{leftPct}%</p>
        </div>
      )}
    </>
  );
};

export default FootPress;
