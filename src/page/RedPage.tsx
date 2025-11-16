import styles from "./RedPage.module.css";
import AttendanceGrid from "../component/RedPageCommponent/AttendanceGrid";
import Title from "../layout/Title";
import 정보섬_흐림 from "../assets/building/정보섬_흐림.png";
import 빅벤_흐림 from "../assets/building/빅벤_흐림.png";
import 남산타워_흐림 from "../assets/building/남산타워_흐림.png";
import 롯데타워_흐림 from "../assets/building/롯데타워_흐림.png";
import 칼리파_흐림 from "../assets/building/칼리파_흐림.png";
import 정보섬_밝음 from "../assets/building/정보섬_밝음.png";
import 빅벤_밝음 from "../assets/building/빅벤_밝음.png";
import 칼리파_밝음 from "../assets/building/칼리파_밝음.png";
import 남산타워_밝음 from "../assets/building/남산타워_밝음.png";
import 롯데타워_밝음 from "../assets/building/롯데타워_밝음.png";

const RedPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <div className={styles.content}>
        <AttendanceGrid />
      </div>
      <div className={styles.buildingWrapper}>
        <img
          src={빅벤_흐림}
          alt="빅벤"
          className={`${styles.buildingImage} ${styles.bigben}`}
        />
        <img
          src={칼리파_흐림}
          alt="칼리파"
          className={`${styles.buildingImage} ${styles.khalifa}`}
        />
        <img
          src={정보섬_흐림}
          alt="정보섬"
          className={`${styles.buildingImage} ${styles.infoIsland}`}
        />
        <img
          src={롯데타워_흐림}
          alt="롯데타워"
          className={`${styles.buildingImage} ${styles.lotte}`}
        />
        <img
          src={남산타워_흐림}
          alt="남산타워"
          className={`${styles.buildingImage} ${styles.namsan}`}
        />
      </div>
    </section>
  );
};

export default RedPage;