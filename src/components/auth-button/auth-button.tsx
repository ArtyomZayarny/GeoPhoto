import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, buttonTextStyle} from '../button';
import {theme} from '../../theme';

const AppleContentButton = () => {
  return (
    <View style={styles.flexCenter}>
      <Image
        style={{marginRight: 20}}
        source={require('../../assets/icons/applelogo.png')}
      />
      <Text style={buttonTextStyle.buttonText}>Sign in with Apple</Text>
    </View>
  );
};

export const AuthButton = () => {
  return (
    <>
      <Button text="Sign up" width={'100%'} color={theme.colors.pink} />
      <Text style={styles.logText}>Or log with:</Text>
      <Button
        content={<AppleContentButton />}
        width={'100%'}
        color={theme.colors.green}
      />
    </>
  );
};

const styles = StyleSheet.create({
  logText: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
