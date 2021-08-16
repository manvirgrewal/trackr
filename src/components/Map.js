import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      points.push({
        latitude: 49.1745439 + i * 0.0001,
        longitude: -122.87912440000001 + i * 0.0001,
      });
    } else {
      points.push({
        latitude: 49.1745439 - i * 0.0002,
        longitude: -122.87912440000001 + i * 0.0001,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 49.1745439,
        longitude: -122.87912440000001,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: 370,
  },
});

export default Map;
