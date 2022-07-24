import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface BackGroundWrapperProps {
  children: React.ReactNode;
  height?: number;
  style?: {};
}
export const BackGroundWrapper: React.FC<BackGroundWrapperProps> = ({
  children,
  style,
}) => {
  return (
    <LinearGradient
      colors={['#CFF3F2', '#FFE4ED']}
      style={style}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      {children}
    </LinearGradient>
  );
};
