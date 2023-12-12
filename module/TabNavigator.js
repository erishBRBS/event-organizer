import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './tabcomponents/userSide/HomeScreen';
import ProfileScreen from './tabcomponents/userSide/ProfileScreen';
import ChatsScreen from './tabcomponents/userSide/ChatsScreen';
import BookingsScreen from './tabcomponents/userSide/BookingsScreen';
import HomeScreenOrg from './tabcomponents/orgSide/HomeScreenOrg';
import NotificationScreen from './tabcomponents/orgSide/NotificationScreen';
import ChatsScreenOrg from './tabcomponents/orgSide/ChatsScreenOrg';
import ProfileScreenOrg from './tabcomponents/orgSide/ProfileScreenOrg';

const Tab = createBottomTabNavigator();
class TabNavigatorOrg extends Component {
  getTabBarIcon(route, focused) {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Notification') {
      iconName = 'bell';
    } else if (route.name === 'Chats') {
      iconName = 'message';
    } else if (route.name === 'Profile') {
      iconName = 'account';
    }
    return (
      <MaterialCommunityIcons
        name={iconName}
        size={focused ? 30 : 25}
        color={focused ? '#3B4B21' : 'gray'}
      />
    );
  }
  render() {
    return (
      
        <Tab.Navigator
            screenOptions={{
            tabBarStyle: {
                backgroundColor: 'white', // Set the background color of the tab bar
            },
            tabBarLabelStyle: {
                color: '#3B4B21', // Set the color for the tab labels
            },
            }}
        >
        <Tab.Screen
          name="Home"
          component={HomeScreenOrg}
          options={({ route }) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
          
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={({ route }) => ({
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
        />
        <Tab.Screen
          name="Chats"
          component={ChatsScreenOrg}
          options={({ route }) => ({
            tabBarLabel: 'Chats',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreenOrg}
          options={({ route }) => ({
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
        />
      </Tab.Navigator>
    );
  }
}

class TabNavigatorUser extends Component {
  getTabBarIcon(route, focused) {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Bookings') {
      iconName = 'book';
    } else if (route.name === 'Chats') {
      iconName = 'message';
    } else if (route.name === 'Profile') {
      iconName = 'account';
    }
    return (
      <MaterialCommunityIcons
        name={iconName}
        size={focused ? 30 : 25}
        color={focused ? '#3B4B21' : 'gray'}
      />
    );
  }
  render() {
    return (
      
        <Tab.Navigator
            screenOptions={{
            tabBarStyle: {
                backgroundColor: 'white', // Set the background color of the tab bar
            },
            tabBarLabelStyle: {
                color: '#3B4B21', // Set the color for the tab labels
            },
            }}
        >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
          
        />
        <Tab.Screen
          name="Bookings"
          component={BookingsScreen}
          options={({ route }) => ({
            tabBarLabel: 'Bookings',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
        />
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={({ route }) => ({
            tabBarLabel: 'Chats',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false
          })}
        />
      </Tab.Navigator>
    );
  }
}

export {TabNavigatorUser, TabNavigatorOrg};