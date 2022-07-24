import {StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface BackGroundWrapperProps {
  children: React.ReactNode;
  height?: number;
}
export const BackGroundWrapper: React.FC<BackGroundWrapperProps> = ({
  children,
  height = '100%',
}) => {
  return (
    <LinearGradient
      colors={['#CFF3F2', '#FFE4ED']}
      style={{height}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      {children}
    </LinearGradient>
  );
};
