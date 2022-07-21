import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';

export const TermsAndConditions: React.FC = () => {
  return (
    <View>
      <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
      <Text>terms-and-conditions</Text>
    </View>
  );
};
