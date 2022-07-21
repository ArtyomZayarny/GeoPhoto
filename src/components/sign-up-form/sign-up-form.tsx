import {View, TextInput, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {TermsAndConditions} from '../terms-and-conditions/terms-and-conditions';
import {Button, buttonTextStyle} from '../button';
import {UserIcon} from '../icons/user-icon';
import LinearGradient from 'react-native-linear-gradient';
import {EmailIcon} from '../icons/email-icon';
import {LockIcon} from '../icons/lock-icon';
import {theme} from '../../theme';

export const SignUpForm: React.FC = () => {
  return (
    <LinearGradient
      colors={['#CFF3F2', '#FFE4ED']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <UserIcon width={19} height={21} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <EmailIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <LockIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Your password"
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <LockIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <Text style={styles.validatingText}>
          Please include a combination of at least 8 characters, numbers and
          symbol
        </Text>
        <TermsAndConditions />
        <View style={styles.buttonWrapper}>
          <Button text="Sign up" width={'100%'} color={theme.colors.pink} />
          <Text style={styles.logText}>Or log with:</Text>

          <Button
            content={
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{marginRight: 20}}
                  source={require('../../assets/icons/applelogo.png')}
                />
                <Text style={buttonTextStyle.buttonText}>
                  Sign in with Apple
                </Text>
              </View>
            }
            width={'100%'}
            color={theme.colors.green}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
  },
  logText: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
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
  input: {
    width: '100%',
    position: 'relative',
    paddingLeft: 73,
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 100,
    fontSize: 20,
    shadowColor: '#777777',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 17,
  },
  inputIcon: {
    position: 'absolute',
    width: 19,
    height: 21,
    top: 15,
    left: 25,
    zIndex: 1,
  },
});
