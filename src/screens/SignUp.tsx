import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Logo} from '../components/logo';
import {SignUpForm} from '../components/sign-up-form';

const TopBanner: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../src/assets/images/map.jpg')}
      style={style.banner}>
      <Logo />
    </ImageBackground>
  );
};
export const SignUp: React.FC = () => {
  return (
    <View>
      <TopBanner />
      <SignUpForm />
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
