import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "openSansBold",
    fontSize: 24,
    color: "#d64e3c",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#c71c66",
    padding: 12,
  },
});
