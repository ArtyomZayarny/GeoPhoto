import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TermsAndConditions} from '../terms-and-conditions/terms-and-conditions';
import {UserIcon} from '../icons/user-icon';
import LinearGradient from 'react-native-linear-gradient';
import {EmailIcon} from '../icons/email-icon';
import {LockIcon} from '../icons/lock-icon';
import {theme} from '../../theme';
import {AuthButton} from '../auth-button/auth-button';

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
            secureTextEntry={true}
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
            secureTextEntry={true}
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <Text style={styles.validatingText}>
          Please include a combination of at least 8 characters, numbers and
          symbol
        </Text>
        <TermsAndConditions />
        <View style={styles.buttonWrapper}>
          <AuthButton />
        </View>
      </View>
    </LinearGradient>
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
