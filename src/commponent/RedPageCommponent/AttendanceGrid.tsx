import React, { useEffect, useState } from "react";
import styles from "./AttendanceGrid.module.css";
import { getDailyStats } from "../../api/api";

interface DayData {
  date: string;
  stepCount: number;
}

const AttendanceGrid: React.FC = () => {
  const [days, setDays] = useState<DayData[]>([]);
  const [hoverInfo, setHoverInfo] = useState<DayData | null>(null);

  const getColorLevel = (steps: number): string => {
    if (steps === 0) return "level0";
    if (steps < 100) return "level1";
    if (steps < 200) return "level2";
    if (steps < 400) return "level3";
    return "level4";
  };

  // 최근 30일 날짜 생성 함수
  const getRecentDates = (): string[] => {
    const dates: string[] = [];
    const today = new Date();

    for (let i = 0; i < 21; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);

      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");

      dates.push(`${year}-${month}-${day}`);
    }

    return dates.reverse(); // 오래된 날짜 → 최근 날짜
  };

  useEffect(() => {
    const fetchAll = async () => {
      const dateList = getRecentDates();
      const result: DayData[] = [];

      for (const date of dateList) {
        try {
          const data = await getDailyStats<{
            date: string;
            total_steps: number;
            total_calories: number;
          }>(date);

          result.push({
            date: data.date,
            stepCount: data.total_steps,
          });
        } catch (err) {
          // 데이터를 못 받아오면 0으로 처리
          console.error("스트릭 정보를 받아오지 못했음..ㅜㅜ",err)
          result.push({ date, stepCount: 0 });
        }
      }

      setDays(result);
    };

    fetchAll();
  }, []);

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
