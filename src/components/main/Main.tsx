import React from "react";

import "./main.css";

interface Props {
  display: JSX.Element;
}

const Main = (props: Props): JSX.Element => {
  return <div className="main-wrapper">{props.display}</div>;
};

export default Main;
