import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Logo} from '../logo';

const TopBanner: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/map.jpg')}
      style={style.banner}>
      <Logo />
    </ImageBackground>
  );
};
export const SignUp: React.FC = () => {
  return (
    <View>
      <TopBanner />
    </View>
  );
};

const style = StyleSheet.create({
  banner: {
    height: 200,
    backgroundColor: 'aqua',
    display: 'flex',
    alignItems: 'center',
  },
});
