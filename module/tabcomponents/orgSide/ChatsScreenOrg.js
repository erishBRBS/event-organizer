import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

class ChatsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Chats</Text>
      </View>

      <ScrollView style={{width: '100%',}}>
      <View style={{gap: 5}}> 
      <TouchableOpacity  onPress = {() => {navigation.navigate('Chat Org');}}>
      <View style={styles.chatContainer}>
      <Image source={require("../../../assets/screen-img/user-profile.jpeg")} style={styles.orgImage}/>
      <View style={styles.orgName}>
        <Text>Yoriichi Tsugikuni</Text>
        <Text>Sent a message...</Text>
      </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.chatContainer}>
      <Image source={require("../../../assets/screen-img/org-profile.jpeg")} style={styles.orgImage}/>
      <View style={styles.orgName}>
        <Text>Pritong Manok</Text>
        <Text>Sent a message...</Text>
      </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.chatContainer}>
      <Image source={require("../../../assets/screen-img/org-profile.jpeg")} style={styles.orgImage}/>
      <View style={styles.orgName}>
        <Text>Sinigawang hakdog</Text>
        <Text>Sent a message...</Text>
      </View>
      </View>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
container: {
  alignItems: 'center',
  backgroundColor: 'white',
  flex: 1,
  gap: 5
},
header:{
  justifyContent: 'center',
  alignItems: 'center',
      height: 'auto',
    width: '90%',
    backgroundColor: '#3B4B21',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 10
},
txtHeader: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 15
},
chatContainer: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  flexDirection: 'row',
  gap: 8,
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 20.00,
  elevation: 10
},
  orgImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    borderColor: '#3B4B21'
  },
  orgName:{
    justifyContent: 'center'
  }


})
export default ChatsScreen;