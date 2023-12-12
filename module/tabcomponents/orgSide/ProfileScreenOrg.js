import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import TopTabNavigator from './OrgTabNavigator';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      newName: 'Yoriichi Tsugikuni',
      editedName: '',
      tempEditedName: '', // New state to store changes without affecting the displayed name
    };
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      editedName: this.state.newName,
      tempEditedName: this.state.newName, // Set tempEditedName to the current newName
    });
  };

  handleEditProfile = () => {
    this.toggleModal();
  };

  handleSaveChanges = () => {
    // Update newName only when saving changes
    this.setState({ newName: this.state.tempEditedName });
    this.toggleModal(); // Close the modal after saving changes
  };

  handleNameChange = (text) => {
    // Update tempEditedName without affecting the displayed name
    this.setState({ tempEditedName: text });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/**Profile section */}
        <View style={styles.profileContainer}>
          {/* Cover Photo */}
          <Image
            style={styles.coverPhoto}
            source={require('../../../assets/screen-img/birthday.jpeg')}
          />

          {/* Profile Picture */}
          <Image
            style={styles.profilePicture}
            source={require('../../../assets/screen-img/org-profile.jpeg')}
          />

          {/* Text content */}
          <TouchableOpacity onPress={this.handleEditProfile}>
            <Text style={{ marginTop: 10, color: 'black', fontWeight: 'bold', marginLeft: '28%' }}>
              {this.state.isModalVisible ? this.state.editedName : this.state.newName}
            </Text>
          </TouchableOpacity>
        </View>

        {/**Logout && Editprofile Button */}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.touchStyle} onPress={this.handleEditProfile}>
            <View style={styles.btnStyle}>
              <Text style={styles.txtStyle}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchStyle} onPress ={() => navigation.navigate('Login')}>
            <View style={styles.btnStyle}>
              <Text style={styles.txtStyle}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{width:'100%', height: '100%', marginTop: 10, borderTopWidth: 1, borderColor: 'lightgray' }}>
            <TopTabNavigator />
          </View>

        {/* Modal for Editing Profile */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={this.toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontWeight: 'bold', marginBottom: 10, color: 'white' }}>Edit Profile Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter new name"
                value={this.state.tempEditedName}
                onChangeText={this.handleNameChange}
              />
              <TouchableOpacity onPress={this.handleSaveChanges}
                                style={styles.editBtn} >
                <Text style={styles.txtBtn}>Save Changes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.toggleModal}
                                style={styles.editBtn} >
                <Text style={styles.txtBtn}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 15,
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
  btnContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    color: 'white',
  },
  touchStyle: {
    backgroundColor: '#3B4B21',
    width: '40%',
    borderRadius: 90,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#3B4B21',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white'
  },
editBtn: {
  width: '50%',
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 90,
  marginBottom: 5,
  fontWeight: 'bold'
},
txtBtn:{
  color: '#3b4b21'
}
});

export default ProfileScreen;
