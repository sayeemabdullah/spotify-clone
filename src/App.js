import GetPremiumButton from "./components/button/GetPremiumButton";
import LaunchWebPlayerButton from "./components/button/LaunchWebPlayerButton";
import NavBar from "./components/navBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <GetPremiumButton>GET SPOTIFY PREMIUM</GetPremiumButton>
        <br></br>
        <LaunchWebPlayerButton>LAUNCH WEB PLAYER</LaunchWebPlayerButton>
      </div>
    </>
  );
}

export default App;
