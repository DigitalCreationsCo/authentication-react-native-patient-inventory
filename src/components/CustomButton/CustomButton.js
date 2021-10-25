import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import {Colors, FontSizes, TextStyles } from '../../../assets/styles';

export default function CustomButton({ onPress, disabled = false, text, type = "PRIMARY", bgColor, fgColor}) {
  return (
    <Pressable onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.container,
      styles[`container_${type}`],
      bgColor ? { backgroundColor: bgColor } : {},
      disabled ? styles.disabled : {},
      pressed ? styles.pressed : {},]
    }>
      <Text style={[
        styles.text, styles[`text_${type}`],
        fgColor ? { color: fgColor } : {},
        disabled ? styles.disabled : {}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '75%',

    padding: 15, 
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: Colors.blue,
  },
  container_SECONDARY: {
    borderColor: Colors.blue,
    borderWidth: 2,
  },
  container_TERTIARY: {
  },
  disabled: {
    backgroundColor: Colors.gray,
    color: Colors.lightGray,
  },
  pressed: {
    backgroundColor: Colors.darkBlue,
  },
  text: {
    fontWeight: 'bold',
    color: Colors.white,
  },
  text_SECONDARY: {
    color: Colors.blue,
  },
  text_TERTIARY: {
    color: Colors.blue,
  },
})