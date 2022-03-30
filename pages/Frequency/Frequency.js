import { Button, SafeAreaView, Text, View } from "react-native";

const Frequency = (props) => {
  const goToGarageView = () => {
    // console.log(props);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>This is a temp file for Frequency</Text>
      <Button onPress={goToGarageView} title="Go to Garage" />
    </SafeAreaView>
  );
};

export default Frequency;
