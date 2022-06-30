import { useState } from "react";
import NavBar from "../navbar/NavBar";
import Main from "../main/Main";

import Default from "../main/subcomponents/default/Default";

import "./global.css";
import "./home.css";

const Home = (): JSX.Element => {
  const [display, setDisplay] = useState(<Default />);

  function displayHandler(newDisplay: JSX.Element) {
    setDisplay(newDisplay);
  }

  return (
    <div className="home-wrapper">
      <NavBar displayHandler={displayHandler} />
      <Main display={display} />
    </div>
  );
};

export default Home;
