import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

type ButtonProps = {
  text: string;
};
export const Button: React.FC<ButtonProps> = ({text}) => {
  const backgroundColor = text === 'Login' ? '#256868' : '#E27085';
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          backgroundColor: backgroundColor,
          borderRadius: 100,
          width: 168,
          shadowColor: '#000000',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Sen-Bold',
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: 'uppercase',
  },
});
