import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class BookingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingStatus1: 'requested',
      bookingStatus2: 'requested',
      isModalVisible1: false,
      isModalVisible2: false,
      rating1: 0,
      rating2: 0,
      comment1: '',
      comment2: '',
    };
  }

  handleCancel1 = () => {
    if (this.state.bookingStatus1 === 'requested') {
      this.setState({ bookingStatus1: 'canceled' });
    }
  };

  handleRate1 = () => {
    this.setState({ isModalVisible1: false });
  };

  handleAccept2 = () => {
    this.setState({ bookingStatus2: 'accepted' });
  };

  handleDone2 = () => {
    this.setState({ isModalVisible2: true });
  };

  handleRate2 = () => {
    this.setState({ isModalVisible2: false, bookingStatus2: 'done' });
  };

  render() {
    const {
      bookingStatus1,
      bookingStatus2,
      isModalVisible1,
      isModalVisible2,
      rating1,
      rating2,
      comment1,
      comment2,
    } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}>Bookings</Text>
        </View>

        <ScrollView style={{width: '100%', marginLeft: '10%'}}>
        {/* Organizer Container 1 */}
        <View style={styles.organizerContainer}>
          <View style={styles.organizerProfile}>
            <Image
              source={require("../../../assets/screen-img/org-profile.jpeg")}
              style={styles.orgImage}
            />
            <Text style={{ alignSelf: 'center', fontSize: 15, paddingLeft: 5 }}>
              Gol D. Roger
            </Text>
          </View>
          <View
            style={{
              marginTop: 2,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              paddingBottom: 2,
            }}
          >
            <Image
              source={require("../../../assets/screen-img/wedding.jpeg")}
              style={styles.eventImage}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15 }}>Wedding Organizer</Text>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="star" size={20} color="gold" />
              <Text style={{ fontSize: 15 }}>4.8</Text>
            </View>
          </View>
          {bookingStatus1 === 'requested' ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Text style={{ color: '#3B4B21', alignSelf: 'center', fontWeight: 'bold' }}>
                Requested
              </Text>
              <TouchableOpacity onPress={this.handleCancel1} disabled={bookingStatus1 === 'canceled'}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.cancelledText}>Cancelled</Text>
          )}
          <Modal animationType="slide" transparent={true} visible={isModalVisible1}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                  Rate the organizer
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => this.setState({ rating1: value })}
                    >
                      <Text style={{ fontSize: 20, color: rating1 >= value ? 'orange' : 'gray' }}>{'\u2605'}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Add a comment..."
                  value={comment1}
                  onChangeText={(text) => this.setState({ comment1: text })}
                />
                <Button title="Submit Rating" onPress={this.handleRate1} />
              </View>
            </View>
          </Modal>
        </View>

        {/* Organizer Container 2 */}
        <View style={styles.organizerContainer}>
          <View style={styles.organizerProfile}>
            <Image
              source={require("../../../assets/screen-img/org-profile.jpeg")}
              style={styles.orgImage}
            />
            <Text style={{ alignSelf: 'center', fontSize: 15, paddingLeft: 5 }}>
              Captain Baggy
            </Text>
          </View>
          <View
            style={{
              marginTop: 2,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              paddingBottom: 2,
            }}
          >
            <Image
              source={require("../../../assets/screen-img/birthday.jpeg")}
              style={styles.eventImage}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15 }}>Clown</Text>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="star" size={20} color="gold" />
              <Text style={{ fontSize: 15 }}>4.5</Text>
            </View>
          </View>
          {bookingStatus2 === 'requested' ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Text style={{ color: '#3B4B21', alignSelf: 'center', fontWeight: 'bold' }}>
                Accepted
              </Text>
              <TouchableOpacity onPress={this.handleDone2}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{bookingStatus2 === 'requested' ? 'Rate' : 'Done'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
              <View>
                <Text style={{color: '#3B4B21', alignSelf: 'center', fontWeight: 'bold', fontSize: 15}}>Done</Text>
              </View>
          )}
          <Modal animationType="slide" transparent={true} visible={isModalVisible2}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                  Rate the organizer
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => this.setState({ rating2: value })}
                    >
                      <Text style={{ fontSize: 20, color: rating2 >= value ? 'gold' : 'gray' }}>{'\u2605'}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Add a comment..."
                  value={comment2}
                  onChangeText={(text) => this.setState({ comment2: text })}
                />
                <TouchableOpacity onPress={this.handleRate2}>
                  <View style={{ backgroundColor: '#3B4B21', paddingVertical: 10, paddingHorizontal: 5, borderRadius: 90 }}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Submit Rating</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.organizerContainer}>
          <View style={styles.organizerProfile}>
            <Image
              source={require("../../../assets/screen-img/org-profile.jpeg")}
              style={styles.orgImage}
            />
            <Text style={{ alignSelf: 'center', fontSize: 15, paddingLeft: 5 }}>
              Gol D. Roger
            </Text>
          </View>
          <View
            style={{
              marginTop: 2,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              paddingBottom: 2,
            }}
          >
            <Image
              source={require("../../../assets/screen-img/wedding.jpeg")}
              style={styles.eventImage}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15 }}>Wedding Organizer</Text>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="star" size={20} color="gold" />
              <Text style={{ fontSize: 15 }}>4.8</Text>
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15}}>Request Rejected</Text>
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
    gap: 5,
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '90%',
    backgroundColor: '#3B4B21',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 10,
  },
  txtHeader: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  organizerContainer: {
    height: 'auto',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 10,
  },
  organizerProfile: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 2,
    width: '100%',
  },
  orgImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: '#3B4B21',
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#3B4B21',
    borderRadius: 90,
    width: 100,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
  cancelledText: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10
  },
});

export default BookingsScreen;
