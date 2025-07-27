import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Logs from "../components/Logs";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCount, setGuessCount] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCount.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie me Dude!", "You know that this is wrong...", [
        { message: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessCount((prevGuessCount) => [newRndNumber, ...prevGuessCount]);
  }

  const guessRoundsListLength = guessCount.length;

  return (
    <View>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text style={styles.highOrLowText}>Higher or lover ?</Text>
          <Text style={styles.highOrLowText}>My Number -{userNumber}-</Text>
          <View style={styles.guessButtons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minuscircleo" size={24} color="#ffffff" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="pluscircleo" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={guessCount}
            keyExtractor={(item) => item}
            renderItem={(itemData) => (
              <Logs
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              ></Logs>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  highOrLowText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  guessButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
});
