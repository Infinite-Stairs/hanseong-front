import { useEffect, useState } from "react";
import styles from "./BuildingGrid.module.css";

import 정보섬_흐림 from "../../assets/building/정보섬_흐림.png";
import 빅벤_흐림 from "../../assets/building/빅벤_흐림.png";
import 남산타워_흐림 from "../../assets/building/남산타워_흐림.png";
import 롯데타워_흐림 from "../../assets/building/롯데타워_흐림.png";
import 칼리파_흐림 from "../../assets/building/칼리파_흐림.png";

import 정보섬_밝음 from "../../assets/building/정보섬_밝음.png";
import 빅벤_밝음 from "../../assets/building/빅벤_밝음.png";
import 칼리파_밝음 from "../../assets/building/칼리파_밝음.png";
import 남산타워_밝음 from "../../assets/building/남산타워_밝음.png";
import 롯데타워_밝음 from "../../assets/building/롯데타워_밝음.png";

import { getTotalSteps } from "../../api/api";

const BuildingGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [totalSteps, setTotalSteps] = useState<number>(0);

  // 오늘 날짜로 total_steps 불러오기
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    getTotalSteps(today)
      .then((steps) => setTotalSteps(steps))
      .catch((err) => console.error(err));
  }, []);

  // 건물 리스트
  const buildings = [
    { id: "infoIsland", name: "정보섬", dark: 정보섬_흐림, bright: 정보섬_밝음, required: 1000, className: styles.infoIsland },
    { id: "bigben", name: "빅벤", dark: 빅벤_흐림, bright: 빅벤_밝음, required: 2000, className: styles.bigben },
    { id: "khalifa", name: "칼리파", dark: 칼리파_흐림, bright: 칼리파_밝음, required: 3000, className: styles.khalifa },
    { id: "lotte", name: "롯데타워", dark: 롯데타워_흐림, bright: 롯데타워_밝음, required: 4000, className: styles.lotte },
    { id: "namsan", name: "남산타워", dark: 남산타워_흐림, bright: 남산타워_밝음, required: 5000, className: styles.namsan },
  ];

  const getPercentage = (requiredSteps: number) => {
    return Math.min(100, Math.floor((totalSteps / requiredSteps) * 100));
  };

  return (
    <div className={styles.buildingWrapper}>
      {buildings.map((b) => {
        const isHovered = hoveredId === b.id;
        const percentage = getPercentage(b.required);

        return (
          <div
            key={b.id}
            className={`${styles.buildingContainer} ${b.className}`}
            onMouseEnter={() => setHoveredId(b.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={isHovered ? b.bright : b.dark}
              alt={b.name}
              className={styles.buildingImage}
            />

            {isHovered && (
              <div className={styles.tooltip}>
                <p>{b.name}</p>
                <p>{percentage} %</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BuildingGrid;
