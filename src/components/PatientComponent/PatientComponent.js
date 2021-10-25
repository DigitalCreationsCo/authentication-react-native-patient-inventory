import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors, FontSizes, TextStyles } from '../../../assets/styles/';

export default function PatientComponent({patient}) {

  const { name, dob, floor, room, items, status } = patient;

  const countInventory = (items) => items.length

  return (
    <View style={TextStyles.container}>
      <View style={[
        styles.banner, 
        styles[`banner_${status}`
        ]]}>
        <Text style={[
          styles.bannerText,
          styles[`bannerText_${status}`
          ]]}>
          {status != 'normal' ? status : ""}
        </Text>
      </View>

      <View style={styles.row}>
          <Text style={TextStyles.header}>{name}</Text>
          <Text style={TextStyles.header}>{floor} floor</Text>
      </View>
      <View style={styles.row}>
        <Text>{dob}</Text>
        <Text>Rm {room}</Text>
      </View>
      <View style={styles.row}>
        <Text style={TextStyles.header}>Items in inventory: {countInventory(items)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  banner: {
    paddingVertical: 5,
    paddingRight: 10,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  banner_normal: {
    backgroundColor: Colors.blue,
  },
  banner_urgent: {
    backgroundColor: Colors.red,
  },
  banner_covid: {
    backgroundColor: Colors.yellow,
  },
  bannerText: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  bannerText_normal: {
    color: 'white',
  },
  bannerText_urgent: {
    color: 'white',
  },
  bannerText_covid: {
    color: 'green',
  },
})