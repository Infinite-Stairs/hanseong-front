import styles from "./RedPage.module.css";
import AttendanceGrid from "../component/RedPageCommponent/AttendanceGrid";
import Title from "../layout/Title";

const RedPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <div className={styles.content}>
        <AttendanceGrid />
      </div>
    </section>
  );
};

export default RedPage;