//import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          console.log(location);
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? (
        <Text style={styles.errorMessage}>Please enable location services</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
  },
});

export default TrackCreateScreen;
