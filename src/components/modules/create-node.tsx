import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import ApiRequest from "../../helpers/request";
import { C_Keys, C_Defaults } from "@dogma-project/constants-meta";

function CreateNode() {
  const [keyLength, setKeyLength] = useState(2048); // edit // add to constants
  const [nodeName, setNodeName] = useState(C_Defaults.nodeName);

  const saveValue = () => {
    ApiRequest("POST", "/keys", {
      params: {
        name: nodeName,
        length: keyLength,
        type: C_Keys.Type.nodeKey,
      },
    });
  };

  return (
    <Card>
      <Card.Header>Create Node Key</Card.Header>
      <Card.Body>
        <Card.Title>Node Key is your current device ID.</Card.Title>
        <Card.Text>
          A pair of RSA private and pubic keys, which is auto-generated on each
          of your devices as a node of network. SHA256 Fingerprint of a public
          node key used as your Node ID. If someone trusts user as a friend, he
          automatically trusts all connections from nodes, associated with his
          User Key. Node keys are different for all your nodes (devices) and you
          should not keep them or export across devices. It has no analogs in
          centralized network and you shouldn't handle it as a user. All that
          you should know - it is an identifier of a current device, which is
          associated with some user by his ID.
        </Card.Text>

        <Form.FloatingLabel label="Node Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder=" "
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
          />
        </Form.FloatingLabel>

        <Form.FloatingLabel label="Set Node Key length">
          <Form.Select
            value={keyLength}
            onChange={(e) => setKeyLength(Number(e.target.value))}
          >
            <option value={1024}>1024 bits (not recommended)</option>
            <option value={2048}>2048 bits (recommended)</option>
            <option value={4096}>4096 bits (best choise)</option>
          </Form.Select>
        </Form.FloatingLabel>

        <Col className="my-3">
          <Button
            variant="primary"
            className="mx-3"
            onClick={saveValue}
            disabled={nodeName.length < 3}
          >
            Next
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default CreateNode;
