export const KEY_PRESSED = "KEY_PRESSED";
export const KEY_RELEASED = "KEY_RELEASED";
export const GROUP_UPDATE = "GROUP_UPDATE";

export const keyPressed = (key) => {
  return {
    type: KEY_PRESSED,
    key
  };
};

export const keyReleased = (key) => {
  return {
    type: KEY_RELEASED,
    key
  };
};

export const groupUpdate = (notes) => {
  return {
    type: GROUP_UPDATE,
    notes
  };
};
