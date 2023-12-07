import { createContext, useReducer } from "react";
import { C_Event, C_System } from "@dogma-project/constants-meta";

class AppState {
  services: {
    service: C_Event.Type.Service;
    state: C_System.States;
  }[] = [];
}

type action = {
  type: string;
  value: object;
};

type ContextType = {
  state: AppState;
  dispatch: React.Dispatch<action>;
};

const defaultValue = new AppState();

export const AppContext = createContext<ContextType>({
  state: defaultValue,
  dispatch: () => null,
});

export const AppContextProvider = (props: { children: React.ReactNode }) => {
  const tasksReducer = (state: AppState, action: action) => {
    switch (action.type) {
      case "set": {
        return { ...state, ...action.value };
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  };

  const [state, dispatch] = useReducer(tasksReducer, defaultValue);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
