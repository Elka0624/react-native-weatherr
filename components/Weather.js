import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, Button, ImageBackground, ScrollView  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import clear from '../assets/gif/clear.gif';
import thunderstrom from '../assets/gif/Thunderstrom.gif';
import drizzle from '../assets/gif/Drizzle.gif';
import snow from '../assets/gif/snow.gif';
import dust from '../assets/gif/Dust.gif';
import haze from '../assets/gif/haze.gif'

const weatherOptions = {
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#56ccf2', '#2f80ed'],
    title: 'Ajoyib ob-havo',
    description: 'Sayrga boring, uyda qolishni bas qiling!',
    gif: clear,
  },
  Thunderstrom: {
    iconName: 'weather-lightning',
    gradient: ['#141e30', '#243b55'],
    title: 'Uyda o`tiring !',
    description: 'Ko`chada nima borligini ko`ryapsizmi?',
    gif: thunderstrom,
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Soyabon oling',
    description: 'Ehtimol, tez orada yomg`ir ko`payadi',
    gif: drizzle,
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046', '#1cb5e0'],
    title: 'Tashqarida yomg`ir yog`moqda',
    description: 'Shunday qilib, tez orada kamalak paydo bo`ladi!',
    gif: drizzle,
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'Tashqarida qor bor!',
    description: 'Iliq kiyinib, qordan odam yasang',
    gif: snow,
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#b79891', '#94716b'],
    title: 'Chang',
    description: 'Derazalarni yopish yaxshiroqdir',
    gif: dust,
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56ccf2', '#2f80ed'],
    title: 'Ko`chada tutun :(',
    description: 'Men keraksiz tashqariga chiqishni maslahat bermayman',
    gif: dust,
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3e5151', '#decba4'],
    title: 'Tashqarida qor bor!',
    description: 'Issiq kiyinib, qordan odam yasang',
    gif: haze,
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c8b'],
    title: 'Tumanda hech narsani ko`ra olmaysiz',
    description: 'Ko`chada nima borligini ko`ryapsizmi?',
    gif: haze,
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757f9a', '#d7dd38'],
    title: 'Bulutlar',
    description: 'Sayrga boring, uyda qolishni bas qiling!',
    gif: clear,
  },
}

export default function Weather({ temp, name, condition, setWeather}) {
  const [query, setQuery] = useState('');


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <ImageBackground style={styles.test} source={weatherOptions[condition].gif}>
      {/* <LinearGradient colors={weatherOptions[condition].gradient} style={styles.mainContainer}> */}
      <StatusBar barStyle={"light-content"} />
      
      <View style={styles.container}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={150} color={'white'}/>
        <View style={styles.flex}> 
          <Text style={styles.temp}>{temp}° </Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
      </View>
        <View style={{...styles.container, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.description}>{weatherOptions[condition].description}</Text>
          <View style={styles.searchContainer}>
            <TextInput placeholder='City' style={styles.input} value={query} onChangeText={text => setQuery(text)}/>
            <Button title='Search' style={styles.button} onPress={() => setWeather(query)}/>
          </View>
          <LinearGradient style={styles.footer} colors={['#eeaeca', '#94bbe9']}>
            <Text style={styles.elka}>
              Elka.dev
            </Text>
          </LinearGradient>

        </View>
      {/* </LinearGradient> */}
    </ImageBackground>
  </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  temp: {
    fontSize: 42,
    color: 'white'
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: 'left'
  },
  description: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'left'
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    marginTop: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  input: {
    width: "70%",
    height: "100%",
  },
  button: {
    width: '30%',
  },
  test: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
    backgroundSize: 'cover',
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Android uchun qavat yorqinligi
    shadowColor: 'black', // iOS uchun qavat yorqinligi
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius:  20,
    padding: 0,
  },
  elka: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white'
  }
})
