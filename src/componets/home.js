import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import wallpaper from '../../assets/img/default.jpg';
import { Icon } from 'react-native-elements';

const image = { src: wallpaper };

const Home = () => (
  <View style={styles.container}>
    <ImageBackground source={wallpaper} style={styles.image}>
    <View style={styles.containerIcons}>
      <Icon raised  name='tv' type='material' color='#5a5a5a' style={styles.icons} onPress={() => console.log('hello')} />
      <Icon raised  name='folder' type='material' color='#5a5a5a' style={styles.icons} onPress={() => console.log('hello')} />
      <Icon raised  name='map' type='material' color='#5a5a5a' style={styles.icons} onPress={() => console.log('hello')} />
      <Icon raised  name='settings' type='material' color='#5a5a5a' style={styles.icons} onPress={() => console.log('hello')} />
  
    </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  containerIcons: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default Home;