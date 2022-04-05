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
      <Text style={styles.titleSign}>Sign Up</Text>
      <View style={styles.content}>
        <View style={styles.formItem}>
          <Text style={styles.formText}>Email</Text>
          <View>
            <TextInput
              style={styles.userInput1}
              placeholder={"Enter email"}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formText}>Username</Text>
          <View>
            <TextInput
              style={styles.userInput2}
              placeholder={"Enter username"}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formText1}>Password</Text>
          <TextInput style={styles.passInput1} placeholder={"Enter password"} />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formText2}>Confirm</Text>
          <Text style={styles.formText3}>Password</Text>
          <TextInput style={styles.passInput2} placeholder={"Re-enter password"} />
        </View>

        <TouchableOpacity onPress={dummySignup} style={styles.buttonSign}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
