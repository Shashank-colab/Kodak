import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import './App.css';

var clock = new THREE.Clock();
var scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(0.1, 1, 4);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;


function App() {
  return (<>
  <canvas>
    "hi"
    <cube />
  </canvas>
  </>
  )
};

export default App;
