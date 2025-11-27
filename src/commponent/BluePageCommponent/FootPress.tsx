import styles from "./FootPress.module.css";
import 오른발 from "../../assets/오른발.png";
import 왼발 from "../../assets/왼발.png";
import 정상발 from "../../assets/정상발.png";

interface FootPressProps {
  leftPct: number | null;
  rightPct: number | null;
}

const FootPress = ({ leftPct, rightPct }: FootPressProps) => {
  console.log(`❤️족저압 들어온다~~❤️ 왼발:${leftPct}%, 오른발: ${rightPct}% `);

  const hasBoth = leftPct !== null && rightPct !== null;

  let showLeft = false;
  let showRight = false;
  let shownormal = false;

  if (hasBoth) {
    const total = leftPct + rightPct;
    const leftRatio = leftPct / total;
    const rightRatio = rightPct / total;

    showLeft = leftRatio >= 0.6;
    showRight = rightRatio >= 0.6;
    shownormal = !showLeft && !showRight;
  }

  return (
    <div className={styles.container}>
      <div className={styles.pressContainer}>

        {shownormal && (
          <div className={styles.footBox}>
            <img src={정상발} alt="정상발" className={styles.footImg} />
            <p className={styles.valueText}>{leftPct!.toFixed(2)}%</p>
            <p className={styles.valueText}>{rightPct!.toFixed(2)}%</p>
          </div>
        )}

        {showLeft && (
          <div className={styles.footBox}>
            <img src={왼발} alt="왼발" className={styles.footImg} />
            <p className={styles.valueText}>{leftPct!.toFixed(2)}%</p>
            <p className={styles.valueText}>{rightPct!.toFixed(2)}%</p>
          </div>
        )}

        {showRight && (
          <div className={styles.footBox}>
            <img src={오른발} alt="오른발" className={styles.footImg} />
            <p className={styles.valueText}>{leftPct!.toFixed(2)}%</p>
            <p className={styles.valueText}>{rightPct!.toFixed(2)}%</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default FootPress;
