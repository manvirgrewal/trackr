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

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
