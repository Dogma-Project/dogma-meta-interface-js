import { createContext, useReducer } from "react";
import { C_Event, C_System } from "@dogma-project/constants-meta";

import { API_PATH } from "../const";

type AdditionalParams = {
  params?: object;
  cb?: (data: object) => void;
};

class AppState {
  services: {
    service: C_Event.Type.Service;
    state: C_System.States;
  }[] = [];
  busy: boolean = true;
}

type action = {
  type: string;
  value: object;
};

type request = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  additional?: AdditionalParams
) => void;

type ContextType = {
  state: AppState;
  dispatch: React.Dispatch<action>;
  apiRequest: request;
};

const defaultValue = new AppState();

export const AppContext = createContext<ContextType>({
  state: defaultValue,
  dispatch: () => null,
  apiRequest: () => null,
});

export const AppContextProvider = (props: { children: React.ReactNode }) => {
  const tasksReducer = (state: AppState, action: action) => {
    console.log("ACT", action.type, action.value);
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

  const apiRequest = (
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    additional?: AdditionalParams
  ) => {
    dispatch({
      type: "set",
      value: {
        busy: true,
      },
    });
    const query: RequestInit = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: undefined,
    };
    if (additional && additional.params) {
      query.body = JSON.stringify(additional.params);
    }
    fetch(API_PATH + path, query)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "set",
          value: {
            busy: false,
          },
        });
        if (additional && additional.cb) {
          additional.cb(data || {});
        }
      })
      .catch((err) => {
        dispatch({
          type: "set",
          value: {
            busy: false,
          },
        });
        console.error(err); // add handler
      });
  };

  return (
    <AppContext.Provider value={{ state, apiRequest, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
