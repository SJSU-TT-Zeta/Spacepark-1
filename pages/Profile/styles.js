import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  formInput: {
    width: 300,
    height: 70,
    borderWidth: 1,
  },
  button: {
    width: 200,
    height: 100,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  logout: {
    width: 100,
    height: 50,
    borderWidth: 1,
  },

  delete: {
    width: 100,
    height: 50,
    borderWidth: 1,
  },
});

export default styles;
