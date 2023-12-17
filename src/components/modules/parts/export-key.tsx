import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { AppContext, WebsocketContext } from "../../../context";
import { C_API } from "@dogma-project/constants-meta";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ExportKeyModal(props: {
  open: boolean;
  onclose: () => void;
}) {
  const {
    state: { prefix },
  } = useContext(AppContext);
  const { request } = useContext(WebsocketContext);
  const [blob, setBlob] = useState("");

  useEffect(() => {
    request(
      {
        type: C_API.ApiRequestType.keys,
        action: C_API.ApiRequestAction.get,
      },
      (res) => {
        if (res.payload && res.payload.length) {
          const file = new Blob([res.payload], {
            type: "text/plain;charset=utf-8",
          });
          setBlob(URL.createObjectURL(file));
        }
      }
    );
  }, []);

  const getFileName = () => {
    return `${prefix}_${Math.round(Date.now() / 1000)}.cert`;
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onclose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Export User Key
        </Typography>
        <Typography id="modal-modal-description" sx={{ my: 2 }}>
          Save this file and import it when you will create a new nodes. Keep it
          in secret - this is your main identity.
        </Typography>
        <Button disabled={!blob} href={blob} download={getFileName()}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}
