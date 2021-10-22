import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function CustomInput({ value, setValue, placeholder, secureTextEntry }) {

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
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
    backgroundColor: 'white',
    width: '75%',

    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 5,

    padding: 10,
    marginVertical: 5,
  },
  input: {}
})
