import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator(
    {
      trackListFlow: {
        screen: createStackNavigator({
          TrackList: TrackListScreen,
          TrackDetail: TrackDetailScreen,
        }),
        navigationOptions: {
          tabBarLabel: "Tracks",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="go-kart-track"
              size={24}
              color={focused ? "#D4AF37" : "#900"}
            />
          ),
        },
      },
      TrackCreate: {
        screen: TrackCreateScreen,
        navigationOptions: {
          tabBarLabel: "Create",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="map-plus"
              size={24}
              color={focused ? "#D4AF37" : "#900"}
            />
          ),
        },
      },
      Account: {
        screen: AccountScreen,
        navigationOptions: {
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={focused ? "#D4AF37" : "#900"}
            />
          ),
        },
      },
    },
    {
      order: ["TrackCreate", "trackListFlow", "Account"],
      tabBarOptions: {
        activeTintColor: "#D4AF37",
        inactiveTintColor: "gray",
      },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
