import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BackGroundWrapper} from '../back-ground';
import {MainWrapper} from '../../layout/main-wrapper/main-wrapper';
import {Input} from '../input';
import {AuthButtons} from '../auth-buttons';
import {theme} from '../../theme';

export const SignInForm: React.FC = () => {
  return (
    <BackGroundWrapper style={{height: '100%'}}>
      <MainWrapper>
        <View style={{paddingTop: 40}}>
          <Input placeholder="Your email" icon="email" />
          <Input placeholder="Your password" icon="password" type="password" />
          <Text style={styles.forgotPassword}>Forgot your Password</Text>
          <AuthButtons type="login" />
        </View>
      </MainWrapper>
    </BackGroundWrapper>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: 13,
    fontWeight: '400',
    color: theme.colors.black,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
  },
});
