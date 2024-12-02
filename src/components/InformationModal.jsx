// src/components/AmbientMusic.jsx
import Information from '../assets/svg/information.svg'
import './InformationModal.css' // Importamos el CSS

export const InformationModal = () => {
  return (
    <div className="information-modal">
      <a className="information-toggle">
        <img src={Information} />
      </a>
    </div>
  )
}
