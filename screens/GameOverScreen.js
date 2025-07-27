import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View>
      <View style={styles.screen}>
        <View style={styles.infoView}>
          <Title>Game Over!</Title>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>
            Start New Game!
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
  },
  infoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    borderRadius: 150,
    borderWidth: 1,
    width: 300,
    height: 300,
    borderColor: "#929394",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  summaryText: {
    fontFamily: "openSansBold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  highlight: {
    fontFamily: "openSansRegular",
    color: "#ff0000",
  },
});
