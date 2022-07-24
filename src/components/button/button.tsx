import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

type ButtonProps = {
  text: string;
  width?: number | string;
  color: string;
  content?: React.ReactNode;
};
export const Button: React.FC<ButtonProps> = ({
  text,
  width = 168,
  color,
  content,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          backgroundColor: color,
          borderRadius: 100,
          width: width,
          shadowColor: '#000000',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}>
        <View>
          {content}
          {text && <Text style={buttonTextStyle.buttonText}>{text}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const buttonTextStyle = StyleSheet.create({
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
