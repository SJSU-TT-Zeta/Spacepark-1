import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";

import styles from "./styles";

const Profile = (props) => {
  useEffect(() => {
    // Check if user is logged in
  }, []);

  const dummyLogin = () => {
    props.navigation.navigate("Login");
  };

  const dummySignup = () => {
    props.navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>Hello Erica Xue!</Text>
      <FontAwesome5 name="user-circle" size={24} color="black" />
      <Text>erica_xue</Text>
      <Text>erica.xue@sjsu.edu</Text>

      <TouchableOpacity onPress={dummyLogin} style={styles.logout}>
        <Text>Logout</Text>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={dummySignup} style={styles.delete}>
        <Text>Delete Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
