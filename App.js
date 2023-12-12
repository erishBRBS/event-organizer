import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './module/SplashScreen';
import LogInScreen from './module/LogInScreen';
import {SignUpCompleteScreenOrganizer, SignUpCompleteScreenUser} from './module/SignUpCompleteScreen';
import {SignUpScreenOrganizer, SignUpScreenUser}  from './module/SignUpScreen';
import VerificationScreen from './module/VerificationScreen';
import {TabNavigatorUser, TabNavigatorOrg} from './module/TabNavigator';
import {ChatAreaUser,ChatAreaOrganizer} from './module/tabcomponents/userSide/ChatArea';
import OrganizerProfile from './module/tabcomponents/userSide/OrganizerProfile'

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Welcome" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up User" component={SignUpScreenUser} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up Organizer" component={SignUpScreenOrganizer} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up Complete User" component={SignUpCompleteScreenUser} options={{ headerShown: false }} />
          <Stack.Screen name="Complete Organizer" component={SignUpCompleteScreenOrganizer} options={{ headerShown: false }} />
          <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TabsUser" component={TabNavigatorUser} options={{ headerShown: false }} /> */}
          <Stack.Screen name="TabsOrg" component={TabNavigatorOrg} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Chat User" component={ChatAreaUser} options={{headerShown: false}} /> */}
          <Stack.Screen name="Chat Org" component={ChatAreaOrganizer} options={{headerShown: false}} />
          {/* <Stack.Screen name="Organizer" component={OrganizerProfile} options={{headerShown: false}} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5973',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;