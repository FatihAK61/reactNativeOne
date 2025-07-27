import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [currentRounds, setCurrentRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    openSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setCurrentRounds(numberOfRounds);
  }

  function newGameHandler() {
    setUserNumber(null);
    setCurrentRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={currentRounds}
        onStartNewGame={newGameHandler}
      />
    );
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#d1458b", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <View style={styles.container}>{screen}</View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    marginTop: 55,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "#a0f98f",
    alignItems: "center",
    justifyContent: "center",
  },
});
