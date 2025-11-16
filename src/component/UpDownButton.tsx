import styles from "./UpDownButton.module.css";
import 빨강 from "../assets/빨강.png";
import 파랑 from "../assets/파랑.png";

type UpDownButtonProps = {
  isRedPage: boolean;
  onToggle: () => void;
};

const UpDownButton = ({ isRedPage, onToggle }: UpDownButtonProps) => {

  return (
    <>
      {isRedPage ? (
        <div
          className={styles.RedButton}
          onClick={onToggle} // 빨강 클릭 → BluePage + 파랑버튼
        >
          <img src={빨강} alt="빨강버튼" width={200} />
        </div>
      ) : (
        <div
          className={styles.BlueButton}
          onClick={onToggle} // 파랑 클릭 → RedPage + 빨강버튼
        >
          <img src={파랑} alt="파랑버튼" width={200} />
        </div>
      )}
    </>
  );
};

export default UpDownButton;
