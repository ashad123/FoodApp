import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

const OrderProcessed = () => {
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    const itemName = 'Chicken Tikka';
    const price = '₹10';

    // Show an alert when "Buy Now" is pressed
    Alert.alert(
      'Confirmation',
      `Item Name: ${itemName}\nPrice: ${price}\nQuantity: ${quantity}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // Handle cancellation
            Alert.alert('Order canceled');
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Handle confirmation
           Alert.alert('Order success');
          },
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Container for image */}
      <View style={styles.imageContainer}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/chicken.jpg')}
          style={styles.image}
        />
      </View>
      </View>

      {/* Container for item details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}>Chicken Tikka</Text>
        <Text style={styles.itemPrice}>Price: &#8377;10</Text>

        <View style={styles.quantityContainer}>
          <Text style={styles.itemQuantity}>Quantity:</Text>
          <TextInput
            style={styles.quantityInput}
            value={String(quantity)}
            onChangeText={(value) => setQuantity(parseInt(value) || 0)}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.description}>
          Item description goes here. You can add a longer description about the item.Item description goes here. You can add a  Item description goes here. You can add a longer 
        </Text>
      </View>

      {/* Buy button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
   imageContainer: {
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 3, // Apply elevation here
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
    left: 30,
  },
  itemName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  itemQuantity: {
    fontSize: 18,
    fontWeight: '500',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginLeft: 10,
    width: 50,
  },
  description: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '400',
  },
  buyButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    // textAlign: 'right',
    right: 125,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderProcessed;
