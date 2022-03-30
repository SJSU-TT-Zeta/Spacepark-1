import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";

import styles from "./styles";

const Login = (props) => {
  useEffect(() => {
    // Check if user is logged in
  }, []);

  const dummyLogin = () => {
    props.navigation.navigate("Profile");
  };

  const dummySignup = () => {
    props.navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.content}>
        <View style={styles.formItem}>
          <Text style={styles.formText}>Email</Text>
          <View>
            <TextInput
              style={styles.formInput}
              placeholder={"Why hello there"}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formText}>Username</Text>
          <View>
            <TextInput
              style={styles.formInput}
              placeholder={"Why hello there"}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formText}>Password</Text>
          <TextInput style={styles.formInput} placeholder={"Why hello there"} />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formText}>Confirm Password</Text>
          <TextInput style={styles.formInput} placeholder={"Why hello there"} />
        </View>

        <TouchableOpacity onPress={dummySignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
