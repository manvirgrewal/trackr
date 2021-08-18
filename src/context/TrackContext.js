import createDataContext from "./createDataContext";

const trackReducer = (state, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};

const createTrack = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
