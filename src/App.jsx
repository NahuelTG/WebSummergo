import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SpherePage } from './components/SpherePage'
import { InteractionModal } from './components/Modals/InteractionModal.jsx'

import * as THREE from 'three'
import { useState } from 'react'
import './App.css'

import { Modal } from './components/Modal'
import { AmbientMusic } from './components/AmbientMusic'
import { InformationModal } from './components/InformationModal'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="app-container">
      {/* Botones en la pantalla */}
      <div className="ui-buttons">
        <AmbientMusic />
        <InformationModal />
      </div>

      {/* Modal */}
      {openModal && <Modal setOpenModal={setOpenModal} />}
      {/* Lienzo 3D */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SpherePage />

        <InteractionModal position={[90, 10, 10]} />
        <OrbitControls
          enablePan={false}
          minDistance={90}
          maxDistance={110}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            RIGHT: null,
          }}
        />
      </Canvas>
    </div>
  )
}

export default App
