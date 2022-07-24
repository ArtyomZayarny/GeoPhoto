import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {theme} from '../../theme';
import {EmailIcon} from '../icons/email-icon';
import {LockIcon} from '../icons/lock-icon';
import {UserIcon} from '../icons/user-icon';

interface InputProps {
  placeholder: string;
  icon: string;
}

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'email':
      return <EmailIcon />;
    case 'password':
      return <LockIcon />;
    case 'user':
      return <UserIcon />;
    default:
      return null;
  }
};

export const Input: React.FC<InputProps> = ({placeholder, icon}) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <View style={styles.inputIcon}>{renderIcon(icon)}</View>}
      <TextInput
        style={styles.input}
        placeholder="Your email"
        placeholderTextColor={theme.colors.gray}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginBottom: 20,
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
