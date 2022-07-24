import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Icon = () => {
  return <Image source={require('../../assets/icons/marker.png')} />;
};
export const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ge
        <Icon />
        Photo
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 76,
    fontWeight: '700',
    fontFamily: 'Sen-Bold',
  },
});
