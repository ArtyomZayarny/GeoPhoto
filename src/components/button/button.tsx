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
        style={{
          backgroundColor: backgroundColor,
          borderRadius: 100,
          width: 168,
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
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
