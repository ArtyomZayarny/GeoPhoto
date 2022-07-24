import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Logo} from '../logo';

interface TopBanenrProps {
  height: number;
}
export const TopBanner: React.FC<TopBanenrProps> = ({height = 250}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/map.jpg')}
      style={[{height}, style.banner]}>
      <Logo />
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  banner: {
    backgroundColor: 'aqua',
    display: 'flex',
    alignItems: 'center',
  },
});
