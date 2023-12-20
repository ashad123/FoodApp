import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install this package

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/register", {
        email: email,
        password: password,
      });

      if (response.data.token) {
        // Handle successful signup, for example, store user token or navigate to another screen

        Alert.alert("Success", "Signed up successfully!");
        preventDefau
        // navigation.navigate("Login");
      } else {
        Alert.alert("Error", "Signup failed. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to sign up. Please try again.");
    }
  };

  const handleLogin = () => {
       navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonText}>SIGN-UP</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.clicktext} onPress={handleLogin}>
        <Text style={styles.buttonLogin}>Already Have an Account?</Text>
        <View style={styles.line}></View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  clicktext: {
    paddingTop: 50,
    alignItems: "center",
  },
  buttonLogin: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  
  
});

export default SignUp;
