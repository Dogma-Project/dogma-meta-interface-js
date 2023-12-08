import { useContext } from "react";
import { AppContext } from "../../context";
import ListGroup from "react-bootstrap/esm/ListGroup";

function Services() {
  const { state } = useContext(AppContext);

  return (
    <>
      <h3>Services state</h3>
      <ListGroup>
        {state.services.map((item) => {
          return (
            <ListGroup.Item>
              {item.service} : {item.state}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Services;
