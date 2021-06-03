import "./App.css";
import { UserProvider } from "./context/UserContext";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <UserProvider value="sidharth">
        <Menu></Menu>
      </UserProvider>
    </>
  );
}

export default App;
