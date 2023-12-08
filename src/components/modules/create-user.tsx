import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import ApiRequest from "../../helpers/request";
import { C_Keys, C_Defaults } from "@dogma-project/constants-meta";

function CreateUser() {
  const [keyLength, setKeyLength] = useState(4096); // edit
  const [userName, setUserName] = useState(C_Defaults.userName);

  const saveValue = () => {
    ApiRequest("POST", "/keys", {
      params: {
        name: userName,
        length: keyLength,
        type: C_Keys.Type.masterKey,
      },
    });
  };

  return (
    <Card>
      <Card.Header>Create User Key</Card.Header>
      <Card.Body>
        <Card.Title>User key is your login and main identity.</Card.Title>
        <Card.Text>
          A pair of RSA private and pubic keys, which is your main identifier as
          an user of network. SHA256 Fingerprint of a public user key used as
          your User ID. When someone adds friend's user_id, he automatically
          allows all connections from nodes, associated with User Key. User key
          is just one for all your nodes (devices) and you should keep it as a
          proof of your identity. Closest analog in centralized networks is
          login+password credentials.
        </Card.Text>

        <Form.FloatingLabel label="User Name (Nickname)" className="mb-3">
          <Form.Control
            type="text"
            placeholder=" "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.FloatingLabel>

        <Form.FloatingLabel label="Set User Key length">
          <Form.Select
            value={keyLength}
            onChange={(e) => setKeyLength(Number(e.target.value))}
          >
            <option value={2048}>2048 bits</option>
            <option value={4096}>4096 bits (recommended)</option>
          </Form.Select>
        </Form.FloatingLabel>

        <Col className="my-3">
          <Button
            variant="primary"
            className="mx-3"
            onClick={saveValue}
            disabled={userName.length < 3}
          >
            Next
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default CreateUser;
