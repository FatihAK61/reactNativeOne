import { StyleSheet, Text, View } from "react-native";

function Logs({ roundNumber, guess }) {
  return (
    <View style={styles.logEntry}>
      <View style={styles.logContent}>
        <Text style={styles.message}>
          #{roundNumber} Deneme - Tahmin: {guess}
        </Text>
      </View>
    </View>
  );
}

export default Logs;

const styles = StyleSheet.create({
  logEntry: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#eefea0",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  logContent: {
    flex: 1,
    padding: 12,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "openSansBold",
    color: "#e01818",
    textAlign: "center",
  },
});
