import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '../components/button/button';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../theme';

const Banner = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/onBoarding.jpg')}
    />
  );
};
export const OnBoarding: React.FC = () => {
  return (
    <View style={{height: '100%'}}>
      <Banner />
      <LinearGradient
        colors={[theme.colors.lightGreen, theme.colors.lightPink]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Button text={'Login'} color={theme.colors.green} />
        <Button text={'Sign Up'} color={theme.colors.pink} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
