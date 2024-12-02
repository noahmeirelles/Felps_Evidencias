import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 95,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom:3
  },
  text2:{
    fontSize: 20,
    display: "inline-block",
  },
  bottomline:{
    backgroundColor: "black",
    width: 900,
    height:3,
    borderRadius: 10,
  },
  all:{
    marginTop: 24,
    gap: 5
  }
});

export default styles;
