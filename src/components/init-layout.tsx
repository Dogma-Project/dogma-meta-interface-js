import AppHeader from "./header";
import CreateUser from "./modules/create-user";
import CreateNode from "./modules/create-node";
import CreateSettings from "./modules/create-settings";
import Container from "react-bootstrap/esm/Container";

function InitLayout({ stage }: { stage: number }) {
  return (
    <>
      <AppHeader disabled={true}></AppHeader>
      <Container className="d-flex align-items-center justify-content-center flex-row h-100">
        {stage === 1 ? (
          <CreateUser></CreateUser>
        ) : stage === 2 ? (
          <CreateNode></CreateNode>
        ) : stage === 3 ? (
          <CreateSettings></CreateSettings>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

export default InitLayout;
