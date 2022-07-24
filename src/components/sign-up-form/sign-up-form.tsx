import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TermsAndConditions} from '../terms-and-conditions/terms-and-conditions';
import {theme} from '../../theme';
import {AuthButtons} from '../auth-buttons/auth-buttons';
import {BackGroundWrapper} from '../back-ground';
import {Input} from '../input';

export const SignUpForm: React.FC = () => {
  return (
    <BackGroundWrapper style={styles.container}>
      <View style={styles.wrapper}>
        <Input placeholder="Your name" icon="user" />
        <Input placeholder="Your email" icon="email" />
        <Input placeholder="Your password" icon="password" type="password" />
        <Input placeholder="Confirm password" icon="password" type="password" />
        <Text style={styles.validatingText}>
          Please include a combination of at least 8 characters, numbers and
          symbol
        </Text>
        <TermsAndConditions />
        <View style={styles.buttonWrapper}>
          <AuthButtons type="sign up" />
        </View>
      </View>
    </BackGroundWrapper>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
  },
  validatingText: {
    color: theme.colors.gray,
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 17,
  },
  wrapper: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 40,
  },
  container: {
    height: '100%',
  },
});
