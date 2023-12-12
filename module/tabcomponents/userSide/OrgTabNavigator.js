// Import necessary components and libraries
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReviewScreen from './ReviewScreen'; // Import your ReviewScreen component
import FeedbackScreen from './FeedbackScreen'; // Import your FeedbackScreen component

// Create a TopTabNavigator
const Tab = createMaterialTopTabNavigator();

// Define the TopTabNavigator component
class TopTabNavigator extends Component {
  
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Reviews" component={ReviewScreen} />
        <Tab.Screen name="Feedbacks" component={FeedbackScreen} />
      </Tab.Navigator>
    );
  }
}

export default TopTabNavigator;
