import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, buttonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={{ textAlign: "center", marginBottom: 10 }}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={buttonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
  },
});

export default AuthForm;
