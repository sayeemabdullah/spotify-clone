import GetPremiumButton from "./components/button/GetPremiumButton";
import LaunchWebPlayerButton from "./components/button/LaunchWebPlayerButton";
import NavBar from "./components/navBar/NavBar";
import HeaderDiv from "./components/div/HeaderDiv";
import SecondDiv from "./components/div/SecondDiv";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <HeaderDiv></HeaderDiv>
        <SecondDiv></SecondDiv>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
