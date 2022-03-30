import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import GarageStackNavigator from "./GarageNavigator";
import ProfileStackNavigator from "./ProfileNavigator";
import FrequencyStackNavigator from "./FrequencyNavigator";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="GarageStack"
      activeColor="#2C2C2C"
      inactiveColor="rgba(44,44,44,0.3)"
      //   barStyle={{ backgroundColor: "white" }}
      screenOptions={{
        headerShown: false,
      }}
      backBehavior={"history"}
    >
      <Tab.Screen
        name="GarageStack"
        component={GarageStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="garage"
                size={30}
                color={color}
                style={{ marginTop: 5 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FrequencyStack"
        component={FrequencyStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name="bar-chart"
                size={24}
                color={color}
                style={{ marginTop: 8 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <FontAwesome5
                name="user-circle"
                size={24}
                color={color}
                style={{ marginTop: 8 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
