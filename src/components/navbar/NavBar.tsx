import { useState } from "react";
import Default from "../main/subcomponents/default/Default";
import About from "../main/subcomponents/about/About";
import Projects from "../main/subcomponents/projects/Projects";
import Previous from "../main/subcomponents/previous/Previous";
import Contact from "../main/subcomponents/contact/Contact";

import "./navbar.css";

import toggleActive from "../functions/toggleActive";

interface Props {
  displayHandler: (display: JSX.Element) => void;
}

const NavBar = (props: Props): JSX.Element => {
  const [active, setActive] = useState<HTMLDivElement | undefined>(undefined);

  function handleActive(target: HTMLDivElement | null): void {
    if (active) {
      toggleActive(active, "active");
      setActive(undefined);
    }

    if (target) {
      setActive(target);
      toggleActive(target, "active");
    }
  }

  return (
    <div className="nav-wrapper">
      <div className="item-wrapper">
        <div
          className="bold-font nav-button"
          onClick={() => {
            props.displayHandler(<Default />);
            handleActive(null);
          }}
        >
          coltrane.cc
        </div>
        <div className="mono-font">00</div>
      </div>
      <div className="item-wrapper">
        <div
          className="nav-button bold-font"
          onClick={(e) => {
            props.displayHandler(<About />);
            handleActive(e.target as HTMLDivElement);
          }}
        >
          About
        </div>
        <div className="number mono-font">01</div>
      </div>
      <div className="item-wrapper">
        <div
          className="nav-button bold-font"
          onClick={(e) => {
            props.displayHandler(<Projects />);
            handleActive(e.target as HTMLDivElement);
          }}
        >
          Projects
        </div>
        <div className="number mono-font">02</div>
      </div>
      <div className="item-wrapper">
        <div
          className="nav-button bold-font"
          onClick={(e) => {
            props.displayHandler(<Previous />);
            handleActive(e.target as HTMLDivElement);
          }}
        >
          Previous
        </div>
        <div className="number mono-font">03</div>
      </div>
      <div className="item-wrapper">
        <div
          className="nav-button bold-font"
          onClick={(e) => {
            props.displayHandler(<Contact />);
            handleActive(e.target as HTMLDivElement);
          }}
        >
          Contact
        </div>
        <div className="number mono-font">04</div>
      </div>
    </div>
  );
};

export default NavBar;
