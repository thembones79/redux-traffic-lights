import { RED, YELLOW, GREEN, CHANGE_LIGHT, A, B } from "./actions";

const initialState = { activeLight: { A: RED, B: GREEN }, lastChanged: B };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LIGHT:
      console.log({ reducerState: state, action });
      if (state.lastChanged === B) {
        switch (state.activeLight.A) {
          case RED:
            if (state.activeLight.B === RED) {
              return {
                ...state,
                activeLight: { A: GREEN, B: state.activeLight.B },
                lastChanged: A
              };
            } else {
              return {
                ...state,
                activeLight: { A: state.activeLight.A, B: state.activeLight.B },
                lastChanged: A
              };
            }

          case YELLOW:
            if (state.activeLight.B === RED) {
              return {
                ...state,
                activeLight: { A: RED, B: state.activeLight.B },
                lastChanged: A
              };
            } else {
              return {
                ...state,
                activeLight: { A: state.activeLight.A, B: state.activeLight.B },
                lastChanged: A
              };
            }
          case GREEN:
            return {
              ...state,
              activeLight: { A: YELLOW, B: state.activeLight.B },
              lastChanged: A
            };
          default:
            return state;
        }
      } else if (state.lastChanged === A) {
        switch (state.activeLight.B) {
          case RED:
            if (state.activeLight.A === RED) {
              return {
                ...state,
                activeLight: { A: state.activeLight.A, B: GREEN },
                lastChanged: B
              };
            } else {
              return {
                ...state,
                activeLight: { A: state.activeLight.A, B: state.activeLight.B },
                lastChanged: B
              };
            }

          case YELLOW:
            if (state.activeLight.A === RED) {
              return {
                ...state,
                activeLight: { A: state.activeLight.A, B: RED },
                lastChanged: B
              };
            } else {
              return {
                ...state,
                activeLight: { A: state.activeLight.A, B: state.activeLight.B },
                lastChanged: B
              };
            }
          case GREEN:
            return {
              ...state,
              activeLight: { A: state.activeLight.A, B: YELLOW },
              lastChanged: B
            };
          default:
            return state;
        }
      } else {
        return state;
      }

    default:
      return state;
  }
}
