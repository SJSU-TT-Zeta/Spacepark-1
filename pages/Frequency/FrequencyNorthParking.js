import { Button, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

import logo from "../../assets/sp_logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LineChart } from "react-native-chart-kit";


const FrequencyNorthParking = (props) => {
  const goToGarageView = () => {
    props.navigation.navigate("Frequency");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>


      <View style={styles.header}>
        <MaterialIcons style={styles.arrow} name="arrow-back-ios" size={24} color="black" onPress={goToGarageView}/>
        <Image style={styles.headerItem} source={logo} />
      </View>

      <View style = {styles.content}>
        <Text style = {styles.title}>Occupancy Frequency</Text>
        

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" />
              <Text style={styles.dayLabel}>Sunday</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" />
              <Text style={styles.dayLabel}>Monday</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" />
              <Text style={styles.dayLabel}>Tuesday</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" /> 
              <Text style={styles.dayLabel}>Wednesday</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" />
              <Text style={styles.dayLabel}>Thursday</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" />
              <Text style={styles.dayLabel}>Friday</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dayItem}>
          <TouchableOpacity style={styles.button}>
              <AntDesign style={styles.downArrow} name="caretdown" size={24} color="black" />
              <Text style={styles.dayLabel}>Saturday</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
};

export default FrequencyNorthParking;
