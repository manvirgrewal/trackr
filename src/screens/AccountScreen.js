import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { Spacer } from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={styles.signout}>
      <Button onPress={signout} title="Sign Out!"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  signout: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    width: 125,
  },
});

export default AccountScreen;
