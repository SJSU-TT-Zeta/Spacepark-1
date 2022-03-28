import { NavigationContainer } from "@react-navigation/native";

import { StatusBar, View } from "react-native";

import AppStackNavigator from "./navigators/AppStackNavigator";

const App = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
