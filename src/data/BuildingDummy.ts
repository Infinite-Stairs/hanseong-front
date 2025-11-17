export interface BuildingData {
  id: string;
  name: string;
  percentage: number;
}

export const BuildingDummy: BuildingData[] = [
  { id: "bigben", name: "빅밴", percentage: 50 },
  { id: "khalifa", name: "칼리파", percentage: 30 },
  { id: "infoIsland", name: "정보섬", percentage: 75 },
  { id: "lotte", name: "롯데타워", percentage: 60 },
  { id: "namsan", name: "남산타워", percentage: 40 },
];

