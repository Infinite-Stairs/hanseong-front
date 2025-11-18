import styles from "./RedPage.module.css";
import AttendanceGrid from "../component/RedPageCommponent/AttendanceGrid";
import BuildingGrid from "../component/RedPageCommponent/BuildingGrid";
import Title from "../layout/Title";
import GameComponent from "../component/GameComponent";

const RedPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <div className={styles.BackToGame}>
        <GameComponent />
      </div>
      <div className={styles.content}>
        <AttendanceGrid />
      </div>
      <BuildingGrid />
    </section>
  );
};

export default RedPage;