import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";
import { Feather } from "@expo/vector-icons";

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
      <Feather name="user" size={150} color="black" />
      <Text style={styles.info}>Erica_Xue</Text>
      <Text style={styles.info}>erica.xue@sjsu.edu</Text>

      <View style={styles.logout}>
        <TouchableOpacity onPress={dummyLogin} style={styles.log}>
          <Text style={styles.logText}> Logout</Text>
          <MaterialIcons
            style={styles.logIcon}
            name="logout"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.delete}>
        <TouchableOpacity onPress={dummySignup} style={styles.del}>
          <Text style={styles.delText}> Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
