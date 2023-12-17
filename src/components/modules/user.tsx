import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import ExportKeyModal from "./parts/export-key";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { AppContext, WebsocketContext } from "../../context";
import { C_API } from "@dogma-project/constants-meta";

export default function User() {
  const [modal, setModal] = useState(false);
  const { isReady, value, send } = useContext(WebsocketContext);
  const {
    state: { user, node },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (isReady) {
      console.log("REQUEST", "GET NODE");
      send({
        type: C_API.ApiRequestType.node,
        action: C_API.ApiRequestAction.get,
      });
    }
  }, [isReady]);

  useEffect(() => {
    if (value) {
      if (value.type === C_API.ApiRequestType.node) {
        console.log("NODE", value.payload);
        dispatch({
          type: C_API.ApiRequestAction.set,
          value: { node: value.payload },
        });
      } else if (value.type === C_API.ApiRequestType.user) {
        dispatch({
          type: C_API.ApiRequestAction.set,
          value: { user: value.payload },
        });
      }
    }
  }, [value]);

  return (
    <>
      <ExportKeyModal
        open={modal}
        onclose={() => setModal(false)}
      ></ExportKeyModal>

      <Typography id="modal-modal-title" variant="h5" component="div">
        User page
      </Typography>

      <Card elevation={3} sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            User Key
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user?.name}
          </Typography>
          <Typography variant="body2">{user?.user_id}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "right" }}>
          <Button
            onClick={() => setModal(true)}
            sx={{ m: 2 }}
            variant="contained"
          >
            Export key
          </Button>
        </CardActions>
      </Card>

      <Card elevation={3} sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Node Key
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {node?.name}
          </Typography>
          <Typography variant="body2" noWrap={false}>
            {node?.node_id}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "right" }}>
          <Button sx={{ m: 2 }} variant="contained" disabled>
            Info
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
