import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import ApiRequest from "../../helpers/request";
import { C_Connection, C_Event } from "@dogma-project/constants-meta";
import Row from "react-bootstrap/esm/Row";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

function CreateSettings() {
  const [router, setRouter] = useState(24601); //edit

  const [dhtAnnounce, setDhtAnnounce] = useState(C_Connection.Group.friends);
  const [dhtLookup, setDhtLookup] = useState(C_Connection.Group.friends);
  const [dhtBootstrap, setDhtBootstrap] = useState(C_Connection.Group.friends);

  const [localDiscovery, setLocalDiscovery] = useState(true);
  const [autoDefine, setAutoDefine] = useState(true);
  const [external, setExternal] = useState("service1\nservice2\nservice3");

  const saveValue = () => {
    const params: {
      [key in C_Event.Type.Config]?: string | boolean | number;
    } = {
      [C_Event.Type.configRouter]: router,
      [C_Event.Type.configDhtAnnounce]: dhtAnnounce,
      [C_Event.Type.configDhtLookup]: dhtLookup,
      [C_Event.Type.configDhtBootstrap]: dhtBootstrap,
      [C_Event.Type.configLocalDiscovery]: localDiscovery,
      [C_Event.Type.configAutoDefine]: autoDefine,
      [C_Event.Type.configExternal]: autoDefine ? external : "",
    };
    ApiRequest("PUT", "/config", { params });
  };

  return (
    <Card className="my-5">
      <Card.Header>Initial settings</Card.Header>
      <Card.Body>
        <Card.Title className="mb-3">
          Specify initial settings for your node. You can change them later.
        </Card.Title>

        <Form.Label title="Router port is ...">Router Port</Form.Label>
        <Form.Range
          value={Math.round((router / 65536) * 100)}
          onChange={(e) => {
            const { value } = e.target;
            setRouter(Math.round((Number(value) / 100) * 65536));
          }}
        />
        <Form.FloatingLabel label="Router port (1024~65536)" className="mb-3">
          <Form.Control
            type="text"
            placeholder=" "
            value={router}
            onChange={(e) => setRouter(Number(e.target.value) || 0)}
          />
        </Form.FloatingLabel>

        <Row className="mb-3">
          <Form.Label title="DHT is ...">DHT</Form.Label>
          <Col>
            <FloatingLabel controlId="floatingSelect1" label="DHT announce">
              <Form.Select
                value={dhtAnnounce}
                onChange={(e) => setDhtAnnounce(Number(e.target.value))}
              >
                <option value={C_Connection.Group.all}>All</option>
                <option value={C_Connection.Group.friends}>Friends</option>
                <option value={C_Connection.Group.selfUser}>Self nodes</option>
                <option value={C_Connection.Group.nobody}>Nobody</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingSelect2" label="DHT lookup">
              <Form.Select
                value={dhtLookup}
                onChange={(e) => setDhtLookup(Number(e.target.value))}
              >
                <option value={C_Connection.Group.all}>All</option>
                <option value={C_Connection.Group.friends}>Friends</option>
                <option value={C_Connection.Group.selfUser}>Self nodes</option>
                <option value={C_Connection.Group.nobody}>Nobody</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingSelect3" label="DHT bootstrap">
              <Form.Select
                value={dhtBootstrap}
                onChange={(e) => setDhtBootstrap(Number(e.target.value))}
              >
                <option value={C_Connection.Group.all}>All</option>
                <option value={C_Connection.Group.friends}>Friends</option>
                <option value={C_Connection.Group.selfUser}>Self nodes</option>
                <option value={C_Connection.Group.nobody}>Nobody</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label>Network</Form.Label>
          <Col>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Local discovery"
              checked={localDiscovery}
              onChange={(e) => setLocalDiscovery(e.target.checked)}
            />
          </Col>
          <Col>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="External define IP"
              checked={autoDefine}
              onChange={(e) => setAutoDefine(e.target.checked)}
            />
          </Col>
        </Row>

        {autoDefine && (
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>External services</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={external}
              onChange={(e) => setExternal(e.target.value)}
            />
          </Form.Group>
        )}

        <Col>
          <Button
            variant="primary"
            className="mx-3"
            onClick={saveValue}
            disabled={router < 1024 || router > 65536}
          >
            Next
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default CreateSettings;
