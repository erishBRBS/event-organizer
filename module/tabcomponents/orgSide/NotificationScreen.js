// FriendRequest.js

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView, ScrollView } from 'react-native';

class NotificationScreen extends Component {
  handleAccept = () => {
    // Handle the logic for accepting the friend request
    console.log('Friend request accepted!');
  };

  handleReject = () => {
    // Handle the logic for rejecting the friend request
    console.log('Friend request rejected!');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.txtHeader}>Notifications</Text>
      </View>

      <ScrollView style={{width: '100%',}}>
        <View style={styles.reqContainer}>
        <Text style={styles.name}>Yoriichi Tsugikuni sent you a request!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleAccept} style={styles.acceptButton}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleReject} style={styles.rejectButton}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
  reqContainer:{
    borderWidth: 1,

  },
  name: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 10,
    marginRight: 5,
    borderRadius: 3,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#f44336',
    padding: 10,
    marginLeft: 5,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default NotificationScreen;
