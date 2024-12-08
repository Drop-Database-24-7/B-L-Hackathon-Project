import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Cloud, OrbitControls } from '@react-three/drei';
import Link from 'next/link';
import * as THREE from 'three';

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  useFrame((state) => {
    const { clientX, clientY } = state.mouse;
    const x = clientX * 2 - 1;
    const y = -(clientY * 2 - 1);
    ref.current.rotation.y = x * Math.PI;
    ref.current.rotation.x = y * Math.PI;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={3}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <meshPhongMaterial wireframe color={hovered ? 'orange' : 'white'} />
    </mesh>
  );
}

function Main_Mesh() {
  return (
    <mesh>
      <ambientLight />
      <OrbitControls autoRotate={false} enableZoom={false} enablePan={false} />
      <Cloud />
      <Stars speed={0.5} />
      <pointLight position={[-1.2, 0, 0]} intensity={1} />
      <Box position={[-1.2, 0, 0]} />
    </mesh>
  );
}

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="Welcome-main-text">
        <div className="Welcome-desc">
        </div>
      </div>

      <div className="w-full h-size-3/4" style={{ width: "100vw", height: "70vh" }}>
        <Canvas camera={{ position: [10, 500, 10] }} style={{ background: 'black' }}>
          <Main_Mesh />
        </Canvas>

        <h1 className="flex text-7xl text-white font-24 justify-center">
          GoGoSatelite
        </h1>
        <div className="flex justify-center items-center absolute left-1/2 bottom-10 transform -translate-x-1/2">
          <Link href="/home">
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-black-700 transition-all">
              Go To App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;