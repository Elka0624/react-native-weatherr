import React from 'react';
import { StyleSheet,Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default function Loading() {
  return (
    <AnimatedLoader
        visible={true}
        overlayColor="#fdf6aa"
        source={require("../assets/loading.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});