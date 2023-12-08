import AppHeader from "./header";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Container } from "react-bootstrap";

function AppLayout() {
  return (
    <>
      <AppHeader></AppHeader>
      <Container className="card my-3 p-3">
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default AppLayout;
