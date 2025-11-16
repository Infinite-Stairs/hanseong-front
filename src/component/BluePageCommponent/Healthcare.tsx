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
        <section className={styles.IstnotOk}>
          <div className={styles.notokleft}>

          </div>
          <div className={styles.notokright}>
            <h3>척추측만증 위험군입니다.</h3>
            <img src={아픔} alt="아픔"></img>
          </div>
        </section>
      ) : (
        <section className={styles.ItsOk}>
          <div className={styles.okleft}>
            <h3>좌우벨런스가 알맞습니다.</h3>
            <img src={폭죽} alt="폭죽"></img>
          </div>
          <div className={styles.okright}>
            <h3>척추측만증 위험군이 아닙니다.</h3>
            <img src={안아픔} alt="안아픔"></img>
          </div>
        </section>
      )}
    </>
  );
};

export default Healthcare;