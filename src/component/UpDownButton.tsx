import { useState } from "react";
import styles from "./UpDownButton.module.css";
import 빨강 from "../assets/빨강.png";
import 파랑 from "../assets/파랑.png";

const UpDownButton = () => {
  const [showRed, setShowRed] = useState(true);

  return (
    <>
      {showRed ? (
        <div
          className={styles.RedButton}
          onClick={() => setShowRed(false)} // 빨강 클릭 → 파랑만 보임
        >
          <img src={빨강} alt="빨강버튼" width={200} />
        </div>
      ) : (
        <div
          className={styles.BlueButton}
          onClick={() => setShowRed(true)}  // 파랑 클릭 → 빨강만 보임
        >
          <img src={파랑} alt="파랑버튼" width={200} />
        </div>
      )}
    </>
  );
};

export default UpDownButton;
