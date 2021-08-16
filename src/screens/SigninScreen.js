import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForm
        headerText="Sign In to Tracker!"
        errorMessage={state.errorMessage}
        buttonText="Sign In"
        onSubmit={signin}
      />
      <NavLink linkText="Don't have an Account? Sign Up" route="Signup" />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
    marginHorizontal: 15,
  },
});

export default SigninScreen;
