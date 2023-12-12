import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, FlatList, ScrollView, TouchableOpacity, modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TopTabNavigator from './OrgTabNavigator';

class OrganizerProfile extends Component {
    render(){
      const { navigation } = this.props;
        return(
          <SafeAreaView style={styles.container}>
           <View style={styles.headerContainer}>
            <TouchableOpacity onPress ={() => navigation.navigate('Home')}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color="#3B4B21"
              />
            </TouchableOpacity>
            <Text style={styles.txtStyles}>Back to Home</Text>
          </View>
          <View style={styles.profileContainer}>
          {/* Cover Photo */}
          <Image
            style={styles.coverPhoto}
            source={require('../../../assets/screen-img/wedding.jpeg')}
          />
          {/* Profile Picture */}
          <Image
            style={styles.profilePicture}
            source={require('../../../assets/screen-img/org-profile.jpeg')}
          />
            <Text style={{ marginTop: 10, color: 'black', fontWeight: 'bold', marginLeft: '28%' }}>
              Gol D. Roger
            </Text>
          </View>
          <View style={{width:'100%', height: '100%', marginTop: 10, borderTopWidth: 1, borderColor: 'lightgray' }}>
            <TopTabNavigator />
          </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 1,
      },
      profileContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 10,
      },
      coverPhoto: {
        width: '100%',
        height: 190,
        borderRadius: 10,
      },
      profilePicture: {
        position: 'absolute',
        top: 150,
        left: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        zIndex: 1,
        borderWidth: 5,
        borderColor: 'white',
      },
      headerContainer: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 10,
      }
})

export default OrganizerProfile;