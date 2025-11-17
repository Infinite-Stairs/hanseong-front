import { useState } from "react";
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
import { BuildingDummy } from "../../data/BuildingDummy";
import type { BuildingData } from "../../data/BuildingDummy";

const BuildingGrid = () => {
  const [hoveredBuilding, setHoveredBuilding] = useState<BuildingData | null>(null);

  const buildings = [
    { id: "bigben", name: "빅벤", dark: 빅벤_흐림, bright: 빅벤_밝음, className: styles.bigben },
    { id: "khalifa", name: "칼리파", dark: 칼리파_흐림, bright: 칼리파_밝음, className: styles.khalifa },
    { id: "infoIsland", name: "정보섬", dark: 정보섬_흐림, bright: 정보섬_밝음, className: styles.infoIsland },
    { id: "lotte", name: "롯데타워", dark: 롯데타워_흐림, bright: 롯데타워_밝음, className: styles.lotte },
    { id: "namsan", name: "남산타워", dark: 남산타워_흐림, bright: 남산타워_밝음, className: styles.namsan },
  ];

  const getBuildingData = (id: string): BuildingData | undefined => {
    return BuildingDummy.find((building) => building.id === id);
  };

  return (
    <div className={styles.buildingWrapper}>
      {buildings.map((building) => {
        const isHovered = hoveredBuilding?.id === building.id;
        const buildingData = getBuildingData(building.id);
        
        return (
          <div
            key={building.id}
            className={`${styles.buildingContainer} ${building.className}`}
            onMouseEnter={() => {
              const data = getBuildingData(building.id);
              if (data) setHoveredBuilding(data);
            }}
            onMouseLeave={() => setHoveredBuilding(null)}
          >
            <img
              src={isHovered ? building.bright : building.dark}
              alt={building.name}
              className={styles.buildingImage}
            />
            {isHovered && buildingData && (
              <div className={styles.tooltip}>
                <p>{buildingData.name}</p>
                <p>{buildingData.percentage} %</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BuildingGrid;

