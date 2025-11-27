import styles from "./Cop_SolutionPage.module.css";
import 고양이_낙타자세 from "../assets/Cop_Solution/고양이_낙타자세.png";
import 버드독운동  from "../assets/Cop_Solution/버드독운동.png";
import 브릿지 from "../assets/Cop_Solution/브릿지.png";
import 앉기자세 from "../assets/Cop_Solution/앉기자세.png";

const Cop_SolutionPage = () => {
    return(
<>
<div className={styles.SolutionWarrap}>
        <div className={styles.first_pic}>
            <img src={고양이_낙타자세} alt="고양이낙타자세" width={200} />
        </div>
        <div className={styles.sec_pic}>
            <img src={버드독운동} alt="버드독운동" width={200} />
        </div>
        <div className={styles.third_pic}>
            <img src={브릿지} alt="브릿지" width={200} />
        </div>
        <div className={styles.forth_pic}>
            <img src={앉기자세} alt="브릿지" width={200} />
        </div>
</div>
</>
    );
}

export default Cop_SolutionPage;