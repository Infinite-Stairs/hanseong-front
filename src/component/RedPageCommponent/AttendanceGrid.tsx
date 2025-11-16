import React, { useState } from "react";
import styles from "./AttendanceGrid.module.css";
import { AttendanceGridDummy } from "../../data/AttendanceGridDummy";

interface DayData {
  date: string;
  stepCount: number;
}

const AttendanceGrid: React.FC = () => {
  const [hoverInfo, setHoverInfo] = useState<DayData | null>(null);
  const days = AttendanceGridDummy;

  const getColorLevel = (steps: number): string => {
    if (steps === 0) return "level0";
    if (steps < 10) return "level1";
    if (steps < 20) return "level2";
    if (steps < 40) return "level3";
    return "level4";
  };

  return (
    <div className={styles.attendanceContainer}>
      <div className={styles.attendanceGrid}>
        {days.map((day) => (
          <div
            key={day.date}
            className={`${styles.cell} ${styles[getColorLevel(day.stepCount)]}`}
            onMouseEnter={() => setHoverInfo(day)}
            onMouseLeave={() => setHoverInfo(null)}
          />
        ))}
      </div>

      {hoverInfo && (
        <div className={styles.tooltip}>
          <p>{hoverInfo.date}</p>
          <p>계단 수: {hoverInfo.stepCount}</p>
        </div>
      )}
    </div>
  );
};

export default AttendanceGrid;
