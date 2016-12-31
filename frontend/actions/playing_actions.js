export const START_PLAYING = "START_PLAYING";
export const STOP_PLAYING = "STOP_PLAYING";

export const startPlaying = () => {
  return {
    type: START_PLAYING
  };
};

export const stopPlaying = () => {
  return {
    type: STOP_PLAYING
  };
};
