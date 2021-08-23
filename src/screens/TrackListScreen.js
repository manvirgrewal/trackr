import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
import Swipeable from "react-native-gesture-handler/Swipeable";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks, deleteTrack } = useContext(TrackContext);
  const [item, setItem] = useState(null);

  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 70,
  };

  const RightActions = (id) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: "white",
            paddingHorizontal: 20,
            fontWeight: "600",
          }}
        >
          Delete
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View>
              <Swipeable
                renderRightActions={RightActions}
                onSwipeableRightWillOpen={() => {
                  deleteTrack(item._id);
                  fetchTracks();
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("TrackDetail", { _id: item._id });
                  }}
                >
                  <ListItem>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              </Swipeable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default TrackListScreen;
