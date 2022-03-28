import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TempGarage from "../pages/Garage/TempGarage";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Garage"
      activeColor="2C2C2C"
      inactiveColor="rgba(44,44,44,0.3)"
      //   barStyle={{ backgroundColor: "white" }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Garage"
        component={TempGarage}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="garage" size={24} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Frequency"
        component={TempGarage}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="bar-chart" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
