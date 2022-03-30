import { NavigationContainer } from "@react-navigation/native";

import { StatusBar, View } from "react-native";

import BottomTab from "./navigators/TabNavigator";

import "react-native-gesture-handler";

const App = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
};

export default App;
