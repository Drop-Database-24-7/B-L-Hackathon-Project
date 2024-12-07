import React, { useRef, useState } from 'react' 
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Cloud, OrbitControls } from '@react-three/drei'
// import "./App.css"
import Link from 'next/link'
import * as THREE from 'three'

function Box(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    
    useFrame((state, delta) => (ref.current.rotation.y += delta));
  
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 5 : 3}  // Adjust this value to resize the planet
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        {/* <sphereGeometry /> */}
        <meshPhongMaterial wireframe color={hovered ? 'orange' : 'white'} />
      </mesh>
    );
  }
  

  function Main_Mesh() {
    const [planetSize, setPlanetSize] = useState(3);  // Default planet size
    const markerRef = useRef();
    const vec = new THREE.Vector3();
  
    useFrame((state) => {
      if (planetSize > 0) {
        state.camera.lookAt(markerRef.current.position);
        state.camera.position.lerp(vec.set(0, 0, 0), 0.01);
        state.camera.updateProjectionMatrix();
      }
      return null;
    });
  

  return (
    <mesh ref={markerRef} >
      <ambientLight />
      <OrbitControls autoRotate autoRotateSpeed={.5} enableZoom={false} enablePan={false}/>
      <Cloud/>
      <Stars speed={.5}/>
      <pointLight position={[-1.2, 0, 0]} intensity={1}/>
      <Box position={[-1.2, 0, 0]} />
    </mesh>
  )
}

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className='Welcome-main-text'>
        <div className='Welcome-desc'>
          {/* Add any other content or components here */}
        </div>
      </div>

      <div className='w-full h-size-3/4' style={{ width: "100vw", height: "70vh" }}>
        <Canvas camera={{ position: [10, 500, 10] }} style={{ background: 'black' }}>
          <Main_Mesh />
        </Canvas>

          <h1 className='flex text-7xl text-white font-24 justify-center'>
            GoGoSatelite
           </h1>
        <div className='flex justify-center items-center absolute left-1/2 bottom-10 transform -translate-x-1/2'>
          <Link href="/home">
            <button className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-black-700 transition-all'>
             Go To App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App