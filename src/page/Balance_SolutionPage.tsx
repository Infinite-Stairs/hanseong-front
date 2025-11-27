import styles from "./Balance_Solution.module.css";
import 발근력 from "../assets/balance_Solution/발근력.png";
import 전신정렬개선 from "../assets/balance_Solution/전신정렬개선.png";
import 종아리스트레칭 from "../assets/balance_Solution/종아리스트레칭.png";

const Balance_SolutionPage = () => {
    return (
        <>
            <div className={styles.SolutionWarrap}>
                <div className={styles.first_pic}>
                    <img src={발근력} alt="발근력사진" width={200} />
                </div>
                <div className={styles.sec_pic}>
                    <img src={전신정렬개선} alt="전신정렬사진" width={200} />
                </div>
                <div className={styles.third_pic}>
                    <img src={종아리스트레칭} alt="종아리스트래칭" width={200} />
                </div>
            </div>
        </>
    );
}

export default Balance_SolutionPage;
