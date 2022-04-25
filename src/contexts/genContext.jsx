import { createContext, useReducer } from "react";

export const GenContext = createContext();

const initialState = {
  albumId: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ALBUM_ID":
      return {
        ...state,
        albumId: payload,
      };
    default:
      return state;
  }
};

const GenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GenContext.Provider value={{ state, dispatch }}>
      {children}
    </GenContext.Provider>
  );
};

export default GenProvider;
