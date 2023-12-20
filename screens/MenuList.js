import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,} from 'react-native';

const MenuList = ({navigation}) => {
  // Card component
  const cardData = [
    { name: 'Chiken Biryani', image: require('../assets/chicken.jpg') , price: 250},
    { name: 'Paneer', image: require('../assets/download.jpg'), price: 200},
    { name: 'Butter Chiken', image: require('../assets/menu.jpg'), price: 150 },
    { name: 'Rosted', image: require('../assets/chicken.jpg'), price: 300 },
    { name: 'House of Delhi', image: require('../assets/download.jpg'), price: 100 },
    { name: 'Aslam Chicken', image: require('../assets/menu.jpg'), price: 350 },
    { name: 'Delhi Darbar', image: require('../assets/chicken.jpg'), price: 200 },
    { name: 'House of Delhi', image: require('../assets/download.jpg'), price: 450 },
    { name: 'Aslam Chicken', image: require('../assets/menu.jpg'), price: 100 },
    { name: 'Delhi Darbar', image: require('../assets/chicken.jpg'), price: 180 },
   
    // Add more cards as needed
  ];

  // Split the cardData into arrays of two cards each
  const columns = [];
  while (cardData.length) {
    columns.push(cardData.splice(0, 2));
  }

//   const handleNavigation = (cardName) => {
//     switch (cardName) {
//       case 'Chiken Biryani':
//         navigation.navigate('OrderProcess',{item: cardData});
//         break;
//       case 'Paneer':
//         navigation.navigate('MenuList1');
//         break;
//       case 'Butter Chiken':
//         navigation.navigate('MenuList2');
//         break;
//       // Add more cases for other text options as needed
//       default:
//         // Navigation for other text options
//         break;
//     }
//   };

const handleNavigation = (item) => {
    navigation.navigate('OrderProcess', {item});
  };
  

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
    <Text style={styles.header}>Delhi Darbar</Text>
    <Text style={styles.header1}>Menu List of Delhi darbar</Text>
    <ScrollView >
      {columns.map((column, columnIndex) => (
        <View key={columnIndex} style={styles.column}>
          {column.map((card, index) => (
            <View key={index} style={styles.card}>
              <Image source={card.image} style={styles.cardImage} />
              <TouchableOpacity onPress={() => handleNavigation(card)}>
              <Text style={styles.cardText}>{card.name}</Text>
              
              </TouchableOpacity>
              <Text style={styles.cardText1}>Price: &#8377;{card.price} </Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
    container: {
      paddingTop: 48,
    },
    header: {
        fontSize: 18,
        fontWeight: "900",
        // marginBottom: 20,
        // left: 10,
        paddingTop: 15,
        paddingLeft: 10,
        // textAlign: 'center',
        // borderBottomWidth: 1,
        // width: '45%',
        width: '100%', // Adjust width for two cards per row
        height: 55,
        backgroundColor: '#fff',
        // borderRadius: 10,
        // elevation: 3,
        // alignItems: 'center',
        // justifyContent: 'center',
        // position: 'fixed',

      },
      header1: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 20,
        color: 'grey',
        left: 10,
        borderBottomWidth: 1,
        width: '36%',
        paddingTop: 40,
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
      fontWeight: '700',
      marginTop: 5,
      // width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      
    },
    cardText1: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        // width: '80%',
        // borderBottomWidth: 1,
        // borderBottomColor: 'black',
      },
  });
  

export default MenuList;
