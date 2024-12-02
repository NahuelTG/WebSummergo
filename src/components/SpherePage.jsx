import { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import image from '../assets/city-360.jpg'

export const SpherePage = () => {
  const sphereRef = useRef()

  // Usar useLoader para cargar la textura
  const texture = useLoader(THREE.TextureLoader, image)

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[100, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  )
}
