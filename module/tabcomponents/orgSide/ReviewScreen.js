import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class ReviewScreen extends Component {
  renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={15}
          color="gold"
        />
      );
    }
    return stars;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.flexContainer}>
            <View style={styles.reviewContainer}>
              <Image
                source={require("../../../assets/screen-img/user-profile.jpeg")}style={styles.orgImage}/>
              <View style={{ padding: 10 }}>
                <Text>Yoriichi Tsugikuni</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Ratings:</Text>
                  <Text>{this.renderStars(5)} {/* Change the rating as needed */}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Comment:</Text>
                  <Text>Second Form: Clear Blue Sky.</Text>
                </View>
              </View>
            </View>
            {/* Add more reviews here */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexContainer: {
    flexDirection: 'column',
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 5
  },
  orgImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    borderColor: '#3B4B21',
  },
  
});

export default ReviewScreen;
