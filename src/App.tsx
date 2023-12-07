import { useContext } from "react";
import { AuthContextProvider, AuthContext } from "./context";
import Page from "./components/page";

function App() {
  const {
    state: { prefix },
  } = useContext(AuthContext);
  console.log("P", prefix);
  return (
    <AuthContextProvider>
      <Page></Page>
    </AuthContextProvider>
  );
}

export default App;
