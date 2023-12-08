import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import { AppContext } from "../context";
import SetPrefix from "./set-prefix";
import ServicesManager from "./services-manager";

function Page() {
  const [prefix, setPrefix] = useState<string | undefined>();

  const { apiRequest } = useContext(AppContext);

  useEffect(() => {
    console.log("PRE", prefix, new Date());
    apiRequest("GET", "/core/prefix", {
      cb: (data) => {
        if ("prefix" in data) {
          setPrefix(data.prefix as string);
        }
      },
    });
  }, []);

  return (
    <Container fluid>
      {!prefix ? (
        <SetPrefix setPrefix={setPrefix}></SetPrefix>
      ) : (
        <ServicesManager></ServicesManager>
      )}
    </Container>
  );
}

export default Page;
