import createDataContext from "../context/createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return {
        ...state,
        currentLocation: action.payload,
      };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "set_name":
      return { ...state, name: action.payload };
    case "reset":
      return { ...state, name: "", locations: [] };
    default:
      return state;
  }
};

const reset = (dispatch) => () => {
  dispatch({ type: "reset" });
};

const setName = (dispatch) => (name) => {
  dispatch({ type: "set_name", payload: name });
};

const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  recording ? dispatch({ type: "add_location", payload: location }) : null;
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { setName, startRecording, stopRecording, addLocation, reset },
  { name: "", recording: false, locations: [], currentLocation: null }
);
