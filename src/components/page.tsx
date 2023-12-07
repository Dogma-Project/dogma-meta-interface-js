import { useContext } from "react";
import Container from "react-bootstrap/Container";

import { AuthContext, AppContextProvider } from "../context";
import SetPrefix from "./set-prefix";
import ServicesManager from "./services-manager";

function Page() {
  const {
    state: { prefix },
  } = useContext(AuthContext);

  return (
    <Container fluid>
      {!prefix ? (
        <SetPrefix></SetPrefix>
      ) : (
        <AppContextProvider>
          <ServicesManager></ServicesManager>
        </AppContextProvider>
      )}
    </Container>
  );
}

export default Page;
