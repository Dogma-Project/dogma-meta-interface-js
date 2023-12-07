import AppHeader from "./header";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function AppLayout() {
  return (
    <>
      <AppHeader></AppHeader>
      <RouterProvider router={router} />
    </>
  );
}

export default AppLayout;
