import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Circle, ClipPath, Defs, Rect } from 'react-native-svg';

interface SVGComponentProps {
  style?: StyleProp<ViewStyle>;
  circleCount?: number;
  circleRadius?: number;
  circleColor?: string;
  circleOpacity?: string;
  gapPercentage?: number; // Gap as a percentage of diameter
  reverse?: boolean; // Add reverse prop
}

const SVGComponent: React.FC<SVGComponentProps> = ({
  style,
  circleCount = 5,
  circleRadius = 5.25,
  circleColor = '#F8BEBD',
  circleOpacity = '30%',
  gapPercentage = 0.5,
  reverse = false, // Default reverse is false
}) => {
  const diameter = circleRadius * 2;
  const spacing = diameter * gapPercentage;
  const totalWidth = circleCount * diameter + (circleCount - 1) * spacing;
  const totalHeight = diameter + 1;

  const circles = Array.from({ length: circleCount }, (_, index) => {
    const cx = circleRadius + index * (diameter + spacing);
    return (
      <Circle
        key={index}
        cx={cx}
        cy={circleRadius}
        r={circleRadius}
        fill={circleColor}
        opacity={circleOpacity}
        clipPath={reverse ? 'url(#cut-off-top)' : 'url(#cut-off-bottom)'} // Use clipPath based on reverse prop
      />
    );
  });

  return (
    <View style={style}>
      <Svg width={totalWidth} height={totalHeight}>
        {circles}
        <Defs>
          <ClipPath id='cut-off-bottom'>
            <Rect x={0} y={0} width={totalWidth} height={circleRadius} />
          </ClipPath>
          <ClipPath id='cut-off-top'>
            <Rect x={0} y={circleRadius} width={totalWidth} height={circleRadius} />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default SVGComponent;
