import { StyleSheet } from "react-native";

export const Colors = 
{
  darkBlue: '#051C60',
  blue: '#3B71F3',
  red: 'red',
  yellow: 'yellow',
  lightGray: '#efefef',
  gray: 'gray',
  white: 'white',
  black: 'black',
};

export const FontSizes = 
{
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
  xxl: 40,
};

const ButtonStyles = StyleSheet.create({
})

const TextStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    maxHeight: 300,
    width: '70%',
    maxWidth: 500,
  },
  container: {
    backgroundColor: Colors.white,
    width: '75%',

    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,

    paddingBottom: 5,
    marginVertical: 5,
    alignSelf: 'center',
  },
  mainText: {
    color: '#242424',
    fontSize: FontSizes.sm,
  },
  message: {
    height: 20,
    color: Colors.red,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.darkBlue,
    margin: 20,
  },
  link: {
    color: '#FDB075',
  },
});

export { ButtonStyles, TextStyles };