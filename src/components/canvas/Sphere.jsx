/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader  from '../Loader';

const Sphere = () => {
  const sphere = useGLTF('./sphere/scene.gltf')
  
  return (
    <mesh>
    <directionalLight color='#FD5D5D'>
      <ambientLight color='#00cea8' />
    </directionalLight>
    <ambientLight color='white' />
    
    
    <primitive 
      object={sphere.scene}
      scale={1.75}
      position-y={0}
      rotation-y={0}
    />
    </mesh>
  )
}

const SphereCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
          />
          <Sphere />

          <Preload all/>
        </Suspense>
      </Canvas>
  )
}

export default SphereCanvas