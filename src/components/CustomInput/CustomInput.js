import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/styles/';

export default function CustomInput({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '75%',

    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,

    padding: 10,
    marginVertical: 5,
  },
})
