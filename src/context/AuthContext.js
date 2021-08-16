import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "signin":
      return { ...state, errorMessage: "", token: action.payload };
    case "signout":
      return { ...state, errorMessage: "", token: null };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

//implicit return =>
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up.",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in.",
      });
    }
  };

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("Signin");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign out.",
    });
  }
};

const clearError = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearError, tryLocalSignin, signout },
  { token: null, errorMessage: "" }
);
