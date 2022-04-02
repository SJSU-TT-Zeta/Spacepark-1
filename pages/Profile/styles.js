import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    height: "100%",
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  headerItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    width: 38,
    height: 38,
    marginLeft: "auto",
    marginRight: 8,
    marginTop: 13,
  },
  formInput: {
    width: 300,
    height: 70,
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 45,
    marginTop: "2%",
    backgroundColor: "#15AB69",
    marginLeft: "auto",
    borderRadius: 10,
  },
  buttonLogin: {
    fontSize: 20,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#FFFFFF",
  },
  signQ: {
    marginTop: 40,
    fontSize: 18,
  },
  signUp: {
    fontSize: 20,
    color: "#15AB69",
    textDecorationLine: "underline",
  },
  buttonText: {
    fontSize: 20,
  },
  logout: {
    width: 200,
    height: 50,
    marginTop: "auto",
    marginBottom: "auto",
  },
  log: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  logIcon: {
    marginRight: "auto",
    marginLeft: 8,
  },
  logText: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 20,
    marginLeft: "auto",
  },
  delete: {
    width: 200,
    height: 50,
    marginTop: "auto",
    marginBottom: 10,
  },
  del: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  delText: {
    marginTop: "auto",
    fontSize: 20,
    color: "#E41919",
  },
  title: {
    fontSize: 25,
    marginTop: 10,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
  },
  content: {
    marginTop: "auto",
    marginBottom: "auto",
    transform: [{ translateY: -50 }],
    alignItems: "center",
    width: "100%",
  },
  titleLog: {
    fontSize: 28,
    marginBottom: 30,
  },
  formItem: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    height: 45,
    marginBottom: 15,
  },
  formText: {
    marginLeft: "auto",
    fontSize: 18,
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  formInput: {
    width: "90%",
    marginRight: "auto",
    borderWidth: 2,
    borderColor: "#15AB69",
    height: "100%",
    borderRadius: 10,
    paddingLeft: 10,
  },
  formItem1: {
    width: "30%",
  },
  formItem2: {
    width: "70%",
  },
  buttonHelper: {
    width: "90%",
    marginRight: "auto",
  },
});

export default styles;
