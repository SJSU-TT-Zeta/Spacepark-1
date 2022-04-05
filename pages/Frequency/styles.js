import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerItem: {
    marginLeft: "auto",
    marginRight: 15,
    width: 30, 
    height: 30, 
  },
  arrow: {
      alignItems: "flex-start",
      marginLeft: "5%", 
  }, 
  refresh: {},
  title: {
    fontSize: 30,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  dayItem: {
    width: Dimensions.get("window").width * 0.85,
    height: 50,
    marginTop: "5%", 
  },
  circle: {
    width: 120,
  },
  contentItemWrap: {
    flexDirection: "row",
  },
  contentItemWrapWrap: {
    flexDirection: "column",
  },
  button: {
    width: Dimensions.get("window").width * 0.85,
    height: "100%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#15AB69",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  dayLabel: {
      fontSize: 27,
      alignItems: "center",
      textAlign: "center",
      fontWeight: "normal",

  },
  garageOption: {
    width: Dimensions.get("window").width * 0.85,
    height: 50,
    marginTop: "5%",
    
  }, 
  garageLabel: {
      fontSize: 24,
      fontWeight: "normal",
      marginTop: "auto",
      marginBottom: "auto",
  },
  otherLabel: {
      fontSize: 20, 
      fontWeight: "normal", 
      alignItems: "center",
      marginTop: "auto",
  },
  downArrow: {
      marginLeft: 10, 
      marginRight: 10, 

  }
});

export default styles;
