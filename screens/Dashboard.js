import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Dashboard = ( {navigation} ) => {
  // Sample data for the cards
  const cardData = [
    { name: 'Delhi Darbar', image: require('../assets/rest/img1.jpg') },
    { name: 'House of Delhi', image: require('../assets/rest/images2.jpg') },
    { name: 'Aslam Chicken', image: require('../assets/rest/img3.jpg') },
    { name: 'Delhi Darbar', image: require('../assets/rest/img3.jpg') },
    { name: 'House of Delhi', image: require('../assets/rest/images5.jpg') },
    { name: 'Aslam Chicken', image: require('../assets/rest/img6.jpg') },
    { name: 'Delhi Darbar', image: require('../assets/rest/images5.jpg') },
    { name: 'House of Delhi', image: require('../assets/rest/img1.jpg') },
    { name: 'Aslam Chicken', image: require('../assets/rest/img3.jpg') },
    { name: 'Delhi Darbar', image: require('../assets/rest/img3.jpg') },
    { name: 'House of Delhi', image: require('../assets/rest/images2.jpg') },
    { name: 'Aslam Chicken', image: require('../assets/menu.jpg') },
    // Add more cards as needed
  ];

  // Split the cardData into arrays of two cards each
  const columns = [];
  while (cardData.length) {
    columns.push(cardData.splice(0, 2));
  }

  const handleNavigation = (cardName) => {
    switch (cardName) {
      case 'Delhi Darbar':
        navigation.navigate('MenuList');
        break;
      case 'House of Delhi':
        navigation.navigate('MenuList');
        break;
      case 'Aslam Chicken':
        navigation.navigate('MenuList');
        break;
      // Add more cases for other text options as needed
      default:
        // Navigation for other text options
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
      {columns.map((column, columnIndex) => (
        <View key={columnIndex} style={styles.column}>
          {column.map((card, index) => (
            <View key={index} style={styles.card}>
              <Image source={card.image} style={styles.cardImage} />
              <TouchableOpacity onPress={() => handleNavigation(card.name)}>
              <Text style={styles.cardText}>{card.name}</Text>
              </TouchableOpacity>
             
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    width: '48%', // Adjust width for two cards per row
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    // width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default Dashboard;
