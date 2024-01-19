import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, Button  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons'


const weatherOptions = {
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#56ccf2', '#2f80ed'],
    title: 'Amazing weather',
    description: 'Go for a walk, stop staying at home!',
  },
  Thunderstrom: {
    iconName: 'weather-lightning',
    gradient: ['#141e30', '#243b55'],
    title: 'Sit a home',
    description: 'Do you see what`s on the street ?',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Take an umbrella',
    description: 'Perphaps the rain will increase soon',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046', '#1cb5e0'],
    title: 'It`s raining outside',
    description: 'So there will be a rainbow soon !',
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'There`s a snow outside !',
    description: 'Dress warmly, make snowmen',
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#b79891', '#94716b'],
    title: 'Dusty',
    description: 'Better close the windows',
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56ccf2', '#2f80ed'],
    title: 'On the street smog :(',
    description: 'I do not advise going out unneessarily',
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3e5151', '#decba4'],
    title: 'There`s a snow outside !',
    description: 'Dress warmly, make snowmen',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c8b'],
    title: 'You can`t see a damn thing in the fog ',
    description: 'Do you see what`s on the street ?',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757f9a', '#d7dd38'],
    title: 'The clouds',
    description: 'Go for a walk, stop staying at home !',
  },
}

export default function Weather({ temp, name, condition, setWeather}) {
  const [query, setQuery] = useState('');


  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.mainContainer}>
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
        </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
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
  }
})
