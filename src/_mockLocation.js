import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 49.1745439 + increment * tenMetersWithDegrees,
      latitude: -122.8791244 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 1;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
