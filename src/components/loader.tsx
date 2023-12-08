import { useContext } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { AppContext } from "../context";

export default function Loader() {
  const { state } = useContext(AppContext);

  return (
    state.busy && (
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1000 }}
        className="vh-100 vw-100 d-flex align-items-center justify-content-center position-absolute"
      >
        <Spinner animation="grow" variant="info" />
      </div>
    )
  );
}
