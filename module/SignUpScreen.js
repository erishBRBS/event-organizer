import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';


class SignUpScreenOrganizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      verificationCode: '',
      showVerificationInput: false
    };
  }

  handleSendVerificationCode = () => {
    const { email, firstname, lastname } = this.state;

    if (!email.trim() || !firstname.trim() || !lastname.trim()) {
      alert('Please fill out all fields.');
    } else {
      this.setState({
        showVerificationInput: true,
      });
    }
  };

  handleVerify = () => {
    const { verificationCode } = this.state;

    if (verificationCode.trim() === '') {
      alert('Please enter the verification code.');
    } else {
      this.props.navigation.navigate('Complete Organizer');
    }
  };

  render() {
    const { navigation } = this.props;
    const { showVerificationInput } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/screen-img/fill-out.png")} style={styles.imageStyle} />
        <View style={styles.inputsmainContainer}>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
          <View style={styles.inputsContainer}>
            <Text style={{ color: 'white' }}>Email:</Text>
            <TextInput
              style={styles.txtInputStyles}
              onChangeText={(text) => this.setState({ email: text })}
            />

            <Text style={{ color: 'white' }}>Firstname:</Text>
            <TextInput
              style={styles.txtInputStyles}
              onChangeText={(text) => this.setState({ firstname: text })}
            />

            <Text style={{ color: 'white' }}>Lastname:</Text>
            <TextInput
              style={styles.txtInputStyles}
              onChangeText={(text) => this.setState({ lastname: text })}
            />

            <View style={{ backgroundColor: 'white', height: 2, marginTop: 5 }}></View>

            {showVerificationInput ? (
              // Verification Input Section
              <View style={{marginTop: 5}}>
                <Text style={{ color: 'white' }}>Verification Code:</Text>
                <TextInput
                  style={styles.txtInputStyles}
                  value={this.state.verificationCode}
                  onChangeText={(text) => this.setState({ verificationCode: text })}
                />
                <TouchableOpacity>
                  <Text style={styles.resendText}>Didn't receive a code?
                    <Text style={{ color: 'lightblue' }}> Resend code...</Text>
                  </Text>
                </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.verifyBtn}
                    onPress={this.handleVerify}
                  >
                    <Text style={styles.verifyBtnText}>Verify</Text>
                  </TouchableOpacity>
              </View>
            ) : (
              // Send Verification Code Button
              <TouchableOpacity onPress={this.handleSendVerificationCode}>
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  backgroundColor: 'white',
                  marginTop: 40,
                  borderRadius: 10
                }}>
                  <Text style={{ color: '#3B4B21', fontSize: 15, fontWeight: 'bold' }}>Send Verification Code</Text>
                </View>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10
              }}>
                <Text style={{ color: '#3B4B21', fontSize: 15, fontWeight: 'bold' }}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

class SignUpScreenUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      verificationCode: '',
      showVerificationInput: false
    };
  }

  handleSendVerificationCode = () => {
    const { email, firstname, lastname } = this.state;

    if (!email.trim() || !firstname.trim() || !lastname.trim()) {
      alert('Please fill out all fields.');
    } else {
      this.setState({
        showVerificationInput: true,
      });
    }
  };

  handleVerify = () => {
    const { verificationCode } = this.state;

    if (verificationCode.trim() === '') {
      alert('Please enter the verification code.');
    } else {
      this.props.navigation.navigate('Sign Up Complete User');
    }
  };

  render() {
    const { navigation } = this.props;
    const { showVerificationInput } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/screen-img/fill-out.png")} style={styles.imageStyle} />
        <View style={styles.inputsmainContainer}>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
          <View style={styles.inputsContainer}>
            <Text style={{ color: 'white' }}>Email:</Text>
            <TextInput
              style={styles.txtInputStyles}
              onChangeText={(text) => this.setState({ email: text })}
            />

            <Text style={{ color: 'white' }}>Firstname:</Text>
            <TextInput
              style={styles.txtInputStyles}
              onChangeText={(text) => this.setState({ firstname: text })}
            />

            <Text style={{ color: 'white' }}>Lastname:</Text>
            <TextInput
              style={styles.txtInputStyles}
              onChangeText={(text) => this.setState({ lastname: text })}
            />

            <View style={{ backgroundColor: 'white', height: 2, marginTop: 5 }}></View>

            {showVerificationInput ? (
              // Verification Input Section
              <View style={{marginTop: 5}}>
                <Text style={{ color: 'white' }}>Verification Code:</Text>
                <TextInput
                  style={styles.txtInputStyles}
                  value={this.state.verificationCode}
                  onChangeText={(text) => this.setState({ verificationCode: text })}
                />
                <TouchableOpacity>
                  <Text style={styles.resendText}>Didn't receive a code?
                    <Text style={{ color: 'lightblue' }}> Resend code...</Text>
                  </Text>
                </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.verifyBtn}
                    onPress={this.handleVerify}
                  >
                    <Text style={styles.verifyBtnText}>Verify</Text>
                  </TouchableOpacity>
              </View>
            ) : (
              // Send Verification Code Button
              <TouchableOpacity onPress={this.handleSendVerificationCode}>
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  backgroundColor: 'white',
                  marginTop: 40,
                  borderRadius: 10
                }}>
                  <Text style={{ color: '#3B4B21', fontSize: 15, fontWeight: 'bold' }}>Send Verification Code</Text>
                </View>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10
              }}>
                <Text style={{ color: '#3B4B21', fontSize: 15, fontWeight: 'bold' }}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: 150,
    width: 200,
    resizeMode: 'contain'
  },
  inputsContainer: {
    margin: 10,
    width: 310,
  },
  txtInputStyles: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 5,
  },
  inputsmainContainer: {
    backgroundColor: '#3B4B21',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  verifyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
  },
  verifyBtnText: {
    color: '#3B4B21',
    fontSize: 15,
    fontWeight: 'bold',
  },
  resendText: {
    color: 'white',
    fontSize: 12,
  },
});

export {SignUpScreenUser, SignUpScreenOrganizer};