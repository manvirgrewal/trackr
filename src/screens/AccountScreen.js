import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { Spacer } from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.accountView}>
      <Button
        style={styles.signoutBtn}
        onPress={signout}
        title="Sign Out"
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  accountView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  signoutBtn: {
    alignSelf: "center",
    width: 125,
  },
});

export default AccountScreen;
