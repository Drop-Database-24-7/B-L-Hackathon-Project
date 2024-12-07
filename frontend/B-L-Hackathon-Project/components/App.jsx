import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Cloud, OrbitControls } from '@react-three/drei'
// import "./App.css"
import * as THREE from 'three'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry />
      <meshPhongMaterial wireframe color={hovered ? 'orange' : 'white'} />
    </mesh>
  )
}

function Main_Mesh() {

  const [buttonClicked, setCamera] = useState(false)
  const markerRef = useRef();
  const vec = new THREE.Vector3()

  useFrame(state => {
    if (buttonClicked) {
      state.camera.lookAt(markerRef.current.position)
      state.camera.position.lerp(vec.set(0,0,0), .01)
      state.camera.updateProjectionMatrix()
    }
    return null
  })

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
      <div className='bg-#242424'>
        <div className='Welcome-main-text'>
          <div className='Welcome-desc'>
            {/* <Welcome/> */}
            {/* <Button  sx={{
              color:'white', 
              borderColor: 'black',
              justifyItems:'center',
              alignText:'center',
              "&:hover": {
                  borderColor: 'white'
                }}}  variant='outlined' onClick={() => setClicked(!buttonClicked)}>
              <a style={{color:'white'}} href={'/welcome'}>
                See more
              </a>
            </Button> */}
          </div>
        </div>
        <div style={{ width: "100vw", height: "70vh" }}>
          <Canvas camera={{ position: [10, 500, 10] }}>
            <Main_Mesh />
          </Canvas>
          <div className='flex justify-center items-center absolute left-1/2 bottom-10 transform -translate-x-1/2'>
            <button className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-black-700 transition-all'>
              Go To App
            </button>
          </div>
        </div>
      </div>
    );
  }
  

export default App