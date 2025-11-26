import styles from "./FootPress.module.css";
import 오른발 from "../../assets/오른발.png";
import 왼발 from "../../assets/왼발.png";

interface FootPressProps {
  leftPct: number | null;
  rightPct: number | null;
}

const FootPress = ({ leftPct, rightPct }: FootPressProps) => {
  return (
    <div className={styles.container}>
      <h2>족저압 센서</h2>

      <div className={styles.pressContainer}>
        {leftPct !== null && (
          <div className={styles.footBox}>
            <img src={왼발} alt="왼발" className={styles.footImg} />
            <p className={styles.valueText}>{`${leftPct}%`}</p>
          </div>
        )}

        {rightPct !== null && (
          <div className={styles.footBox}>
            <img src={오른발} alt="오른발" className={styles.footImg} />
            <p className={styles.valueText}>{`${rightPct}%`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FootPress;
