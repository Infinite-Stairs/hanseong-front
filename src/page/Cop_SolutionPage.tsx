import { useNavigate } from "react-router-dom";
import styles from "./Cop_SolutionPage.module.css";
import 고양이_낙타자세 from "../assets/Cop_Solution/고양이_낙타자세.png";
import 버드독운동  from "../assets/Cop_Solution/버드독운동.png";
import 브릿지 from "../assets/Cop_Solution/브릿지.png";
import 앉기자세 from "../assets/Cop_Solution/앉기자세.png";

const Cop_SolutionPage = () => {
    const navigate = useNavigate();

    return(
<>
<div className={styles.wrapper}>
    <button className={`${styles.backButton} joystick-focus`} onClick={() => navigate("/")}>
        ← 뒤로가기
    </button>
<div className={styles.SolutionWarrap}>
        <div className={styles.solutionItem}>
            <img src={고양이_낙타자세} alt="고양이낙타자세" width={320} />
            <div className={styles.textContent}>
                <p className={styles.title}>
                    1. 척추 안정화
                </p>
                <p className={styles.inner}>
                    → 척추 기립근 및 코어 강화 <br/>
                    네 발 기기 자세에서 오른팔과 왼 다리, 왼팔과 오른 다리를 번갈아 수평이 되게 쭉 뻗어 척추가 흔들리지 않게 코어를 잡습니다.
                </p>
            </div>
        </div>
        <div className={styles.solutionItem}>
            <img src={버드독운동} alt="버드독운동" width={320} />
            <div className={styles.textContent}>
                <p className={styles.inner}>
                    등을 둥글게 말아 올렸다가(고양이) 허리를 아래로 내려 아치를 만드는(낙타) 동작을 반복하여 척추의 유연성을 높입니다. 
                </p>
            </div>
        </div>
        <div className={styles.solutionItem}>
            <img src={브릿지} alt="브릿지" width={320} />
            <div className={styles.textContent}>
                <p className={styles.title}>
                    2.골반/둔근 강화
                </p>
                <p className={styles.inner}>
                    누워서 무릎을 세우고 엉덩이에 힘을 주어 골반을 들어 올립니다. 이때 골반이 좌우로 기울어지지 않도록 복부에 힘을 주고 수평을 유지합니다.
                </p>
            </div>
        </div>
        <div className={styles.solutionItem}>
            <img src={앉기자세} alt="앉기자세" width={320} />
            <div className={styles.textContent}>
                <p className={styles.title}>
                    3. 생활 습관
                </p>
                <p className={styles.inner}>
                    → 일상 자세 교정 <br/>
                    앉을 때 엉덩이를 의자 깊숙이 넣고 허리 뒤에 수건이나 쿠션을 받쳐서 허리의 자연스러운 C자 곡선을 유지합니다.
                </p>
            </div>
        </div>
</div>
</div>
</>
    );
}

export default Cop_SolutionPage;