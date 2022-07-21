import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
import {theme} from '../../theme';

export const TermsAndConditions: React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor={theme.colors.gray}
        unfillColor="transparent"
        style={styles.checkbox}
        onPress={(isChecked: boolean) => {}}
      />
      <Text style={styles.text}>
        I accept the <Text style={styles.boldText}>Terms & Conditions</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderColor: theme.colors.gray,
    marginRight: 25,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },
  text: {
    color: theme.colors.gray,
    fontSize: 13,
    fontWeight: '400',
  },
  boldText: {
    color: theme.colors.black,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
});
