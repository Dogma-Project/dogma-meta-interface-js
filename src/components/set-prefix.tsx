import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ApiRequest from "../helpers/request";

function SetPrefix() {
  const {
    state: { prefix },
    dispatch,
  } = useContext(AuthContext);

  const [value, setValue] = useState("");

  useEffect(() => {
    ApiRequest("GET", "/core/prefix", {
      cb: (data) => {
        if ("prefix" in data) {
          dispatch({ type: "set", value: { prefix: data.prefix } });
        } else {
          dispatch({ type: "set", value: { prefix: null } });
        }
      },
    });
  }, [value]);

  const saveValue = () => {
    ApiRequest("POST", "/core/prefix", {
      params: { prefix: value },
      cb: () => {
        dispatch({ type: "set", value: { prefix: value } });
      },
    });
  };

  return prefix === null ? (
    <Container className="d-flex align-items-center justify-content-center flex-row min-vh-100">
      <Card>
        <Card.Header>Select prefix</Card.Header>
        <Card.Body>
          {/* <Card.Title>Please, choose prefix to start app.</Card.Title> */}
          {/* <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text> */}

          <Form.Label htmlFor="prefixField">
            Please, choose prefix to start app.
          </Form.Label>
          <Form.Control
            type="text"
            id="prefixField"
            aria-describedby="passwordHelpBlock"
            placeholder="For example: default"
            onChange={(e) => setValue(e.target.value)}
          />
          {/* <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text> */}

          <Col className="my-3">
            <Button
              variant="primary"
              className="mx-3"
              onClick={saveValue}
              disabled={value.length < 3}
            >
              Next
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <div>FETCHING PREFIX...</div>
  );
}

export default SetPrefix;
