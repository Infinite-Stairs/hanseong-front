import { useNavigate } from "react-router-dom";
import styles from "./Balance_Solution.module.css";
import 발근력 from "../assets/balance_Solution/발근력.png";
import 전신정렬개선 from "../assets/balance_Solution/전신정렬개선.png";
import 종아리스트레칭 from "../assets/balance_Solution/종아리스트레칭.png";

const Balance_SolutionPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapper}>
                <button className={`${styles.backButton} joystick-focus`} onClick={() => navigate("/")}>
                    ← 뒤로가기
                </button>
                <div className={styles.SolutionWarrap}>
                <div className={styles.solutionItem}>
                    <img src={발근력} alt="발근력사진" width={350} />
                    <div className={styles.textContent}>
                        <p className={styles.title}> 
                            1. 발 근력 강화 
                        </p>
                        <p className={styles.inner}>
                            → 발과 발목 안정화<br/>
                            : 수건 집기 운동 → 바닥애 수건을 깔고 발가락으로 수건을 끌어당겨 쥐는 동작 반복
                        </p>
                    </div>
                </div>
                <div className={styles.solutionItem}>
                    <img src={전신정렬개선} alt="전신정렬사진" width={350} />
                    <div className={styles.textContent}>
                        <p className={styles.title}>
                            2. 종아리 스트레칭
                        </p>
                        <p className={styles.inner}>
                            → 아킬레스건 및 종아리 근육 이완<br/>
                            : 벽 밀기 스트레칭 → 벽을 짚고 한 발을 뒤로 뻗어 뒤쪽 다리의 종아리가 당겨지도록 스트레칭
                        </p>
                    </div>
                </div>
                <div className={styles.solutionItem}>
                    <img src={종아리스트레칭} alt="종아리스트래칭" width={350} />
                    <div className={styles.textContent}>
                        <p className={styles.title}>
                            3. 균형 및 코어 강화
                        </p>
                        <p className={styles.inner}>
                            → 전신 정렬 개선 <br/>
                            : 외발 서기 운동 → 눈을 뜨거나 감고 한 발로 서서 균형을 잡음(불균형 방향 발을 더 많이 사용)
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Balance_SolutionPage;
