import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = (callback) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    setName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <View style={styles.form}>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Enter name of track..."
        style={styles.trackName}
      />
      {!recording ? (
        <Button
          title="Start Recording"
          onPress={startRecording}
          buttonStyle={styles.greenButton}
        />
      ) : (
        <Button
          title="Stop Recording"
          onPress={stopRecording}
          buttonStyle={styles.redButton}
        />
      )}
      {!recording && locations.length > 0 ? (
        <Button
          title="Save Recording"
          //onPress={saveRecording}
          buttonStyle={styles.saveButton}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  trackName: {},
  form: {
    flex: 1,
    width: 250,
    height: 50,
    marginTop: 50,
  },
  redButton: {
    backgroundColor: "red",
  },
  greenButton: {
    backgroundColor: "green",
  },
  saveButton: {
    marginTop: 20,
  },
});

export default TrackForm;
