import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, actions) => {
  switch (actions.type) {
    case "fetch_tracks":
      return actions.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

const deleteTrack = (dispatch) => async (id) => {
  await trackerApi.delete(`/tracks/${id}`);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, deleteTrack },
  []
);
