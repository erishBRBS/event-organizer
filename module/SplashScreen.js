import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

class SplashScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require("../assets/screen-img/splash-screen.png")} style={styles.splashScreenStyle} />
          <Text style={styles.textStylep1}>Setup events with Gatherly</Text>
          <Text style={styles.textStylep2}>Gatherly is a mobile application where you can find people who offer different services to organize your event.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.btnContainer}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Get Started</Text>
          </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashScreenStyle: {
    height: 200,
    width: 300,
  },
  textStylep1: {
    color: '#3B4B21',
    fontWeight: 'bold',
    fontSize: 18,
    width: 290,
  },
  textStylep2: {
    width: 290,
    color: 'black',
    fontSize: 13,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B4B21',
    height: 40,
    width: 290,
    marginTop: 30,
    borderRadius: 10,
  },
});

export default SplashScreen;