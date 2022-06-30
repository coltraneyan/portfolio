import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";

import Box from "./Box";

const Default = (): JSX.Element => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} color={"#e25295"} intensity={30} />
      <Box position={[0, 1, -4]} />
    </Canvas>
  );
};

export default Default;
