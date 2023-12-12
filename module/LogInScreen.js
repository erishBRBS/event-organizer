import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Modal } from 'react-native';

class LogInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      verificationCode: '',
      showVerificationInput: false,
      isModalVisible: false,
      selectedOption: '',
    };
  }

  handleSendVerificationCode = () => {
    const { email } = this.state;

    if (email.trim() === '') {
      alert('Please enter your email before sending the verification code.');
    } else {
      this.setState({
        showVerificationInput: true,
      });
    }
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleOptionSelect = (option) => {
    this.setState({ selectedOption: option });
    this.toggleModal();
  };

  handleVerify = () => {
    const { verificationCode } = this.state;

    if (verificationCode.trim() === '') {
      alert('Please enter the verification code.');
    } else {
      // Add your logic for verification here
      this.props.navigation.navigate('Verification'); // navigate if verification code is provided
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/screen-img/logo.png")} style={styles.logoStyle} />
        <View style={styles.titleContainer}>
          <View style={styles.line}></View>
          <Text style={{color: '#3B4B21'}}>Log in with email</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              style={styles.userInput}
              placeholder='Email'
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
          </View>
          {this.state.showVerificationInput && (
            <View>
              <TextInput
                style={styles.userInput2}
                placeholder='Verification Code'
                value={this.state.verificationCode}
                onChangeText={text => this.setState({ verificationCode: text })}
              />
              <TouchableOpacity>
                <Text style={styles.resendText}>Didn't receive a code?
                  <Text style={{ color: 'lightblue' }}>Resend code...</Text>
                </Text>
              </TouchableOpacity>
              {this.state.verificationCode.trim() === '' ? (
                <TouchableOpacity
                style={styles.verifyBtn}
                onPress={this.handleVerify}
              >
                <Text style={styles.verifyBtnText}>Verify</Text>
              </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.verifyBtn}
                  onPress={this.handleVerify}
                >
                  <Text style={styles.verifyBtnText}>Verify</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {!this.state.showVerificationInput && (
            <TouchableOpacity
              style={styles.verifyBtn}
              onPress={this.handleSendVerificationCode}
            >
              <Text style={styles.verifyBtnText}>Send Verification Code</Text>
            </TouchableOpacity>
          )}
          <View style={styles.titleContainer}>
            <View style={styles.line2}></View>
            <Text style={{color: 'white'}}>or</Text>
            <View style={styles.line2}></View>
          </View>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={this.toggleModal}
          >
            <Text style={styles.signupBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeaderText}>Select type of user:</Text>
              <View style={styles.chooseType}>
                <View style={styles.userContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModal();
                      navigation.navigate('Sign Up Organizer');
                    }}
                  >
                    <Image source={require("../assets/screen-img/organizer.png")} style={styles.pick} />
                    <Text style={styles.userTypeText}>Organizer</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.userContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModal();
                      navigation.navigate('Sign Up User');
                    }}
                  >
                    <Image source={require("../assets/screen-img/user.png")} style={styles.pick} />
                    <Text style={styles.userTypeText}>User</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={this.toggleModal}
              >
              <View style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </View>
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
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    line: {
        width: 100,
        backgroundColor: '#3B4B21',
        height: 1,
    },
    line2: {
        width: 100,
        backgroundColor: 'white',
        height: 1,
    },
    logoStyle: {
      width: 410,
      height: 270,
    },
    inputContainer: {
      marginTop: 10,
      width: 360,
      height: 400,
      backgroundColor: '#3B4B21',
      alignItems: 'center',
      borderRadius: 10,
      gap: 10,
      shadowColor: "#3b4b21",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity:  0.24,
      shadowRadius: 13.84,
      elevation: 17
    },
    userInput: {
      height: 40,
      width: 310,
      marginTop: 10,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    userInput2: {
      height: 40,
      width: 310,
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 5,
    },
    resendText:{
        color: 'white',
        fontSize: 12
    },
    verifyBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: 'white',
      width: 310,
      borderRadius: 10,
      marginTop: 5
    },
    verifyBtnText:{
      fontWeight: 'bold',
      color: '#3b4b21'
    },
    signupBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: 'white',
      width: 310,
      borderRadius: 10,
      marginTop: 10,
    },
    signupBtnText: {
      fontWeight: 'bold',
      color: '#3b4b21'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: 400,
      backgroundColor: '#3B4B21',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
    modalHeaderText:{
        color: 'white',
        paddingTop: 10
    },
    chooseType: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
    },
    userContainer: {
      backgroundColor: 'white',
      height: 300,
      width: 190,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    pick: {
      height: 220,
      width: 170, 
      resizeMode: 'contain'
    },
    userTypeText:{
        color: '#3b4b21'
    },
    cancelBtn:{
        marginBottom: 10,
        height: 20,
        width: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelBtnText:{
        fontWeight: 'bold',
        color: '#3b4b21'
    }
  });

export default LogInScreen;