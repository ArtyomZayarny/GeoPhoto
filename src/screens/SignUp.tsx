import {View} from 'react-native';
import React from 'react';
import {SignUpForm} from '../components/sign-up-form';
import {TopBanner} from '../components/top-banner';

export const SignUp: React.FC = () => {
  return (
    <View>
      <TopBanner />
      <SignUpForm />
    </View>
  );
};
