import {View, StyleSheet} from 'react-native';
import React from 'react';

interface MainWrapperProps {
  children: React.ReactNode;
}
export const MainWrapper: React.FC<MainWrapperProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 35,
    paddingRight: 35,
  },
});
