import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import LottieView from "lottie-react-native";

class SignUpCompleteScreenOrganizer extends Component {
    constructor(props) {
        super(props);
        }
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
            <Text style={styles.txtTitle}>Sign Up Completed! Organizer</Text>
            <View style={{borderWidth: 10, borderColor: '#3B4B21', borderRadius: 10}}>
                <View style={styles.animatedImg}>
                <LottieView
                    style={{flex:1, width: 350, resizeMode: 'contain', }}
                    source={require('../signupComplete.json')}
                    autoPlay= {true}
                    loop={false}
                />
                <TouchableOpacity onPress ={() => navigation.navigate('TabsOrg')}>
                <View style={styles.verifiedBtn}>
                <Text style={styles.verifiedTxt}>Proceed</Text>
                </View>
                </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

class SignUpCompleteScreenUser extends Component {
    constructor(props) {
        super(props);
          }
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
            <Text style={styles.txtTitle}>Sign Up Completed! User</Text>
            <View style={{borderWidth: 10, borderColor: '#3B4B21', borderRadius: 10}}>
                <View style={styles.animatedImg}>
                <LottieView
                    style={{flex:1, width: 350, resizeMode: 'contain', }}
                    source={require('../signupComplete.json')}
                    autoPlay= {true}
                    loop={false}
                />
                <TouchableOpacity onPress ={() => navigation.navigate('TabsUser')}>
                <View style={styles.verifiedBtn}>
                <Text style={styles.verifiedTxt}>Proceed</Text>
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
    txtTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3B4B21'
    },
    animatedImg:{
        alignItems: 'center',
        backgroundColor: 'white',
        height: 500,
    },
    verifiedBtn:{
        width: 310,
        height: 40,
        backgroundColor: '#3B4B21',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10
    },
    verifiedTxt:{
        marginBottom: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export {SignUpCompleteScreenUser, SignUpCompleteScreenOrganizer};