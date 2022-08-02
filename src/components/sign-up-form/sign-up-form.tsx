import {View, StyleSheet, Text} from 'react-native';
import React, {createContext} from 'react';
import {TermsAndConditions} from '../terms-and-conditions/terms-and-conditions';
import {theme} from '../../theme';
import {AuthButtons} from '../auth-buttons/auth-buttons';
import {BackGroundWrapper} from '../back-ground';
import {useForm} from 'react-hook-form';
import {FormInput} from '../form-input';

export const FormContext = React.createContext({});
export const SignUpForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = data => console.log(data);

  return (
    <BackGroundWrapper style={styles.container}>
      <View style={styles.wrapper}>
        <FormContext.Provider value={{control, errors}}>
          <FormInput name="userName" placeholder="Your name" iconName="user" />
          <FormInput name="email" placeholder="Your email" iconName="email" />
          <FormInput
            name="password"
            placeholder="Your password"
            iconName="password"
            type="password"
          />
          <FormInput
            name="confirmPassword"
            placeholder="Confirm password"
            iconName="password"
            type="password"
          />
        </FormContext.Provider>

        <Text style={styles.validatingText}>
          Please include a combination of at least 8 characters, numbers and
          symbol
        </Text>
        <TermsAndConditions />
        <View style={styles.buttonWrapper}>
          <AuthButtons type="sign up" onPress={handleSubmit(onSubmit)} />
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
