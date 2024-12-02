// src/components/AmbientMusic.jsx
import { useState, useRef } from 'react'
import Sound from '../assets/svg/sound.svg'
import NoSound from '../assets/svg/no_sound.svg'
import YoshiMusic from '../assets/sounds/Music_yoshi.mp3'
import './AmbientMusic.css' // Importamos el CSS

export const AmbientMusic = () => {
  const [isMuted, setIsMuted] = useState(false) // Estado para el mute
  const audioRef = useRef(null) // Referencia para controlar el audio

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play() // Reproduce el audio si está pausado
      }
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="ambient-music">
      {/* Control del audio */}
      <audio ref={audioRef} src={YoshiMusic} autoPlay loop />
      {/* Botón para mute/unmute */}
      <a onClick={toggleMute} className="mute-toggle">
        <img src={isMuted ? NoSound : Sound} alt={isMuted ? 'No sound' : 'Sound'} />
      </a>
    </div>
  )
}
