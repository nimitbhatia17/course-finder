import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar.jsx";
import WelcomeScreen from "./views/WelcomeScreen/WelcomeScreen";
import CountrySelect from "./views/CountrySelect/CountrySelect";
import MBA3 from "./views/MBA3/MBA3";

function App() {
  const screen = useSelector((state) => state.screen);

  return (
    <div className='App'>
      <Navbar />
      {screen.sno === 0 && <WelcomeScreen />}
      {screen.sno === 1 && <CountrySelect />}
      {screen.course === "MBA" && screen.sno === 2 && <MBA3 />}
      {screen.course === "MBA" && screen.sno === 3 && <MBA3 />}
    </div>
  );
}

export default App;
