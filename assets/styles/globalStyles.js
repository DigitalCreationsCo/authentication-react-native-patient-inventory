import { StyleSheet } from "react-native";

const Colors = {
  darkBlue: '#051C60',
  blue: '#3B71F3',
  link: '#FDB075',
  lightGray: '#efefef',
};

const FontSizes = {
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
  xxl: 40,
};

const TextStyles = StyleSheet.create({
  title: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.blue,
    margin: 10,
    },
})

export { TextStyles, Colors, FontSizes }