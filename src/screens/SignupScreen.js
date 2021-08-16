import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForm
        headerText="Sign Up for Tracker!"
        errorMessage={state.errorMessage}
        buttonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink linkText="Already have an account? Sign In" route="Signin" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
