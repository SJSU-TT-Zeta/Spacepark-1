import { Button, SafeAreaView, Text, View } from "react-native";

const FrequencyChart = (props) => {
  const goToGarageView = () => {
    // console.log(props);
    props.navigation.navigate("BottomTab");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>This is a temp file for FrequencyChart</Text>
      <Button onPress={goToGarageView} title="Go to Garage" />
    </SafeAreaView>
  );
};

export default FrequencyChart;
