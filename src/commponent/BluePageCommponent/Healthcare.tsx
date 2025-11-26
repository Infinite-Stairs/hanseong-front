import { Link } from "react-router-dom";
import styles from "./Healthcare.module.css";
import 안아픔 from "../../assets/안아픔.png";
import 폭죽 from "../../assets/폭죽.png";
import 아픔 from "../../assets/아픔.png";

interface HealthcareProps {
  isRisk: boolean;
}

const Healthcare = ({ isRisk }: HealthcareProps) => {
  return (
    <>
      {isRisk ? (
        <section className={styles.IsnotOk}>
          <div className={styles.contentRow}>
            <div className={styles.notokleft}>
              <div className={styles.explain_text}>
                [직접적 영향] <br />
                1. 족저근막염 및 발 통증 <br />
                2. 발목 불안정성<br />
                3. 발바닥 과도한 굳은살/티눈<br />
                <br />
                [간접적 영향] <br />
                1. 무릎/고관절 통증 <br />
                2. 골반 기울어짐 → 좌/우 하강 <br />
                3. 척추 측만증 유발 또는 악화<br />
              </div>
            </div>

            <div className={styles.notokright}>
              <h3>척추측만증 위험군입니다.</h3>
              <img src={아픔} alt="아픔" />
            </div>
          </div>

          <div className={styles.cardButtons}>
            <Link
              to="/Balance_SolutionPage"
              className={`${styles.actionButton_left} joystick-focus`}
            >
              해결책 보러가기
            </Link>

            <Link
              to="/Cop_SolutionPage"
              className={`${styles.actionButton_right} joystick-focus`}
            >
              해결책 보러가기
            </Link>
          </div>
        </section>
      ) : (
        <section className={styles.ItsOk}>
          <div className={styles.okleft}>
            <h3>좌우벨런스가 <br />알맞습니다.</h3>
            <img src={폭죽} alt="폭죽" />
          </div>

          <div className={styles.okright}>
            <h3>척추측만증 위험군이 <br /> 아닙니다.</h3>
            <img src={안아픔} alt="안아픔" />
          </div>
        </section>
      )}
    </>
  );
};

export default Healthcare;
