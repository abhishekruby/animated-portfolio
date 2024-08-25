import React from 'react';
import { motion } from 'framer-motion';

interface CurvedArrowProps {
  width: number;
  height: number;
  strokeColor: string;
  strokeWidth: number;
  arrowheadSize: number;
  pointAColor: string;
  pointBColor: string;
}

const CurvedArrow: React.FC<CurvedArrowProps> = ({
  width = 400,
  height = 400,
  strokeColor = '#e5e5e5',
  strokeWidth = 4,
  arrowheadSize = 35,
  pointAColor = '#e5e5e5',
  pointBColor = 'black',
}) => {
  const path = [
    { x: 0, y: 0 },
    { x: width * 0.7, y: height * 0.3 },
    { x: width * 0.1, y: height * 0.3 },
    { x: width, y: height },
  ];

  return (
    <motion.svg
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      className={'absolute'}
    >
      <motion.path
        d={`
          M ${path[0].x} ${path[0].y}
          C ${path[1].x} ${path[1].y}, ${path[2].x} ${path[2].y}, ${path[3].x} ${path[3].y}
        `}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <motion.circle
        cx={path[0].x}
        cy={path[0].y}
        r={5}
        fill={pointAColor}
      /> {/* point A */}
      <motion.circle
        cx={path[3].x}
        cy={path[3].y}
        r={5}
        fill={pointBColor}
      /> {/* point B */}
      <motion.polygon
        points={`${
          path[3].x - arrowheadSize / 2
        },${path[3].y - arrowheadSize / 2} ${
          path[3].x
        },${path[3].y + arrowheadSize / 2} ${
          path[3].x + arrowheadSize / 2
        },${path[3].y - arrowheadSize / 2}`}
        fill={strokeColor}
      /> {/* new arrowhead */}
    </motion.svg>
  );
};

export default CurvedArrow;