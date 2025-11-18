import styles from "./FootPress.module.css";
import 오른발 from "../../assets/오른발.png";
import 왼발 from "../../assets/왼발.png";

interface FootPressProps {
  isBalanced: boolean;
}

const FootPress = ({ isBalanced }: FootPressProps) => {
  return (
    <>
      {isBalanced ? (
          <div className={styles.right}>
            <img src={오른발} alt="오른발"></img>
          </div>
      ) : (
          <div className={styles.left}>
            <img src={왼발} alt="왼발"></img>
          </div>
      )}
    </>
  );
};

export default FootPress;