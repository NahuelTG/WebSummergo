import { useState } from 'react'
import PropTypes from 'prop-types'
import { Html } from '@react-three/drei'
import Test from '../../assets/svg/test_icon.svg' // Importa el SVG
import './InteractionModal.css' // Estilos CSS

export const InteractionModal = ({ position }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [open, setOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0) // Estado para el video actual

  // Lista de videos
  const videos = [
    'https://www.youtube.com/embed/yxrjSE8XddA?si=8V_0hFFv6itw0DJv',
    'https://www.youtube.com/embed/bjxCH2fX4QU?si=izlkd_vj6dFFiQzc',
    'https://www.youtube.com/embed/QdBZY2fkU-0?si=qM65SU-7_HM-Kipu',
  ]

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
            <p>Navigate through the videos:</p>

            {/* Selector de videos */}
            <div className="video-selector">
              {videos.map((video, index) => (
                <button
                  key={index}
                  className={`video-button ${currentVideo === index ? 'active' : ''}`}
                  onClick={() => setCurrentVideo(index)}
                >
                  Video {index + 1}
                </button>
              ))}
            </div>

            {/* Video embebido */}
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={videos[currentVideo]}
                title={`YouTube video player ${currentVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

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
