import styles from "./FootPress.module.css";
import 오른발 from "../../assets/오른발.png";
import 왼발 from "../../assets/왼발.png";

interface FootPressProps {
  leftPct: number | null;
  rightPct: number | null;
}

const FootPress = ({ leftPct, rightPct }: FootPressProps) => {
  const showLeft =
    leftPct !== null && (rightPct === null || leftPct >= rightPct);
  const showRight =
    rightPct !== null && (leftPct === null || rightPct > leftPct);

  return (
    <div className={styles.container}>
      <div className={styles.pressContainer}>
        {showLeft && (
          <div className={styles.footBox}>
            <img src={왼발} alt="왼발" className={styles.footImg} />
            <p className={styles.valueText}>{`${leftPct!}%`}</p>
          </div>
        )}

        {showRight && (
          <div className={styles.footBox}>
            <img src={오른발} alt="오른발" className={styles.footImg} />
            <p className={styles.valueText}>{`${rightPct!}%`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FootPress;
