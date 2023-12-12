import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


class ChatAreaOrganizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
    this.scrollViewRef = React.createRef();
  }

  handleSend = () => {
    const { newMessage } = this.state;
    if (newMessage.trim() !== '') {
      this.setState(
        (prevState) => ({
          messages: [...prevState.messages, newMessage],
          newMessage: '',
        }),
        () => {
          this.scrollViewRef.current.scrollToEnd({ animated: true });
        }
      );
    }
  };

  render() {
    const { messages, newMessage } = this.state;
    const { navigation } = this.props;
    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress ={() => navigation.navigate('Chats')}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={40}
                color="#3B4B21"
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/screen-img/user-profile.jpeg')}
              style={styles.orgImage}
            />
            <Text style={styles.txtStyles}>Yoriichi Tsugikuni</Text>
          </View>
            
          <ScrollView
            style={styles.chatContainer}
            ref={this.scrollViewRef}
            onContentSizeChange={() => {
              this.scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            {messages.map((message, index) => (
              <View key={index} style={styles.messageContainer}>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Type your message..."
              placeholderTextColor="#7F7F7F"
              value={newMessage}
              onChangeText={(text) => this.setState({ newMessage: text })}
              onSubmitEditing={this.handleSend}

            />
            <TouchableOpacity onPress={this.handleSend}>
              <MaterialCommunityIcons
                name="send"
                size={30}
                color="#3B4B21"
                style={styles.sendIcon}
              />
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
  }
}

class ChatAreaUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
    this.scrollViewRef = React.createRef();
  }

  handleSend = () => {
    const { newMessage } = this.state;
    if (newMessage.trim() !== '') {
      this.setState(
        (prevState) => ({
          messages: [...prevState.messages, newMessage],
          newMessage: '',
        }),
        () => {
          this.scrollViewRef.current.scrollToEnd({ animated: true });
        }
      );
    }
  };

  render() {
    const { messages, newMessage } = this.state;
    const { navigation } = this.props;
    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress ={() => navigation.navigate('Chats')}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={40}
                color="#3B4B21"
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/screen-img/org-profile.jpeg')}
              style={styles.orgImage}
            />
            <Text style={styles.txtStyles}>Gol D. Roger</Text>
          </View>
            
          <ScrollView
            style={styles.chatContainer}
            ref={this.scrollViewRef}
            onContentSizeChange={() => {
              this.scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            {messages.map((message, index) => (
              <View key={index} style={styles.messageContainer}>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Type your message..."
              placeholderTextColor="#7F7F7F"
              value={newMessage}
              onChangeText={(text) => this.setState({ newMessage: text })}
              onSubmitEditing={this.handleSend}

            />
            <TouchableOpacity onPress={this.handleSend}>
              <MaterialCommunityIcons
                name="send"
                size={30}
                color="#3B4B21"
                style={styles.sendIcon}
              />
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  txtStyles: {
    color: '#3b4b21',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  orgImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  chatContainer: {
    flex: 4,
    padding: 10,
    marginBottom: 5
  },
  messageContainer: {
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%', 
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    padding: 10,
    backgroundColor: 'white',
  },
  inputField: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendIcon: {
    marginLeft: 10,
  },
});

export  {ChatAreaUser, ChatAreaOrganizer};
