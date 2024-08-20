import React from 'react';

interface CurvedArrowProps{
  from:{
    x: number;
    y: number;
  }
  to:{
    x: number;
    y: number;
  }
  curvature: number;
  arrowSize : number;
  direction: string
}

const CurvedArrow = ({ from, to, curvature = 0.5, arrowSize = 10, direction = 'right' }:CurvedArrowProps) => {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  let controlX, controlY;

  if (direction === 'left') {
    controlX = from.x - deltaX * curvature;
    controlY = from.y + deltaY * curvature;
  } else if (direction === 'right') {
    controlX = from.x + deltaX * curvature;
    controlY = from.y + deltaY * curvature;
  } else {
    throw new Error(`Invalid direction: ${direction}. Must be 'left' or 'right'.`);
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${Math.max(from.x, to.x) + arrowSize} ${Math.max(from.y, to.y) + arrowSize}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrow"
          markerWidth={arrowSize}
          markerHeight={arrowSize}
          refX={arrowSize / 2}
          refY={arrowSize / 2}
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d={`M0,0 L${arrowSize},${arrowSize / 2} L0,${arrowSize} Z`} fill="#94a3b8" />
        </marker>
      </defs>
      <path
        d={`M${from.x},${from.y} Q${controlX},${controlY} ${to.x},${to.y}`}
        stroke="#94a3b8"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

export default CurvedArrow;