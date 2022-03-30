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
    props.navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.content}>
        <View style={styles.formItem}>
          <Text style={styles.formText}>Username</Text>
          <View>
            <TextInput
              style={styles.formInput}
              placeholder={"Why hello there"}
            />
          </View>
        </View>
        <View>
          <Text style={styles.formText}>Password</Text>
          <TextInput style={styles.formInput} placeholder={"Why hello there"} />
        </View>
        <TouchableOpacity onPress={dummyLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signQ}>Don't have an account yet?</Text>
      <TouchableOpacity onPress={dummySignup}>
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
