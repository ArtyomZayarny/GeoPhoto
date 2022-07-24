import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '../components/button/button';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../theme';
import {BackGroundWrapper} from '../components/back-ground';

const Banner = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/onBoarding.jpg')}
    />
  );
};
export const OnBoarding: React.FC = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={{height: '100%'}}>
      <Banner />
      <BackGroundWrapper style={styles.container}>
        <Button
          text={'Login'}
          color={theme.colors.green}
          handlePress={handleLogin}
        />
        <Button
          text={'Sign Up'}
          color={theme.colors.pink}
          handlePress={handleSignUp}
        />
      </BackGroundWrapper>
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
