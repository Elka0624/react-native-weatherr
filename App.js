import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './components/Loading';
import Weather from './components/Weather';
import * as Location from 'expo-location';
import axios from 'axios';


//https://api.openweathermap.org/data/2.5/weather?lat=40.1369931&lon=67.8319519&appid=6ac875c128c036b5cf20e988ee66c8b3

const API_KEY = '6ac875c128c036b5cf20e988ee66c8b3';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
//axios
  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    setLocation(data)
    setIsLoading(false);
  }
// serach
  const setWeather = async (query) => {
    setIsLoading(true)
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
    setLocation(data)
    setIsLoading(false);
  }

  //location aniqlash funksiyasi

  const getLocation = async() => {
    try {
      const { status } = 
        await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        Alert.alert('Permission to access location was denied');
        return;
      }

      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('I can`t find your current location, so bad): ');
    }
  }

  useEffect(() => {
      getLocation();
  }, []);


  return (
    isLoading ? <Loading /> : <Weather 
    setWeather={setWeather}
    temp={location.main.temp} 
    name={location.name} 
    condition={location.weather[0].main}
    />
  )
}

const styles = StyleSheet.create({

});
