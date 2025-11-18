import styles from "./RedPage.module.css";
import AttendanceGrid from "../commponent/RedPageCommponent/AttendanceGrid";
import BuildingGrid from "../commponent/RedPageCommponent/BuildingGrid";
import Title from "../layout/Title";
import GameComponent from "../commponent/GameComponent";

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