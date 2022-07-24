import {View} from 'react-native';
import React from 'react';
import {TopBanner} from '../components/top-banner';
import {SignInForm} from '../components/sign-in-form';

export const SignIn: React.FC = () => {
  return (
    <View>
      <TopBanner height={360} />
      <SignInForm />
    </View>
  );
};
