import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({ onPickNumber }) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(enteredText) {
    setInputText(enteredText);
  }

  function handleInputConfirm() {
    const chosenNumber = parseInt(inputText);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Please enter a number",
        "Number has to be a number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleInputReset }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  function handleInputReset() {
    setInputText("");
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Guess My Number !</Text>
      <Text>Enter a Number...</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleInputChange}
        value={inputText}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleInputReset}>
          <MaterialCommunityIcons name="lock-reset" size={24} color="#ffffff" />
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={handleInputConfirm}>
          <Fontisto name="heart-eyes" size={24} color="#ffffff" />
          Confirm
        </PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 2,
    alignItems: "center",
    marginTop: 3,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 24,
    marginTop: 10,
    textAlign: "center",
    color: "#ddb52f",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#530a75",
    marginBottom: 2,
  },
});
