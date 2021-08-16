import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const navLink = ({ linkText, route, navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(route);
        }}
      >
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    color: "blue",
    textAlign: "center",
  },
});

export default withNavigation(navLink);
