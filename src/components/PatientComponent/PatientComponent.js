import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PatientComponent({patient}) {

  const { name, dob, floor, room, items, status } = patient;

  const countInventory = (items) => items.length

  return (
    <View style={styles.container}>
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
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.header}>{floor} floor</Text>
      </View>
      <View style={styles.row}>
        <Text>{dob}</Text>
        <Text>Rm {room}</Text>
      </View>
      <View style={styles.row}>
        <Text>Items in inventory: {countInventory(items)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '75%',

    alignSelf: 'center',

    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  row: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18,
  },
  banner: {
    paddingVertical: 5,
    paddingRight: 15,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  banner_normal: {
    backgroundColor: '#3B71F3',
  },
  banner_urgent: {
    backgroundColor: 'red',
  },
  banner_covid: {
    backgroundColor: 'yellow',
  },
  bannerText: {
    alignSelf: 'flex-end',
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