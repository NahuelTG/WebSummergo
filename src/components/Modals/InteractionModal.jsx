import { useState } from 'react'
import PropTypes from 'prop-types'
import { Html } from '@react-three/drei'
import Test from '../../assets/svg/test_icon.svg' // Importa el SVG
import './InteractionModal.css' // Estilos CSS

export const InteractionModal = ({ position }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <mesh
      position={position}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onClick={() => setOpen(true)}
    >
      <meshStandardMaterial color={isHovered ? 'hotpink' : 'blue'} />

      {/* Mostrar el SVG con HTML */}
      <Html center>
        <div onClick={() => setOpen(true)}>
          <img src={Test} alt="Interactive Icon" className="svg-icon" />
        </div>
      </Html>

      {/* Modal emergente */}
      {open && (
        <Html center>
          <div className="modal-content">
            <h2>Interactive Modal</h2>
            <p>Welcome to this interactive experience!</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </Html>
      )}
    </mesh>
  )
}

InteractionModal.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired, // Cambiado a array de números
}

export default InteractionModal
