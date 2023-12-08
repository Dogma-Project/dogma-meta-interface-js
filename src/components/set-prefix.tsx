import { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { AppContext } from "../context";

function SetPrefix({
  setPrefix,
}: {
  setPrefix: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const { apiRequest } = useContext(AppContext);

  const [value, setValue] = useState("");

  const saveValue = () => {
    apiRequest("POST", "/core/prefix", {
      params: { prefix: value },
      cb: () => {
        setPrefix(value);
      },
    });
  };

  return (
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
  );
}

export default SetPrefix;
