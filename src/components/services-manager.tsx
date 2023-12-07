import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import ApiRequest from "../helpers/request";
import AppLayout from "./app-layout";
import { C_Event } from "@dogma-project/constants-meta";

function ServicesManager() {
  const {
    state: { services },
    dispatch,
  } = useContext(AppContext);

  const [stage, setStage] = useState(0);

  useEffect(() => {
    ApiRequest("GET", "/services", {
      cb: (data) => {
        dispatch({
          type: "set",
          value: {
            services: data,
          },
        });
      },
    });
  }, []);

  useEffect(() => {
    const user = services.find(
      (item) => item.service === C_Event.Type.storageUser
    );
    console.log("USER", user);
    if (!user || user.state <= 2) {
      return setStage(1);
    }
    const node = services.find(
      (item) => item.service === C_Event.Type.storageNode
    );
    if (!node || node.state <= 2) {
      return setStage(2);
    }
    const config = services.find(
      (item) => item.service === C_Event.Type.configDb
    );
    if (!config || config.state <= 2) {
      return setStage(3);
    }
    setStage(4);
  }, [services]);

  return stage === 1 ? (
    <div>Set user</div>
  ) : stage === 2 ? (
    <div>Set node</div>
  ) : stage === 3 ? (
    <div>Set config</div>
  ) : stage === 4 ? (
    <AppLayout></AppLayout>
  ) : (
    <div>Loading</div>
  );
}

export default ServicesManager;
