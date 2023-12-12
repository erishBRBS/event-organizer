import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput placeholder='Search...'>       
        </TextInput>
      </View>
    );
  }
}

const data = [
  { id: '1', title: 'Birthday', image: require("../../../assets/screen-img/birthday.jpeg") },
  { id: '2', title: 'Wedding', image: require("../../../assets/screen-img/wedding.jpeg") },
  { id: '3', title: 'Concert', image: require("../../../assets/screen-img/concert.jpeg")},
  { id: '4', title: 'Conference', image: require("../../../assets/screen-img/conference.jpeg")},
];


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.componentContainer}>
            <View style={styles.txtContainer}>
              <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#3B4B21' }}>Welcome</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Gather your needs today!</Text>
            </View>
            <Image source={require("../../../assets/screen-img/user-profile.jpeg")} style={styles.imageStyle} />
          </View>
        </View>
        <SearchBar />
        <View style={styles.topEventsContainer}>
          <Text style={{fontSize:18, fontWeight: 'bold', alignSelf: 'flex-start'
                        , marginLeft: '5%', color: 'white'}}>Featured Events</Text>
          <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}

          decelerationRate="fast"
        />
        </View>
        {/* ScrollView */}
        <View style={{flex: 1, flexDirection: 'column'}}>
          <ScrollView>
        <View style={styles.organizerSection}>
          <View style={styles.organizerContainer}>
            <View style={styles.organizerProfile}>
              <TouchableOpacity onPress={() => navigation.navigate('Organizer')}>
            <Image source={require("../../../assets/screen-img/org-profile.jpeg")} style={styles.orgImage}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 10, paddingLeft: 5}}>Gol D. Roger</Text>
            </View>
            <View style={{marginTop:2, borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: 2}}>
            <Image source={require("../../../assets/screen-img/wedding.jpeg")} style={styles.eventImage}/>
            </View>
            <View style={{flexDirection: 'row', gap:56}}>
              <Text style={{fontSize: 10}}>Wedding Organizer</Text>
              <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="star" size={15} color="gold"  />
              <Text style={{fontSize: 10}}>4.8</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.toggleModal()}>
              <View style={{backgroundColor:'#3B4B21', borderRadius: 90, width: '50%',alignSelf: 'center',}}>
                <Text style={{fontSize: 12, color: 'white', alignSelf: 'center'}}>View Details</Text>
              </View>
            </TouchableOpacity>
 
            <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 0, color: 'white'}}>Details:</Text>
              {/* Add more details here */}
              <Text style={{color: 'white'}}>Wedding Organizer 
                <Text style={{color: 'white'}}>
                <MaterialCommunityIcons name="star" size={15} color="gold"/>4.8
                </Text>
                </Text>
              <View style={{backgroundColor: 'white', height: 1, width: '80%'}}></View>
              <Text style={{color: 'white'}}>A, B, C, D, E, F, G, H, I, J, K, L, M, O, P</Text>
              <TouchableOpacity style={styles.modalButton} onPress={this.toggleModal}>
                <Text style={{ fontSize: 16, color: '#3B4B21' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

          </View>
          <View style={styles.organizerContainer}>
            <View style={styles.organizerProfile}>
            <Image source={require("../../../assets/screen-img/org-profile.jpeg")} style={styles.orgImage}/>
            <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 10, paddingLeft: 5}}>Edward Newgate</Text>
            </View>
            <View style={{marginTop:2, borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: 2}}>
            <Image source={require("../../../assets/screen-img/birthday.jpeg")} style={styles.eventImage}/>
            </View>
            <View style={{flexDirection: 'row', gap:56}}>
              <Text style={{fontSize: 10}}>Birthday Organizer</Text>
              <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="star" size={15} color="gold"  />
              <Text style={{fontSize: 10}}>4.8</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{backgroundColor:'#3B4B21', borderRadius: 90, width: '50%',alignSelf: 'center'}}>
                <Text style={{fontSize: 10, color: 'white', alignSelf: 'center'}}>View Details</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.organizerSection}>
          <View style={styles.organizerContainer}>
            <View style={styles.organizerProfile}>
            <Image source={require("../../../assets/screen-img/org-profile.jpeg")} style={styles.orgImage}/>
            <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 10,paddingLeft: 5}}>Monkey D. Luffy</Text>
            </View>
            <View style={{marginTop:2, borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: 2}}>
            <Image source={require("../../../assets/screen-img/concert.jpeg")} style={styles.eventImage}/>
            </View>
            <View style={{flexDirection: 'row', gap:56}}>
              <Text style={{fontSize: 10}}>Wedding Organizer</Text>
              <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="star" size={15} color="gold"  />
              <Text style={{fontSize: 10}}>4.8</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{backgroundColor:'#3B4B21', borderRadius: 90, width: '50%',alignSelf: 'center'}}>
                <Text style={{fontSize: 10, color: 'white', alignSelf: 'center'}}>View Details</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.organizerContainer}>
            <View style={styles.organizerProfile}>
            <Image source={require("../../../assets/screen-img/org-profile.jpeg")} style={styles.orgImage}/>
            <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 10, paddingLeft: 5}}>Shimotsuki Zoro</Text>
            </View>
            <View style={{marginTop:2, borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: 2}}>
            <Image source={require("../../../assets/screen-img/conference.jpeg")} style={styles.eventImage}/>
            </View>
            <View style={{flexDirection: 'row', gap:56}}>
              <Text style={{fontSize: 10}}>Birthday Organizer</Text>
              <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="star" size={15} color="gold"  />
              <Text style={{fontSize: 10}}>4.8</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{backgroundColor:'#3B4B21', borderRadius: 90, width: '50%',alignSelf: 'center'}}>
                <Text style={{fontSize: 10, color: 'white', alignSelf: 'center'}}>View Details</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
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
    gap: 10
  },
  titleContainer: {
    height: 'auto',
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 10
  },
  componentContainer: {
    flexDirection: 'row',
    gap: 23
  },
  txtContainer: {
    flexDirection: 'column',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 2,
    borderColor: '#3B4B21'
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.00,
    elevation: 10
  },
  topEventsContainer:{
    width: '100%',
    borderColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B4B21'
  },
  eventImage:{
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  item: {
    width: 200,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  organizerSection:{
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 4,
    marginTop: 5
  },
  organizerContainer:{
    height: 'auto',
    width: '49%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10
  },
  organizerProfile:{
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
    borderColor: '#3B4B21'
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
    gap: 10,
    padding: 5
  },
  modalButton:{
    marginBottom: 10,
    height: 20,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

export default HomeScreen;