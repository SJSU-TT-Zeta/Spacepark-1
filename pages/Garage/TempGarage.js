import { Button, Text, View } from "react-native";

const TempGarage = (props) => {
  const goToLoginView = () => {
    // console.log(props);
    props.navigation.navigate("Login");
  };

  return (
    <View>
      <Text>This is a temp file for Garage</Text>
      <Button onPress={goToLoginView} title="Go to Login" />
    </View>
  );
};

export default TempGarage;
